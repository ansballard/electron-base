import "angular";
import "angular-route";

import ModuleConfig from "./config/module.config";

import { sum } from "../utilities";

console.log("sum: " + sum(1, 2));

import "./services/api/api.module";

import "./routes/wrapper/wrapper.module";
import "./routes/home/home.module";

angular.module("electron-base", [
  "ngRoute",

  "app.api",
  "app.wrapper",
  "app.home"

]).config(ModuleConfig);
