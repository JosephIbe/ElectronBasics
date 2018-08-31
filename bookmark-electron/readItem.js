const {BrowserWindow} = require('electron');

let bgItemWin;

module.exports = (url, callback)=> {
    bgItemWin = new BrowserWindow({
        width: 1000, height: 1000, show: false,
        webPreferences: {
            offscreen: true
        }
    });

    // load item url
    bgItemWin.loadURL(url);
    // wait for page to finish loading
    bgItemWin.webContents.on('did-finish-load', ()=>{
        //get thumbnail of screenshot
        bgItemWin.webContents.capturePage((image => {
            // get image as string
            let screenshot = image.toDataURL();
            // get page/url title
            let title = bgItemWin.getTitle();

            // return items via callback
            callback({title, screenshot, url});

            //clean up
            bgItemWin.close();
            bgItemWin = null;

        }))
    })

};