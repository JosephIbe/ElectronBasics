const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');

require('electron-reload')(__dirname);

const Menu = electron.Menu;

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
            click: ()=> { electron.shell.openExternal('https://electronjs.org')}
        },
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'cut' },
                { role: 'pasteandmatchstyle' },
                { role: 'delete' },
                { role: 'selectall' }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu)

});
