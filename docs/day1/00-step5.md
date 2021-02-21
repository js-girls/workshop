## Step 5

### Exercises
* Write a onclick event for the remove buttons. [Solution](http://codepen.io/daldosso/pen/dGBqXZ?editors=0010)
* In the onclick event use the console to write the clicked email. [Solution](http://codepen.io/daldosso/pen/RrzYKJ?editors=0011)
* Write a function that create your email list of friends. [Solution](http://codepen.io/daldosso/pen/BjgqdK?editors=0010)
* Change your array of emails in an array of objects with a removed attribute. [Solution](http://codepen.io/daldosso/pen/xZoQwv?editors=0011)
* Write a function that remove an email. [Solution](http://codepen.io/daldosso/pen/YwoRWW?editors=0011)

---
### Marking items as done

The next feature of our app will be marking items as done. To do this we need to rethink how we are representing our task items.

What we now call “a task” is a simple string in our code (a base value), and we cannot store other informations there.
We need to find a new way for representing our task, something that allows us to store other information together with the text of the task (e.g. whether the task is completed or not completed). What we need here is a compound value so we can group more than one value in a single entity. In JavaScript there are two compound values: `Array` (which we already know), and `Object`. Let’s use an `Object`.

Our task list will now become something like this:

*5.1 – the new `listItem` with objects instead of strings*
```javascript
var listItems = [
  { text: 'Buy coffee',  completed: true  },
  { text: 'Buy milk',    completed: false },
  { text: 'Disco dance', completed: false }
];
```

Each task is now an `Object` with two properties: `text` (containing a `String` value) and `completed` (containing a `Boolean` value).
These properties are accessible via the dot notation:

```javascript
var item = { text: 'Example task', completed: true };
console.log(item.text); // will print 'Example task'
console.log(item.completed); // will print true
```

This is an important change in our app. We are changing the input data and this forces us to modify our logic accordingly – otherwise our app will no longer work.

Let’s modify our functions to be compatible with this new input format.

*5.2 – the new `renderItem()` function*
```javascript
var renderItem = function(item) {
  var template = document.querySelector('#item-template').innerHTML;
  return template.replace('_TEXT_', item.text);
}
```

*5.3 – the new `createNew()` function*
```javascript
var createNew = function(event) {
  event.preventDefault();

  var newItemElement = document.querySelector('#new-item');
  var newItemValue = newItemElement.value.trim();

  if (!newItemValue) return;

  listItems.push({ text: newItemValue, completed: false });
  newItemElement.value = '';

  updateList(listItems);
}
```

*5.4 – the new `removeItem()` function*
```javascript
var removeItem = function(event) {
  var clickedItemText = event.target.previousElementSibling.innerHTML;

  listItems = listItems.filter(function(item) {
    return clickedItemText != item.text;
  });

  updateList(listItems);
}
```

With this important change, we are given the ability to store other information in our task!

Now we can implement the mark as done feature. The following is what we want to happen: when the user clicks on a incomplete task, we want to turn it into a completed task, and when he clicks on a completed task, we want it to return to the incomplete state.

A task can have two states: completed and not completed. This is a perfect fit for the `Boolean` value, and that’s the reason why we decided to use it.
Another advantage of using a `Boolean` value is that it can be “inverted” easily, without checking its value first.

Let’s add an `onclick` attribute to our task `<span>` element inside our template:

```html
<span onclick="toggleStatus(event)">_TEXT_</span>
```

...and create the corresponding function:

*5.5 – the new `toggleStatus()` function*
```javascript
var toggleStatus = function(event) {
  var clickedItemText = event.target.innerHTML;

  listItems.forEach(function(item) {
    if (clickedItemText == item.text) {
      item.completed = !item.completed;
    }
  });

  updateList(listItems);
}
```

This function will cycle through each item contained in `listItems`, and when it finds an element with matching text, it will invert its `completed` property.

**What we just did:**
  * we changed our input data from a list of string to a list of objects
  * we added a `toggleStatus()` function that inverts the `completed` property of the clicked task
