const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Nevon Music Distribution API 🚀");
});

app.listen(3000, () => {
  console.log("Servidor a correr na porta 3000");
});
