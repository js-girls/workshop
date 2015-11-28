# Awesome Tasks

A simple JavaScript app that will help you getting things done.

## Key concepts

During the workshop we will be covering the following concepts:

### JavaScript
  * Base values: `String`, `Number`, `Boolean`, undefined values
  * Variables and functions
  * Compound values: `Array` and `Object`
  * Language Structure: `if`
  * Array methods (`forEach`, `filter`, `push`)
  * String methods (`trim`, `replace`)

### The DOM
  * `Element` and some of its properties and methods (`querySelector`, `innerHTML`, `previousElementSibling`, `dataset`)
  * The events and the event object main properties (`target`, `preventDefault`)

### Persistence on the browser
  * `JSON` and `localStorage`

There are many new things to learn if this is your first programming experience, and we really hope you will enjoy it!

# Building Awesome Tasks step by step

This walkthrough will guide you through the development of the app.

We will be introducing new concepts on each step so make sure you understand what's going on before going further!
If you have any doubts, please ask your coach for help.

## Step 1
### From basic HTML markup and styling to a dynamic list of tasks

We will start with a new HTML file called, `index.html`. We will use it as the skeleton of our little app. This is what it will look like:

*1.1 —`index.html` base markup*
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

If you open this file in a web browser, you will see a pretty boring HTML page that shows a title and a static list of things to do. Not that much to be honest!

The first thing we are going to do is to take control of the task list; we will use JavaScript for adding a new task.

Before `</body>`, let’s add this:

*1.2 — The `<script>` tag*
```html
<script>
  var listElement = document.querySelector('#task-list');
  listElement.innerHTML = listElement.innerHTML + '<li>Disco dance</li>';
</script>
```

If we reload the page now, we will see a new task pop up in our list and it comes straight from JavaScript!

**What we just did:**
  * We used the `document.querySelector()` DOM API to access our `#task-list` element
  * We modified its `innerHTML` property by adding some more HTML: our new task item

## Step 2
### All the tasks from JavaScript

Now we know how to use JavaScript to modify an element’s `innerHTML`.
Let’s introduce a new concept: the `Array`. We will need it for grouping all our tasks and to make things dynamic.

Let’s remove all our static tasks from the page:

*2.1 — Let’s empty the `<ul>`*
```html
<ul id="task-list"></ul>
```

Now let's put all our tasks into an `Array`, and use `forEach()` to update our `listElement`'s `innerHTML`:

*2.2 — All the tasks rendered from JavaScript*
```html
<script>
  var listItems = ['Buy coffee', 'Buy milk', 'Disco dance'];
  var listElement = document.querySelector('#task-list');

  listItems.forEach(function(task) {
    listElement.innerHTML += '<li>' + task + '</li>';
  });
</script>
```

Cool! We started with an empty `<ul>` element and then we populated it using an `Array` (containing strings) and its `forEach()` method.

It may look useless at the moment (the output is the same, after all 😒) but what we just did is to make our little app display *dynamic data*.
Dynamic, because we will soon be able to add and remove tasks by modifying our `listItems` array.

### Key concepts: input, logic and output

Now comes an important concept:

> Our app does something (*logic*) that turns an *input* (an array of tasks) into an *output* (an HTML page that displays a list of tasks).

So what is input and what is logic in our app?

*2.3 — input and logic*
```html
<script>
  // This is our input.
  var listItems = ['Buy coffee', 'Buy milk', 'Disco dance'];

  // this is our logic.
  var listElement = document.querySelector('#task-list');
  listItems.forEach(function(task) {
    listElement.innerHTML += '<li>' + task + '</li>';
  });
</script>
```

And the output? Well, the output is the HTML that displays our tasks. Simple!

*2.3 — output*
```html
<ul id="task-list">
  <li>Buy coffee</li>
  <li>Buy milk</li>
  <li>Disco dance</li>
</ul>
```

We could actually consider the entire page as the output, but for now let’s focus on the task list.

Our logic is doing just one thing: rendering a list of items.
Let’s create a `function` for this; later we will be adding and removing items to our list (we will modify our data), so having a dedicated piece of code that takes care of updating our output will come in handy.

*2.4 — the `updateList()` function*
```html
<script>
  var listItems = ['Buy coffee', 'Buy milk', 'Disco dance'];

  // Defining our `updateList()` function...
  var updateList = function(items) {
    var listElement = document.querySelector('#task-list');

    items.forEach(function(item) {
      listElement.innerHTML += '<li>' + item + '</li>';
    });
  }

  // Calling our `updateList()` function passing an array of tasks
  updateList(listItems);
</script>
```

### Function? Uh?
A function is just a piece of code that we can use multiple times. Functions are perfect for avoiding repetition in our code and to give structure to a JavaScript application.

