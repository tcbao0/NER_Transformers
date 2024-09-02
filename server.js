const path = require("path");
const app = require(path.join(__dirname, "app"));
require("dotenv").config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
