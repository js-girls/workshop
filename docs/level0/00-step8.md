## Step 8

### Exercises
* Show the number of active and removed friends. [Solution](http://codepen.io/daldosso/pen/QyXJeo?editors=1001)
* Starting from the new email exercise, check that the new email is not empty, use an alert (I know it's very old school). [Solution](http://codepen.io/daldosso/pen/yedrWV?editors=0011)

---
### Updating counters

The last thing we’re going to do is adding some counters next to our filters: we want to show how many task we have in total, how many of them are completed and how many are not.

To do this, we need a new function that needs to be called each time we call `updateList()`.

Let’s create it:

*8.1 – the new `updateCounters()` function*
```javascript
var updateCounters = function() {
  var completedCount = 0;

  listItems.forEach(function(item) {
    if (item.completed) completedCount++;
  });

  document.querySelector('.filter-all').dataset.count = listItems.length;
  document.querySelector('.filter-active').dataset.count = listItems.length - completedCount;
  document.querySelector('.filter-completed').dataset.count = completedCount;
}
```

The first thing we do in this function is to create a `completedCount` variable that is initially set to `0`.

Then we loop through our `listItems` array using `forEach()`: we increment the `completedCount` counter each time we find a task that is completed. We do this by using the `++` operator: it will simply add `1` to the current value of `completedCount`.

Finally we will use the `dataset` property of our DOM element to store informations. When we use `dataset`, a new `data-count` attribute will automatically be created for us on the element. The data we save in this attribute will then be shown via a CSS pseudo element.

Last touch: we need to update our `updateList()` function by adding the `updateCounters()` function call at the end.

*8.1 – the updated `updateList()` function*
```javascript
var updateList = function(items, save) {
  var listElement = document.querySelector('#task-list');
  listElement.innerHTML = '';

  items.forEach(function(item) {
    listElement.innerHTML += renderItem(item);
  });

  if (save) localStorage.listItems = JSON.stringify(items);

  updateCounters(); // new line added
}
```

Now, our counters will be updated each time we do something on our task list!

**What we just did:**
  * we created a `updateCounters()` function that will show counters next to each filter
  * we modified our `updateList()` function by making it call `updateCounters()`

## It’s not a bug, it’s a feature!

Writing code without bugs is very hard (if not impossible), and our little app contains (at least) one of them.

* We can add multiple items with the exact same text (not exactly a bug), but when we interact with one of those, our action is ran against all the duplicates!

How can we avoid this?
