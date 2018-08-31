const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');

require('electron-reload')(__dirname);

const Menu = electron.Menu;
const MenuItem = electron.MenuItem;
const globalShortcut = electron.globalShortcut;

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
    const template = [
        {
            label: 'One',
            submenu: [
                {
                    label: 'index a',
                    click: function () {
                        console.log('Index a clicked')
                    }
                },
                {
                    type: 'separator'
                },
                {
                    label: 'index b'
                }
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'About Electron',
                    click: () => {
                        electron.shell.openExternal('https://electronjs.org')
                    },
                    accelerator: 'CmdorCtrl + Shift + H'
                }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                {role: 'undo'},
                {role: 'redo'},
                {type: 'separator'},
                {role: 'copy'},
                {role: 'paste'},
                {role: 'cut'},
                {role: 'pasteandmatchstyle'},
                {role: 'delete'},
                {role: 'selectall'}
            ]
        }
    ];

    globalShortcut.register('alt+2', ()=>{
        window.show();
    });

    app.on('will-quit', ()=>{
        globalShortcut.unregisterAll();
    });

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    const ctxMenu = new Menu();
    ctxMenu.append(new MenuItem({
        label: 'Hello CtxMenu'
        //todo- add click for item(s) with fn and log to console. Can add roles, types, other labels too
    }));

    window.webContents.on('context-menu', (e, params) => {
        ctxMenu.popup(window, params.x, params.y);
    });

});
