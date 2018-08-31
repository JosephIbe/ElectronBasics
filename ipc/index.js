const electron = require('electron');
const IPC = electron.ipcRenderer;

document.getElementById('dialogBtn').addEventListener('click', ()=>{
   IPC.send('open-error-dialog');
});

IPC.on('opened-gf-dialog', (e, arg) => {
    console.log('Main Resp:\t' + arg.toString());
})