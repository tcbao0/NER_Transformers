require("dotenv").config();
const axios = require("axios");

const modelPort = process.env.MODEL_PORT || 8000;

const entity = {
  PER: `<span class="ent ent-person">`,
  ORG: `<span class="ent ent-org">`,
  LOC: `<span class="ent ent-loc">`,
  MISC: `<span class="ent ent-misc">`,
  END: `</span>`,
};

const label = {
  PER: `<span class="entity-label">PERSON</span>`,
  ORG: `<span class="entity-label">ORG</span>`,
  LOC: `<span class="entity-label">LOC</span>`,
  MISC: `<span class="entity-label">MISC</span>`,
};

async function getOutput(req, res, next) {
  try {
    const text = req.query.text;
    const response = await axios.post(`http://localhost:${modelPort}/api/ner`, {
      text,
    });
    const nerResults = response.data;
    if (!nerResults || !nerResults.length) {
      res.json({ status: "success", data: text });
    }
    let returnText = "";
    let i = 0;
    let ent = nerResults.shift();
    let start = ent.start;
    let end = ent.end;
    let type = ent.entity;
    let lastType = type.slice(2);
    while (i < start) {
      returnText += text[i];
      i++;
    }
    returnText += entity[type.slice(2)];
    while (i < end) {
      returnText += text[i];
      i++;
    }
    while (nerResults.length) {
      ent = nerResults.shift();
      start = ent.start;
      end = ent.end;
      type = ent.entity;
      let flag = false;
      if (type[0] == "B") {
        returnText += label[lastType];
        returnText += entity.END;
        flag = true;
        lastType = type.slice(2);
      }
      while (i < start) {
        returnText += text[i];
        i++;
      }
      if (flag) {
        returnText += entity[type.slice(2)];
      }
      while (i < end) {
        returnText += text[i];
        i++;
      }
    }
    returnText += label[lastType];
    returnText += entity.END;
    while (i < text.length) {
      returnText += text[i];
      i++;
    }
    res.json({ status: "success", data: returnText });
  } catch (error) {
    next(error);
  }
}

exports.getOutput = getOutput;
