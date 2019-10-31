const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/creditcards", require("./routes/creditcards"));

app.listen("8989", () => {
  console.log("API is running");
});
