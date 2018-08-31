const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');

require('electron-reload')(__dirname);

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

app.on('ready', () => {
    createWindow();
});