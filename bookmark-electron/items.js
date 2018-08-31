exports.addItem = (item) => {
    $('#no-items').hide(); // hide the no items msg

    // show items in panel
    let itemHTML = `<a class= panel-block read-item>
                <figure class="image has-shadow is-64x64 thumb">
                    <img src="{item.screenshot}" alt="">
                </figure> 
                <h2 class="column is-4 title">{item.title}</h2>
            </a>`

    $('#read-list').append(itemHTML);
};