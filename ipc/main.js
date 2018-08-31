const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');

require('electron-reload')(__dirname);

const ipc = electron.ipcMain;
const errDialog = electron.dialog;

let window;

createWindow = () => {

    window = new BrowserWindow({
        width: 550,
        height: 450,
    });

    window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    window.on('closed', () => {
        window = null;
    })
};

ipc.on('open-error-dialog', (e)=>{
    errDialog.showErrorBox('404', 'Error GF Not Found');
    e.sender.send('opened-gf-dialog', 'GF Found :) in Main Process');
});

app.on('ready', createWindow);