Note that first we are **defining** a function (`var updateList = function(…)`), and after we are **calling** it (`updateList(…)`).
This is an important concept to understand: when we *define* a function, nothing visible happens. We are simply creating a “magic word”
that we can use later in our code. To use it, we simply have to append `()` to the end of the “magic word”, including parameters between parenthesis where needed.

When we *call* a function, we can obtain two things:
* we can create a **new value** (using the `return` keyword)
* we can produce a **side effect** (for example, we can display something new on our page)

**What we just did:**
  * We put all our tasks into an `Array`, and we used the `forEach()` method for displaying them
  * We created our first function: `updateList()`

## Step 3
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
```js
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
```js
listElement.innerHTML = '';
```

Our final result will be:

*3.3 — Updated `updateList()` function*
```js
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

## Step 4
### Removing items

The next step will be adding a button to our task item for taking it off of our list.

Let's look at the code of our items:

*4.1 — The current markup of each task item*
```html
  <li>Buy coffee</li>
```

Very simple markup; the only thing it contains is the text of the task.

Now we need something like this:

*4.2 — The markup we need for adding the remove feature*
```html
<li>
  <span>Buy coffee</span>
  <button onclick="removeItem(event)">×</button>
</li>
```

Here our `<li>` element contains two children elements: a `<span>` with some text, and a `<button>` that we will use to remove the task.

Let’s take a look at how we are currently rendering the task item inside the `updateList()` function:

*4.3 — The code we’re currently using to render the task item element*
```js
listElement.innerHTML += '<li>' + item + '</li>';
```

We are doing something very simple to obtain a new task item element; we are connecting three strings: `<li>`, the item text and `</li>`.
As we saw above, now we need something slightly more complex; it's time to move this rendering logic into a new function:

*4.4 — A simple `renderItem()` function*
```js
var renderItem = function(itemText) {
  return '<li>' + itemText + '</li>';
}
```

*4.5 — Let’s change the code inside `updateList()` to use the new `renderItem()` function*
```js
listElement.innerHTML += renderItem(item);
```

The end result hasn't change yet, but we have built a dedicated place that will contain all the *logic* we need for transforming an *input* (the task item text) to an *output* (the task item HTML markup).

Now we have some work to do inside the `renderItem()` function. We have to change our output from what we have now (see *4.1*) to what we need (see *4.2*).
To do this, we will leverage a widely used concept in HTML programming: the templates.

### Key concepts: templates and placeholders
> A template is a generic piece of HTML code that contains placeholder strings. Replacing placeholder strings with real values is called “compiling a template”.

Let’s create our first template. Before the `</head>` tag, let’s add this markup:

*4.6 — The task item template element*
```html
<script id="item-template" type="text/html">
  <li>
    <span>_TEXT_</span>
    <button onclick="removeItem(event)">×</button>
  </li>
</script>
```

We added a `<script>` element (with type `text/html`) that we are using just for storing some HTML (our template string). This element is not displayed in our page (because `<script>` elements are never displayed) and the browser will not try to run the code inside it because the type we specified is not executable.
Just think of this element as a “container of text”.

The template HTML contains a placeholder string (`_TEXT_`) that we will replace with real value shortly.

Now let’s go back to our `renderItem()` function. What we are going to do now is replacing the `_TEXT_` placeholder with our task item text.
To do this, we will use the `replace()` method available on strings.

*4.7 — `renderItem()` with template*
```js
var renderItem = function(itemText) {
  var template = document.querySelector('#item-template').innerHTML;
  return template.replace('_TEXT_', itemText);
}
```

Cool! Now the markup of each element is changed and a little button is shown next to each of our task items.
But if we click on that button, nothing happens. Let’s fix this!

We need to create a `removeItem()` function (as we wrote in the `onclick` attribute of our button), that will:
  * remove a task from our list
  * update the task list

To do this, we will use the array's `filter()` method to update our `listItems`.
Let’s look at the function code:

*4.8 — `the removeItem()` function*
```js
var removeItem = function(event) {
  var clickedItemText = event.target.previousElementSibling.innerHTML;

  listItems = listItems.filter(function(itemText) {
    return clickedItemText != itemText;
  });

  updateList(listItems);
}
```

The first thing to notice here is that the `removeItem()` function does not *automatically* know which task we want to remove.
For JavaScript, what happened is that a button received a click. What happens from now on is completely in our hands.

The way we get to the clicked task text is by accessing the `event` object, which is generated by the browser each time a user is interacting with an element (eg. clicking on it). In the `event` object we can find a lot of useful information. For example, the element that received the click (called `target`: our button).

If we look at the markup, we notice that our button is at the same level of our `span`, and comes right after it; they are siblings.
We want to reach the previous element sibling of the button and read its inner HTML. We do this by calling `previousElementSibling` on the `event.target`.

After, we use the `filter()` method on our `listItems` array to obtain a new copy of our list that does not contain the task we are removing.

The last step of our `removeItem()` function will be displaying this new list by calling `updateList()`.

