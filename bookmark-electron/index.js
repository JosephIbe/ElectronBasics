const {ipcRenderer} = require('electron');
const items = require('./items');

$('.open-add-modal').click (()=> {
  $('#add-modal').addClass('is-active');
});

$('.close-add-modal').click (()=> {
    $('#add-modal').removeClass('is-active');
});

$('#add-btn').click( ()=> {
   let newItemURL = $('#item-input').val();
   if (newItemURL){

       //disable ui
       $('#item-input').prop('disabled', true);
       $('#add-btn').addClass('is-loading')
       $('.close-add-modal').addClass('is-disabled');

       // send url to main process via IPC
       ipcRenderer.send('new-item', newItemURL);
   }
});

// use enter key to return value
$('#item-input').keyup( (event)=>{
   if (event.key === 'Enter'){
       $('#add-btn').click();
   }
});

ipcRenderer.on('new-item-success', (event, itemData)=>{
    console.log(itemData);

    items.addItem(itemData);

    $('#add-btn').removeClass('is-loading');
    $('.close-add-modal').removeClass('is-disabled');
    $('#item-input').prop('disabled', false).val('');
    $('#add-modal').removeClass('is-active');
});