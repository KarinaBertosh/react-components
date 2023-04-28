const express = require("express");
const fs = require("fs");
const path = require("path");
const ReactDOMServer = require("react-dom/server");
const app = express();
const PORT = 8000;
const { App } = require("../src/App");

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(App)}</div>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`App launched on http://localhost:${PORT}/`);
});
