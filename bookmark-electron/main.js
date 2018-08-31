const {app, ipcMain} = require('electron');
const mainWindow = require('./mainWindow');
const readItem = require('./readItem');

require('electron-reload')(__dirname);

ipcMain.on('new-item', (event, newItemURL) => {
   console.log('Main Process rcvd:\t' + newItemURL);

   readItem(newItemURL, (itemValue)=>{
       // console.log(itemValue);
       event.sender.send('new-item-success', itemValue);
   })

   // setTimeout(()=>{
   //     event.sender.send('new-item-success', 'here\'s an item for u');
   // }, 1600)

});

app.on('ready', mainWindow.createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (mainWindow == null){
        mainWindow.createWindow();
    }
});