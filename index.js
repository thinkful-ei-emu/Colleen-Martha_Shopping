
'use strict';

//when you click submit ... add text to list 
$('#js-shopping-list-form').submit(event => {
  event.preventDefault();
  //this is the users text
  const newEntry = $(event.currentTarget).find('#shopping-list-entry');
  const testEntry = newEntry.val();
  //adding user text to the list 
  $('.shopping-list').append( `    
<li>
<span class="shopping-item">${testEntry}</span>
<div class="shopping-item-controls">
  <button class="shopping-item-toggle">
    <span class="button-label">check</span>
  </button>
  <button class="shopping-item-delete">
    <span class="button-label">delete</span>
  </button>
</div>
</li>' `
  );
  //deleting the users text from the box
  newEntry.val('');
});

$('.shopping-list').on('click', '.shopping-item-toggle', event => {
  event.preventDefault();
  $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
}
);

/**
 * Remove item from list permanently when clicking button
 */
 
$('.shopping-list').on('click', '.shopping-item-delete', event => {
  event.preventDefault();
  $(event.currentTarget).closest('li').remove();
}
);

