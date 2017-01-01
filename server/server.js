const express = require("express");
const app = express();

app.get("/", (req, res) => {
	console.log("here");
	res.send("hello");
});

app.listen(3000, (err) => {
  if (err) { console.log(err) };

  console.log("Server listening on port 3000");
});
