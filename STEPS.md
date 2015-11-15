# How to build Awesome Tasks

This document describes how to build Awesome Tasks step by step.
We will be introducing new concepts on each step, so make sure you understand what's going on before going further!
If you have any doubts, please ask your coach for help!

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

Actually, we could consider the entire page as the output, but for now let’s focus on the task list.

Our logic is doing just one thing: rendering a list of items.
Let’s create a `function` for this: later we will be adding and removing items to our list (we will modify our data), so having a dedicated piece of code that takes care of updating our output will come in handy.

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
A function is just a piece of code that we can use multiple times. Functions are perfect for avoiding repetition in our code, and to give structure to a JavaScript application.

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

*4.1 — The current markup of each task item*
```html
  <li>Buy coffee</li>
```

Very simple markup: the only thing it contains is the text of the task.

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

The end result didn’t change yet, but now we built a dedicated place that will contain all the *logic* we need for transforming an *input* (the task item text) to an *output* (the task item HTML markup).

Now we have some work to do inside the `renderItem()` function: we have to change our output from what we have now (see *4.1*) to what we need (see *4.2*).
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

We added a `<script>` element (with type `text/html`) that we are using just for storing some HTML (our template string): this element is not displayed in our page (because `<script>` elements are never displayed) and the browser will not try to run the code inside it, because the type we specified is not executable.
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

Cool! Now the markup of each element is changed, and a little button is showing next to each of our task items.
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

The first thing to notice here is that the `removeItem()` function does not *automatically* know which is task we want to remove.
For JavaScript, what happened is: a button received a click. What happens from now on is completely in our hands.

The way we get to the clicked task text is by accessing the `event` object, that is generated by the browser each time a user is interacting with an element (eg. clicking on it). In the `event` object we can find a lot of useful informations: for example the element that received the click (called `target`: our button).

If we look at the markup, we can notice that our button is at the same level of our `span`, and comes right after it: they are siblings.
We want to reach the previous element sibling of the button and read its inner HTML. We do this by calling `previousElementSibling` on the `event.target`.

After, we use the `filter()` method on our `listItems` array to obtain a new copy of our list that does not contain the task we are removing.

The last step of our `removeItem()` function will be displaying this new list by calling `updateList()`.

**What we just did:**
  * we created a template for our task items
  * we added a button on each task item with an `onclick` attribute
  * we created a function that removes the clicked item by *filtering* our `listItems` array

## Break: Let’s add some style!

Time has finally come to make our little app look less ugly!

We will not be adding new features during this step, but our app will look way better after some little changes in the markup and after we link our stylesheet.
We will not go through the CSS rules – CSS is a whole new argument and it is beyond the scope of today’s workshop, but feel free to ask your coach for resources if you are interested.

Let’s create a `<link>` tag that points to our CSS file: place this code after the `<title>` tag, inside `<head>`.

```html
<link href="styles/app.css" rel="stylesheet">
```

If we reload the page we notice that our page has now a background image and the text changed a bit.

Now let's turn our template item into this:

```html
<li class="_CLASS_">
  <span class="item-text" onclick="toggleStatus(event)">_TEXT_</span>
  <button class="close" onclick="removeItem(event)">×</button>
</li>
```

And between the app title `<h2>` and the `<script>` tag let's replace everything with this:

```html
<div class="panel panel-default">
  <div class="panel-heading">
    <input id="new-item" class="form-control" placeholder="Add a new task..." onchange="createNew(event)" autofocus="autofocus">
  </div>
  <ul id="task-list" class="list-group"></ul>
</div>
```

Notice that we preserved the previous elements, and we added some more elements and classes.
In this way we gave a better structure to our markup: we created a box that contains our task list, and a dedicated box that contains our input field.

## Step 5
### Marking items as done



## Step 6
### Adding filters

## Step 7
### Saving and loading our tasks with `localStorage`

## It’s not a bug, it’s a feature!

Writing code without bugs is very hard (if not impossible), and our little app contains (at least) two of them.

* When we start writing something in the input field and then we click outside it, the item gets added even if we didn’t press the enter key!
* We can add multiple items with the exact same text (not exactly a bug), but when we interact with one of those, our action is ran against all the duplicates!
