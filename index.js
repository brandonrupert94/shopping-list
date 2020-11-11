function addItem() {
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        let itemAdded = $('#shopping-list-entry').val();
        $('.shopping-list').append(listItem(itemAdded));

    });

}
function listItem(item){
    return `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;

}

function checkItem() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
         $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
 });

};

function deleteItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    })

}




$(addItem);
$(checkItem);
$(deleteItem);