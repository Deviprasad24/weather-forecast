const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "feedback",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const feedback = req.body.feedback;

  db.query(
    "insert into fbtable (name,email,feedback) values (?,?,?)",
    [name, email, feedback],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
  console.log('syuccess ')
});

app.listen(5174, () => {
  console.log("Running on port 5174");
});
