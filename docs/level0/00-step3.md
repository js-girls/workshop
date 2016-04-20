## Step 3

### Exercises
* Try to use an "if", as you wish.  [Solution](http://codepen.io/daldosso/pen/ZQNOYN?editors=0011)
* Try to use an "if", reading a user input.  [Solution](http://codepen.io/daldosso/pen/gPJMPo?editors=1011)
 
---
### Adding new items

Time to ask input to the user and add other items to our list!

Before our `<ul>` element, let’s add this HTML code:

*3.1 — The new item input*
```html
<form onsubmit="createNew(event)">
  <input id="new-item" placeholder="Add a new task...">
  <button>Add</button>
</form>
```

We just added a form with an input field and a button to our page. We want to create a new task with the text that the user writes in the input field, and we want this to happen when he submits the form by clicking on the “Add” button or pressing the Enter key; so let’s add a `createNew()` function (after `updateList()`) for capturing what the user just typed!

*3.2 — The `createNew` function*
```javascript
var createNew = function(event) {
  event.preventDefault();

  var newItemElement = document.querySelector('#new-item');
  var newItemValue = newItemElement.value.trim();

  if (!newItemValue) return;

  listItems.push(newItemValue);
  newItemElement.value = '';

  updateList(listItems);
}
```

This function does three things:
  * inserts what the user just wrote in the text field inside the `listItems` array using the `push()` method
  * cleans up the text field
  * calls the `updateList()` function for displaying the newly created item.

A thing to notice here is `event.preventDefault()`. The browser will try to reload the page when the user submits a form, but we don’t want this to happen: so we call this function to avoid the page reload.

Now our `updateList()` function needs to be updated, because if we will call it a second time we need to remove the previously rendered code.

This is easily done by adding this line before the `forEach()` call:

*3.3 — Cleaning the previous output*
```javascript
listElement.innerHTML = '';
```

Our final result will be:

*3.3 — Updated `updateList()` function*
```javascript
var updateList = function(items) {
  var listElement = document.querySelector('#task-list');
  listElement.innerHTML = '';

  items.forEach(function(item) {
    listElement.innerHTML += '<li>' + item + '</li>';
  });
}
```

Great! Now we are able to add as many task as we want!

**What we just did:**
  * We added a `input` field and a `button` for creating new tasks
  * We created a `createNew()` function that adds a new task and updates our list.
