import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
const app = express();

import http from "http";
import path from "path";
import routes from "./routes";

import { sum } from "../utilities";

console.log("sum: " + sum(1, 2));

const ip = process.env.NODEJS_IP || "0.0.0.0";
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
app.use("/dist/frontend", express.static(path.join(__dirname, "..", "..", "dist", "frontend")));
console.log("Path: ", path.join(__dirname, "..", "..", "dist", "frontend"));

routes(app);

http.createServer(app).listen(app.get("port"), app.get("ip"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
