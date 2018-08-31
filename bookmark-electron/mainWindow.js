const {BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

exports.window;

exports.createWindow = () => {
    this.window = new BrowserWindow({
        width: 500, height: 650, maxWidth: 350, minWidth: 650, minHeight: 310
    });

    this.window.webContents.openDevTools();

    this.window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    this.window.on('close', ()=>{
        this.window = null;
    });

};