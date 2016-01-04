import electron from "electron";
import {ipcMain as ipc, app, BrowserWindow} from "electron";

let mainWindow = null;

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("ready", () => {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadURL("file://" + __dirname + "../../../views/index.html");

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
