// R
import fs from 'fs';
import cors from 'cors';
import express from 'express';
const PORT = 3000;
const app = express();
// U
app.use(express.json());
app.use(cors());
// E
app.get('/users', (req, res) => {
  const response = readDB()
  res.json(response);
})
// G
function readDB() {
  const data = fs.readFileSync('./db.json');
  return JSON.parse(data);
}

function writeDB(data) {
  fs.writeFileSync('./db.json', JSON.stringify(data, 2, null));
}
// A
app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
})