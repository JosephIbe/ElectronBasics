const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');

require('electron-reload')(__dirname);

let window;

createWindow = ()=>{
    window = new BrowserWindow({width:550, height: 150, frame: false, show: false,
        minWidth: 400, minHeight: 150, maxWidth: 550, maxHeight: 350});
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    window.once('ready-to-show', ()=>{ window.show() });

    // window.webContents.openDevTools();

    window.on('closed', ()=>{
        window = null;
    })
};

app.on('ready', createWindow);