const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", (req, res) => res.json({ msg: "Server running" }));

app.listen(PORT, console.log(`Server started on ${PORT}`));
