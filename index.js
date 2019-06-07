// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list
'use strict';
/**
 * add user text to list item when clicking 'Add item' button Or hitting return 
 * store user text and add that text to the list when you click button or hit return 
 */

//when you click submit ... add text to list 
$('#js-shopping-list-form').submit(event => {
  event.preventDefault();
  //this is the users text
  const newEntry = $(event.currentTarget).find('#shopping-list-entry');
  const testEntry = newEntry.val();

  //adding user text to the list 
  $('ul').append( `    
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
  testEntry.val('');
});

// //when you hit return 
// $('#js-shopping-list-form').keypress(event => {
//   var key = event.which;
//   if(key === 13){
//     event.preventDefault();
//     //this is the users text
//     const newEntry = $(event.currentTarget).find('#shopping-list-entry');
//     const testEntry = newEntry.val();
  


//     //adding user text to the list 
//     $('ul').append( `    
//   <li>
//   <span class="shopping-item">${testEntry}</span>
//   <div class="shopping-item-controls">
//     <button class="shopping-item-toggle">
//       <span class="button-label">check</span>
//     </button>
//     <button class="shopping-item-delete">
//       <span class="button-label">delete</span>
//     </button>
//   </div>
// </li>' `
//     );


//     //deleting the users text from the box
//     testEntry.val('');
//   }
// });


/**
 * when the 'check' button is CLICKED it will add the class .shopping-item__checked to
 * the .shopping-item only for that item
 * if shopping item toggle is CLICKED and if shopping item checked is NOT there (on the shopping item),
 *  then (toggle) add class to check off item; if shopping item toggle is CLICKED and item is checked,
 * remove checked class from the item
 */

$('.shopping-item-toggle').click(event => {
  event.preventDefault();
  console.log(event.currentTarget);
  $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
}
);

/**
 * Remove item from list permanently when clicking button
 */
 
$('.shopping-item-delete').click(event => {
  event.preventDefault();
  console.log(event.currentTarget);
  $(event.currentTarget).closest('li').remove();
}
);

