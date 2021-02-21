## Step 6
### Exercises
* Save your friends list in the localStorage. [Solution](http://codepen.io/daldosso/pen/KVjrQr?editors=0011)
* Load your friends list from the localStorage (if exists). [Solution](http://codepen.io/daldosso/pen/gPNqwO?editors=0011)

---
### Saving and loading our tasks with `localStorage`

Our app has now four basic features:
* Shows us a list of tasks
* Allows us to create new tasks
* Allows us to remove tasks
* Allows us to mark task as done

But as you may have noticed, it is not capable of saving information after we leave the page (or reload it). In a real life scenario, this task is often accomplished with a server. All the actions that we do on our page can be sent to a server that will save the data to a storage after some validation. But we don’t have a server, so we need to persist our tasks on our browser.

This is possible with the `localStorage` API.

`localStorage` is an object that we can use like a common JavaScript object, with two substantial differences:
* it can only store strings
* it can persist data for each domain between page reloads

What we want to persist is our `listItems` array. Since `localStorage` is only capable of storing strings, we need to transform our `listItems` array into a string before saving it. It is as though we are "freezing" our data.

This can be easily done by turning our array into a JSON string, by using `JSON.stringify()`:

```javascript
var listItemsAsString = JSON.stringify(listItems); // freeze!
```

and then we can save our string in `localStorage` by simply doing:

```javascript
localStorage.listItems = listItemsAsString;
```

This will save a string representation of our data on `localStorage`, and this representation will be available to us between page reloads.

When we will need our `listItems` array back, we simply have to call:

```javascript
var listItems = JSON.parse(localStorage.listItems); // thaw!
```

and we will be able to use our list items again. Now let’s put this at work!

We have to modify our `updateList()` function in the following way:

*6.1 – the modified `updateList()` function*
```javascript
var updateList = function(items) {
  var listElement = document.querySelector('#task-list');
  listElement.innerHTML = '';

  items.forEach(function(item) {
    listElement.innerHTML += renderItem(item);
  });

  localStorage.listItems = JSON.stringify(items); // New line added
}
```

Now, each time we call `updateList()`, we will save our items into `localStorage`.

However this is not enough. When we open the page, we also need to load this data. Our initial data now is an array that contains three tasks.
Let’s change this by creating a new function that will try to load data from `localStorage`:

*6.2 – the new `loadList()` function*
```javascript
var loadList = function() {
  if (localStorage.listItems) return JSON.parse(localStorage.listItems);

  return [
    { text: 'Buy coffee',  completed: true  },
    { text: 'Buy milk',    completed: false },
    { text: 'Disco dance', completed: false }
  ];
}
```

Now that we have this new function, we can load initial data to our `listItems` array by calling it:

```javascript
var listItems = loadList();
```

Now all our actions will be persisted between page reloads!

**What we just did:**
  * we modified our `updateList()` function by making it save our data to `localStorage`
  * we created a new `loadList()` function that loads data from `localStorage`
