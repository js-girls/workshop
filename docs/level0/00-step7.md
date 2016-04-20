## Step 7

### Exercises
* Add a button to show the removed friends. [Solution](http://codepen.io/daldosso/pen/yedQjw?editors=0011)
* Insert an input to ask at the user a new email to add. [Solution](http://codepen.io/daldosso/pen/gPNyqy?editors=0011)

---
### Adding filters and bulk actions

Now we want to add some filters to show all, only active or only completed tasks.

The first thing we need to do is adding some markup for our filter buttons. Let’s add the following HTML under `<ul id="task-list" class="list-group"></ul>`:

*7.1 – the filters markup*
```html
<div class="panel-footer text-center small">
  <span>Show:</span>
  <button onclick="filterItems()" class="filter filter-all">All</button>
  <button onclick="filterItems('active')" class="filter filter-active">Active</button>
  <button onclick="filterItems('completed')" class="filter filter-completed">Completed</button>
</div>
```

We added a button with an `onclick` handler that will execute a `filterItems()` function. Let’s create that function:

*7.2 – the new `filterItems()` function*
```javascript
var filterItems = function(status) {
  var itemsToShow = [];

  if (status == 'completed') {
    itemsToShow = listItems.filter(function(item) {
      return item.completed;
    });
  } else if (status == 'active') {
    itemsToShow = listItems.filter(function(item) {
      return !item.completed;
    });
  } else {
    itemsToShow = listItems;
  }

  updateList(itemsToShow);
}
```

This function will call `updateList()` by passing a list of `itemsToShow` that we create using the array `filter()` function.

But there’s a catch, `updateList()` will also save our tasks each time we call it!
We want this to happen when we *modify* our task list (for example adding, deleting, and marking items as done), but we don’t want this if we are simply applying a filter.

What can we do to avoid this? The solution is to modify our `updateList()` function for accepting a second parameter, that we will call `save`.

*7.3 – the updated `updateList()` function*
```javascript
var updateList = function(items, save) {
  var listElement = document.querySelector('#task-list');

  listElement.innerHTML = '';

  items.forEach(function(item) {
    listElement.innerHTML += renderItem(item);
  });

  if (save) localStorage.listItems = JSON.stringify(items);
}
```

When we will call the `updateList()` function by passing `true` as second parameter, the last line will be executed, otherwise our tasks will not be saved.

```javascript
updateList(listItems, true) // this will save our tasks.
updateList(listItems) // this will not.
```

Now we can use `updateList()` with the second parameter set to `true` when we want to save (in our `createNew()`, `removeItem()` and `toggleStatus()`), and without the second parameter when we want to filter. This will make our filters work as we want.

Go ahead and modify the `createNew()`, `removeItem()` and `toggleStatus()` functions by passing `true` as second parameter to the `updateList()` function call!

### Adding a “Clear completed” button

We also want to add a button that cleans up all completed tasks. Let’s add the markup to our panel footer:

```html
<hr>
<button onclick="clearCompleted()" class="btn btn-default btn-xs">Clear completed</button>
```

The `onclick` handler will call a `clearCompleted()` function. Let’s create it:

*7.4 – the new `clearCompleted()` function*
```javascript
var clearCompleted = function() {
  listItems = listItems.filter(function(item) {
    return !item.completed;
  });

  updateList(listItems, true);
}
```

Once again we will use the `filter()` function available on arrays for obtaining a copy of our `listItems` containing only elements that are not completed. After, we will call `updateList()` as usual, saving our tasks to `localStorage`.

**What we just did:**
  * we added filter support by implementing a `filterItems()` function
  * we modified our `updateList()` function by making it accept a new `save` parameter
  * we added a “Clear completed” button that clears completed tasks
