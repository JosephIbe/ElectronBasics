const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');

let win1, win2;

function createWindow() {
    win1 = new BrowserWindow();
    win2 = new BrowserWindow();

    win1.loadURL(url.format({
        pathname: path.join(__dirname, 'index_one.html'),
        protocol: 'file',
        slashes: true
    }));

    win2.loadURL(url.format({
        pathname: path.join(__dirname, 'index_two.html'),
        protocol: 'file',
        slashes: true
    }));

    win1.webContents.openDevTools();
    win2.webContents.openDevTools();

    win1.on('closed', ()=>{
        window = null;
    })

    win2.on('closed', ()=>{
        window = null;
    })

}

app.on('ready', createWindow);