**What we just did:**
  * we created a template for our task items
  * we added a button on each task item with an `onclick` attribute
  * we created a function that removes the clicked item by *filtering* our `listItems` array

## Break: Let’s add some style!

Time has finally come to make our little app look less ugly!

We will not be adding new features during this step but our app will look much better after some small changes in the markup and after we link our stylesheet.
We will not go through the CSS rules – CSS is a whole new argument and it is beyond the scope of today’s workshop, but feel free to ask your coach for resources if you are interested.

Let’s create a `<link>` tag that points to our CSS file: place this code after the `<title>` tag, inside `<head>`.

```html
<link href="styles/app.css" rel="stylesheet">
```

If we reload the page we notice that our page has now a background image and the text changed a bit.

Now let's turn our template item into this:

```html
<li class="list-group-item">
  <span>_TEXT_</span>
  <button onclick="removeItem(event)" class="close">×</button>
</li>
```

And between the app title `<h2>` and the `<script>` tag let's replace everything with this:

```html
<div class="panel panel-default">
  <form onsubmit="createNew(event)" class="panel-heading">
    <input id="new-item" class="form-control" placeholder="Add a new task..." autofocus="autofocus">
    <button class="btn btn-primary">Add</button>
  </form>
  <ul id="task-list" class="list-group"></ul>
</div>
```

Notice that we preserved all the previous elements and we added some more elements and classes.
This way we gave a better structure to our markup. We created a box that contains our tasks list, plus a dedicated box that contains our input field.

## Step 5
### Marking items as done

The next feature of our app will be marking items as done. To do this we need to rethink how we are representing our task items.

What we now call “a task” is a simple string in our code (a base value), and we cannot store other informations there.
We need to find a new way for representing our task, something that allows us to store other information together with the text of the task (e.g. whether the task is completed or not completed). What we need here is a compound value so we can group more than one value in a single entity. In JavaScript there are two compound values: `Array` (which we already know), and `Object`. Let’s use an `Object`.

Our task list will now become something like this:

*5.1 – the new `listItem` with objects instead of strings*
```js
var listItems = [
  { text: 'Buy coffee',  completed: true  },
  { text: 'Buy milk',    completed: false },
  { text: 'Disco dance', completed: false }
];
```

Each task is now an `Object` with two properties: `text` (containing a `String` value) and `completed` (containing a `Boolean` value).
These properties are accessible via the dot notation:

```js
var item = { text: 'Example task', completed: true };
console.log(item.text); // will print 'Example task'
console.log(item.completed); // will print true
```

This is an important change in our app. We are changing the input data and this forces us to modify our logic accordingly – otherwise our app will no longer work.

Let’s modify our functions to be compatible with this new input format.

*5.2 – the new `renderItem()` function*
```js
var renderItem = function(item) {
  var template = document.querySelector('#item-template').innerHTML;
  return template.replace('_TEXT_', item.text);
}
```

*5.3 – the new `createNew()` function*
```js
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
```js
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
```js
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

## Step 6
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

```js
var listItemsAsString = JSON.stringify(listItems); // freeze!
```

and then we can save our string in `localStorage` by simply doing:

```js
localStorage.listItems = listItemsAsString;
```

This will save a string representation of our data on `localStorage`, and this representation will be available to us between page reloads.

When we will need our `listItems` array back, we simply have to call:

```js
var listItems = JSON.parse(localStorage.listItems); // thaw!
```

and we will be able to use our list items again. Now let’s put this at work!

We have to modify our `updateList()` function in the following way:

*6.1 – the modified `updateList()` function*
```js
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
```js
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

```js
var listItems = loadList();
```

Now all our actions will be persisted between page reloads!

**What we just did:**
  * we modified our `updateList()` function by making it save our data to `localStorage`
  * we created a new `loadList()` function that loads data from `localStorage`

## Step 7
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
```js
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
```js
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

```js
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
```js
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

## Step 8
### Updating counters

The last thing we’re going to do is adding some counters next to our filters: we want to show how many task we have in total, how many of them are completed and how many are not.

To do this, we need a new function that needs to be called each time we call `updateList()`.

Let’s create it:

*8.1 – the new `updateCounters()` function*
```js
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
```js
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

## From Awesome Task to the next big thing!

Done! You can view and use this app online [here](https://js-girls.github.io/awesome-tasks). You can also fork the [Github repository](https://github.com/js-girls/awesome-tasks), create your personal version of the app and publish it online using [Github Pages](https://pages.github.com/): all you have to do is create a `gh-pages` branch on your repository and add an `index.html` that contains your code. Your coach will help you with this.

We hope this little walkthrough helped you understanding some basic web programming concepts.
There is a lot of things to learn, but fear not! There is also an impressive number of great resources that will help you learn fast. Programming is a great way to express yourself: it gives you the power to create things by simply writing.

Want to learn more? [Start here](http://jsforcats.com/)!
