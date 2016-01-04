import angular from "angular";
import "angular-route";

import ModuleConfig from "./config/module.config";

import "./services/api/api.module";

import "./routes/wrapper/wrapper.module";
import "./routes/home/home.module";

angular.module("electron-base", [
  "ngRoute",

  "electron-base.api",
  "electron-base.wrapper",
  "electron-base.home"

]).config(ModuleConfig);
