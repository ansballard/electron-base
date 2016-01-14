import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
const app = express();

import http from "http";
import path from "path";

import routes from "./routes";

const ip = process.env.NODEJS_IP || "127.0.0.1";
const port = process.env.NODEJS_PORT || 3000;

app.set("port", port);
app.set("ip", ip);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(methodOverride());
app.use(express.static("dist/frontend"));

routes(app);

http.createServer(app).listen(app.get("port"), app.get("ip"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
