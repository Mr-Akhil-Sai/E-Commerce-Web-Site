let express = require("express");
let path = require("path");

let app = express();
let port = 4040;

app.use(express.static(path.join(__dirname, "public")));

app.all("*", (req, res) => {
  res.status(400).send("Page not found");
});

app.listen(port, () => console.log(`server listening on port ${port}`));
