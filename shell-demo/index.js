const shell = require('electron').shell;

document.getElementById('openBtn').addEventListener('click', () => {
    //open folder containing file
    // shell.showItemInFolder('D://ElectronDev/ElectronBasics/shell-demo/demo.txt');

    //open file itself
    shell.openItem('C://Users/JosephJoey/Documents/angel.txt');

    //open external link ex webpage
    shell.openExternal('https://goal.com/en-india');

});