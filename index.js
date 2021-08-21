const express = require('express');
const Gun = require('gun');
const app = express();
const notes = require("./api/notes");
const port = process.env.PORT || 3030;

app.use(Gun.serve);
app.use("/api/test", notes);
const server = app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})

Gun({web: server});