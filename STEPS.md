# How to build Awesome Tasks, step by step

This document describes how to build Awesome Tasks step by step.
Each step introduces new concepts, so make sure you understand what's going on before going further! If you have any doubts, please ask your coach for help!

## Step 1
### From basic HTML markup and styling to a dynamic list of tasks

We will start with a new HTML file called `index.html`. We will use it as the skeleton of our little app. Here is how it will look like:

*1.1 · `index.html` base markup*
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Awesome Tasks</title>
  </head>
  <body>
    <h2>Awesome Tasks</h2>
    <ul id="task-list">
      <li>Buy coffee</li>
      <li>Buy milk</li>
    </ul>
  </body>
</html>
```

If you open this file in a web browser, you will see a pretty boring HTML page that shows a title and a static list of things to do. Not that much!

The first thing we are going to do will be to take control of the task list: we will use JavaScript for adding a new task.

Before `</body>`, let’s add this:

*1.2 · The `<script>` tag*
```html
<script>
  var listElement = document.querySelector('#task-list');
  listElement.innerHTML = listElement.innerHTML + "<li>Disco dance</li>";
</script>
```

If we reload the page now, we will see a new task popping up in our list: it comes straight from JavaScript!

** What we just did:**

  * We used the `document.querySelector()` DOM API to access our `#task-list` element
  * We modified its `innerHTML` property by adding some more HTML: our new task item.

## Step 2
### All the tasks from JavaScript

Now we know how to use JavaScript to modify an element’s `innerHTML`.
Let’s introduce a new concept: the `Array`. We will need this concept for grouping all our tasks and to make things dynamic.

Let’s remove all our static tasks from the page:

*2.1 · Let’s empty the `<ul>`*
```html
<ul id="task-list"></ul>
```

And now let's use an `Array` for display all our tasks

*2.2 · All the tasks rendered from JavaScript*
```html
<script>
  var listItems = ['Buy coffee', 'Buy milk', 'Disco dance'];
  var listElement = document.querySelector('#task-list');
  listItems.forEach(function(task) {
    listElement.innerHTML += "<li>" + task + "</li>";
  });
</script>
```

Cool! We started with an empty `<ul>` element and then we populated it using an `Array` (containing strings) and its `forEach` method.

It may look useless at the moment (the output is the same, after all 😒) but what we just did is to make our little app display *dynamic data*. Dynamic, because we will soon be able to add and remove tasks by modifying our `listItems` array.

### Key concepts: input, business logic and output

Now comes an important concept: the distinction between **data** and **business logic**.

> Our app *does something* (business logic) that produces an *output* (an HTML page that displays a list of tasks), starting from an *input* (our array of tasks).

So what is business logic and what is data in our app?

*2.3 · data and business logic*
```html
<script>
  // This is our data.
  var listItems = ['Buy coffee', 'Buy milk', 'Disco dance'];

  // this is our business logic.
  var listElement = document.querySelector('#task-list');
  listItems.forEach(function(task) {
    listElement.innerHTML += "<li>" + task + "</li>";
  });
</script>
```

And the output? Well, the output is the HTML that displays our tasks. Simple!

*2.3 · output*
```html
<ul id="task-list">
  <li>Buy coffee</li>
  <li>Buy milk</li>
  <li>Disco dance</li>
</ul>
```

Actually, we could consider the entire page as the output, but for now let’s focus on the task list.

Our business logic is doing just one thing: rendering a list of items.
Let’s create a `function` for this: we will need it to render again our list of tasks after we modify our data.

```html
<script>
  var listItems = ['Buy coffee', 'Buy milk', 'Disco dance'];

  var updateList = function(items) {
    var listElement = document.querySelector('#task-list');

    items.forEach(function(item) {
      listElement.innerHTML += "<li>" + item + "</li>";
    });
  }

  updateList(listItems);
</script>
```

## Step 3
### Adding new items

Time to ask input to the user and add other items to our list!

Before our `<ul>` element, let’s add this HTML code:

*3.1 · The `#new-item` input*
```html
<input id="new-item" placeholder="Add a new task..." onchange="createNew()">
```

Every time the user inputs some text inside our input field and presses the return key, the function specified in the `onchange` attribute will be called for us.
So let’s add a `createNew` function after `updateList` for capturing what the user just typed!

*3.2 · The `createNew` function*
```js
var createNew = function() {
  var newItemElement = document.querySelector('#new-item');
  var newItemValue = newItemElement.value.trim();

  if (!newItemValue) return;

  listItems.push(newItemValue);
  newItemElement.value = '';

  updateList(listItems);
}
```

This function will do three things:

  * inserts what the user just wrote in the text field inside the `listItems` array using the `push()` method
  * cleans up the text field
  * calls the `updateList` function for displaying the newly created item.

One more thing! Our `updateList` function needs to be updated, because if we will call it a second time we need to remove the previously rendered code.
This is easily done by adding this line before the `forEach()` call:

```js
listElement.innerHTML = '';
```

Our final result will be:

```js
var updateList = function(items) {
  var listElement = document.querySelector('#task-list');
  listElement.innerHTML = '';

  items.forEach(function(item) {
    listElement.innerHTML += "<li>" + item + "</li>";
  });
}
```
