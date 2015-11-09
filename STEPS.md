# How to build Awesome Tasks

This document describes how to build Awesome Tasks step by step.
We will be introducing new concepts on each step, so make sure you understand what's going on before going further! If you have any doubts, please ask your coach for help!

## Step 1
### From basic HTML markup and styling to a dynamic list of tasks

We will start with a new HTML file called `index.html`. We will use it as the skeleton of our little app. Here is how it will look like:

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

If you open this file in a web browser, you will see a pretty boring HTML page that shows a title and a static list of things to do. Not that much, to be honest!

The first thing we are going to do will be taking control of the task list: we will use JavaScript for adding a new task.

Before `</body>`, let’s add this:

*1.2 — The `<script>` tag*
```html
<script>
  var listElement = document.querySelector('#task-list');
  listElement.innerHTML = listElement.innerHTML + '<li>Disco dance</li>';
</script>
```

If we reload the page now, we will see a new task popping up in our list: it comes straight from JavaScript!

**What we just did:**
  * We used the `document.querySelector()` DOM API to access our `#task-list` element
  * We modified its `innerHTML` property by adding some more HTML: our new task item

## Step 2
### All the tasks from JavaScript

Now we know how to use JavaScript to modify an element’s `innerHTML`.
Let’s introduce a new concept: the `Array`. We will need this concept for grouping all our tasks and to make things dynamic.

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

### Key concepts: input, business logic and output

Now comes an important concept: the distinction between **data** and **business logic**.

> Our app *does something* (business logic) that produces an *output* (an HTML page that displays a list of tasks), starting from an *input* (our array of tasks).

So what is business logic and what is data in our app?

*2.3 — data and business logic*
```html
<script>
  // This is our data.
  var listItems = ['Buy coffee', 'Buy milk', 'Disco dance'];

  // this is our business logic.
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

Actually, we could consider the entire page as the output, but for now let’s focus on the task list.

Our business logic is doing just one thing: rendering a list of items.
Let’s create a `function` for this: we will need it to render again our list of tasks after we modify our data.

*2.4 — the `updateList()` function*
```html
<script>
  var listItems = ['Buy coffee', 'Buy milk', 'Disco dance'];

  var updateList = function(items) {
    var listElement = document.querySelector('#task-list');

    items.forEach(function(item) {
      listElement.innerHTML += '<li>' + item + '</li>';
    });
  }

  updateList(listItems);
</script>
```

A function is just a piece of code that we can use multiple times. Functions are perfect for avoiding repetition in our code.

Note that first we are **defining** a function (`var updateList = function(...)`), and after we are **calling** it (`updateList(...)`).
This is an important concept to understand: when we define a function, nothing visible happens. We are simply creating a “magic word”
that we can use later in our code. To use it, we simply have to append `()` to the end of the “magic word”, including parameters inside parenthesis where needed.

**What we just did:**
  * We put all our tasks into an `Array`, and we used the `forEach()` method for displaying them
  * We created our first function: `updateList()`

## Step 3
### Adding new items

Time to ask input to the user and add other items to our list!

Before our `<ul>` element, let’s add this HTML code:

*3.1 — The `#new-item` input*
```html
<input id="new-item" placeholder="Add a new task..." onchange="createNew()">
```

Every time the user inputs some text inside our newly created input field and presses the Return key, the function specified in the `onchange` attribute will be called for us.
So let’s add a `createNew()` function after `updateList()` for capturing what the user just typed!

*3.2 — The `createNew` function*
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

This function does three things:
  * inserts what the user just wrote in the text field inside the `listItems` array using the `push()` method
  * cleans up the text field
  * calls the `updateList()` function for displaying the newly created item.

One more thing! Our `updateList()` function needs to be updated, because if we will call it a second time we need to remove the previously rendered code.

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
  * We added a `input` field for accepting new tasks
  * We created a `createNew()` function that adds a new task and updates our list.

## Step 4
### Removing items

The next step will be adding a button to our task item for taking it off of our list.

Let's look at the code of our items:

*4.1 — The current markup of each item task item*
```html
  <li>Buy coffee</li>
```

Very simple markup: the only thing this markup contains is the text of the task.

Now we need something like this:

*4.2 — The markup we need for adding the remove feature*
```html
<li>
  <span>Buy coffee</span>
  <button>×</button>
</li>
```

Here our `<li>` element contains two children elements: a `<span>` with some text, and a `<button>` that we will use to remove the task.

Let’s take a look at how we are currently rendering the task item inside the `updateList()` function:

*4.3 — The code we’re currently using to render the task item element*
```js
listElement.innerHTML += '<li>' + item + '</li>';
```

We are doing something very simple to obtain a new task item element: we are concatenating three strings: `<li>`, the item text and `</li>`.
As we saw above, now we need something slightly more complex: it's time to move this rendering logic into a new function:

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

The end result didn’t change yet, but now we built a dedicated place that will contain all the *business logic* we need for transforming an *input* (the task item text) to an *output* (the task item markup).

Now we have some work to do inside the `renderItem()` function: we have to change our output from what we have now (see *4.1*) to what we need (see *4.2*).
To do this, we will leverage a widely used concept in HTML programming: the templates.

### Key concepts: templates and placeholders
> A template is a generic piece of HTML code that contains placeholder strings. Replacing placeholder strings with real values is called "compiling a template".

Let’s create our first template. Before the `</head>` tag, let’s add this markup:

*4.6 — The task item template element*
```html
<script id="item-template" type="text/html">
  <li>
    <span>_TEXT_</span>
    <button>×</button>
  </li>
</script>
```

We added a `<script>` element (with type `text/html`) that we are using just for storing some HTML (our template string): this element is not displayed in our page (because `<script>` elements are never displayed) and the browser will not try to run the code inside it, because the type we specified is not executable.
Just think of this element as a "container of text".

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

Cool! Now the markup of each element is changed, and a little button is showing next to each of our task items.
But if we click on that button, nothing happens. Let’s fix this!

## Step 5
### Marking items as done

## Step 6
### Adding filters

## Step 7
### Saving and loading our tasks with `localStorage`
