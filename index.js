require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routerNav = require("./src");
const morgan = require("morgan");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static("assets/"));

const server = app.listen(
  process.env.APP_PORT,
  process.env.DB_PORT,
  function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Listening on Host : ", host, " Port : ", port);
  }
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

app.use(morgan("dev"));

app.use("/", routerNav);
