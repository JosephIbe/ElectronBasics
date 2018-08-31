const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');

let window, dimensWin, colorWin,
    framelessWin, parentWin, childWin;

function createWindow() {
    // window = new BrowserWindow();
    // dimensWin = new BrowserWindow({width: 400, height: 400}); // can also set max{width, height
    // colorWin = new BrowserWindow({backgroundColor: '#FF0'});
    // framelessWin = new BrowserWindow({frame: false, backgroundColor: '#c2c2c2'});

    // window.webContents.openDevTools();

    parentWin = new BrowserWindow({title: "Parent"});
    childWin = new BrowserWindow({parent: parentWin, title: "Child", modal: true, show: false});
    childWin.loadURL('https://goal.com/en-india');
    childWin.on('ready-to-show', ()=>{
        childWin.show();
    })

    // window.on('closed', ()=>{
    //     window = null;
    // })

}

app.on('ready', createWindow);