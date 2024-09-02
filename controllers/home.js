const path = require("path");

function render(req, res, next) {
  try {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
  } catch (error) {
    next(error);
  }
}

exports.render = render;
