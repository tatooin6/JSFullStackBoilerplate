// R
import fs from "fs";
import cors from "cors";
import express from "express";
const PORT = 3000;
const app = express();
// U
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// E
app.get("/users", (req, res) => {
  const response = readDB();
  res.json(response);
});
app.post("/users", (req, res) => {
  const requestData = req.body;

  try {
    writeDB(requestData);
    res.json({ status: "success", saved: requestData });
    const current = readDB();
    console.log(current)
  } catch (err) {
    console.error("something went wrong", err);
    res.json({ status: "failed", sent: requestData });
  }
});
// G
function readDB() {
  const data = fs.readFileSync("./db.json");
  return JSON.parse(data);
}

function writeDB(data) {
  const former = readDB();
  fs.writeFileSync("./db.json", JSON.stringify([...former, data], 2, null));
}
// A
app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
