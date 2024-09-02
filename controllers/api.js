const path = require("path");

async function getOutput(req, res, next) {
  try {
    const text = req.query.text;
    console.log(`Data from the frontend: ${text}`);
    const data = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic necessitatibus recusandae qui, vero sit animi quia molestiae cumque inventore excepturi odio non rerum dolorum ratione deserunt accusantium illo ducimus.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sequi nemo quibusdam libero magnam obcaecati quaerat corporis. Repellendus laboriosam repellat iure impedit. Sed vero quaerat doloribus voluptate accusantium illum deserunt!
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati voluptatum ducimus accusamus repellendus, et distinctio reiciendis odio. Delectus illo atque tenetur dolor, repellat explicabo consequuntur ratione quas, accusantium eos dolore.`;
    res.json({ status: "success", data });
  } catch (error) {
    next(error);
  }
}

exports.getOutput = getOutput;
