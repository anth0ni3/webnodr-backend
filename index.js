const express = require("express");
const app = express();
const cors = require("cors");
const sendEmail = require("./mailer");

app.use(cors());
app.use(express.static("images"));
// Add Access Control Allow Origin headers
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.get("/send/:data", async (req, res) => {
  console.log(req.params.data);
  try {
    await sendEmail(req.params.data);
    return res.json({
      status: "success",
      code: res.status,
    });
  } catch (e) {
    return res.json({
      status: "fail",
      code: res.status,
      error: e,
    });
  }
});

app.listen(2708, console.log("server started"));
