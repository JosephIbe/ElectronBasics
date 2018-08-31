const fs = require('fs');
const path = require('path');

const nameFile = document.getElementById('fileName');
const contentsFile = document.getElementById('fileBody');
const createFile = document.getElementById('createBtn');
const readFileBtn = document.getElementById('readBtn');
const deleteFileBtn = document.getElementById('delBtn');

let pathName = path.join(__dirname, '/Files');
let file_name = nameFile.value;
let file_contents = contentsFile.value;

createFile.addEventListener('click', () => {

    if (file_name === null || file_name === '') {
        // toastr.warning('File Name Required');
    } else if (file_contents === null || file_contents === '') {
        // toastr.warning('File Contents Should Not be Empty');
    } else {
    }
    writeFile(file_contents);
});

writeFile = (file_contents) => {
    let file = path.join(pathName, nameFile.value);
    fs.writeFile(file, file_contents, (err) => {
        if (err) {
            console.log(`Error Creating File`)
        }
        console.log('Created New File');
    });
};

readFileBtn.addEventListener('click', () => {
    let file = path.join(pathName, nameFile.value);

    fs.readFile(file, (e, data)=>{
        if (e){ console.log('Error Opening File:\t' + nameFile.value) }

        contentsFile.value = data;
        console.log('Opened file:\t' + nameFile.value );

    })

});

deleteFileBtn.addEventListener('click', () => {
    let file = path.join(pathName, nameFile.value);

    fs.unlink(file, (e)=>{
        if (e){
            console.log(e);
        }
        nameFile.value = null;
        contentsFile.value = null;
        console.log('File deleted');
    });

});