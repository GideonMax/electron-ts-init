// this is the main entry point of the program
// remember, you can use es6 style import statements (and also requires)
// to learn how to use electron go to https://www.electronjs.org/
// example program shown here

import { app, BrowserWindow } from 'electron'
app.on('ready', (event) => {

    let win : BrowserWindow= new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences:
        {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadFile("./html/default.html");
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
})

