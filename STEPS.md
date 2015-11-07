# How to build Awesome Tasks, step by step

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
  var listElement = document.getElementById('task-list');
  listElement.innerHTML = listElement.innerHTML + '<li>Disco dance</li>';
</script>
```

If we reload the page now, we will see a new task popping up in our list: it comes straight from JavaScript!

**What we just did:**
  * We used the `document.getElementById()` DOM API to access the element whouse id is `task-list`
  * We modified its `innerHTML` property by adding some more HTML: our new task item.

## Step 2
### All the tasks from JavaScript

Now we know how to use JavaScript to modify an element’s `innerHTML`.
Let’s introduce a new concept: the `Array`. We will need this concept for grouping all our tasks and to make things dynamic.

Let’s remove all our static tasks from the page:

*2.1 — Let’s empty the `<ul>`*
```html
<ul id="task-list"></ul>
```

And now let's use an `Array` for store all our tasks

*2.2 — All the tasks in an array*
```html
<script>
  var listItems = ['Buy coffee', 'Buy milk', 'Disco dance'];
  var listElement = document.getElementById('task-list');
</script>
```

Good, but can you spot the error? Now our tasks are in an array but we need to render them on the page.

In order to do so, we can do something like this:

*2.3 — Rendering the tasks in the array*
```html
<script>
  var listItems = ['Buy coffee', 'Buy milk', 'Disco dance'];
  var listElement = document.getElementById('task-list');
  listElement.innerHTML += '<li>' + listItems[0] + '</li>';
  listElement.innerHTML += '<li>' + listItems[1] + '</li>';
  listElement.innerHTML += '<li>' + listItems[2] + '</li>';
</script>
```

Ok, this works. And we've learned something new — we can access the elements in an array by referring to the array and giving the "index" between square brackets (note that the first item in an array is at position 0).

But, you may have noticed, there's a problem with this code:

1. There's a lot of repetition (and developers live and die by the DRY principle)
2. The repetition can become a burden for maintenance if the list becomes very long

How can we make this code better? Enter the loops!

A loop is a control structure that allows a program to iterate over a piece of code.

In JavaScript, the `for` loop is one such facility and it's most idiomatic usage is exactly to iterate over the items in an array. Let's see how we'd use it to make our code more maintainable, readable and expressive.

*2.4 — The for loop*
```html
<script>
  var listItems = ['Buy coffee', 'Buy milk', 'Disco dance'];
  var listElement = document.getElementById('task-list');
  for (var i = 0; i < listItems.length; i++) {
    listElement.innerHTML += '<li>' + listItems[0] + '</li>';
  }
</script>
```

The syntax of the `for` loop, require us to provide three expressions to define its behavior, divided by semi-colons; the first is the initialization, where we define some code that we want to execute only once, before the loop body is; the second is the looping condition: as long as it is true, we'll keep on looping over and over again; the third one runs after each execution of the loop body.

Let's look at what happened: we initialized a variable named `i` (for index) as 0; then we told the `for` loop that we want to loop as long as our `i` is smaller than the length of `listItems`; finally we asked the for loop to increment `i` after each execution of the loop. This way, we can iterate a number of times equal to the length of the array.

Eventually we can use `i` inside the body of the `for` loop to access each item by its index, without re-writing the same code over and over again.

Cool! We started with an empty `<ul>` element and then we populated it using an `Array` (containing strings) and a for loop.

It may look useless at the moment (the output is the same, after all 😒) but what we just did is to make our little app display *dynamic data*.
Dynamic, because we will soon be able to add and remove tasks by modifying our `listItems` array.

### Key concepts: input, business logic and output

Now comes an important concept: the distinction between **data** and **business logic**.

> Our app *does something* (business logic) that produces an *output* (an HTML page that displays a list of tasks), starting from an *input* (our array of tasks).

So what is business logic and what is data in our app?

*2.5 — data and business logic*
```html
<script>
  // This is our data.
  var listItems = ['Buy coffee', 'Buy milk', 'Disco dance'];

  // this is our business logic.
  var listElement = document.getElementById('task-list');
  for (var i = 0; i < listItems.length; i++) {
    listElement.innerHTML += '<li>' + listItems[0] + '</li>';
  }
</script>
```

And the output? Well, the output is the HTML that displays our tasks. Simple!

*2.6 — output*
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

*2.7 — the `updateList()` function*
```html
<script>
  var listItems = ['Buy coffee', 'Buy milk', 'Disco dance'];

  var updateList = function(items) {
    var listElement = document.getElementById('task-list');

    for (var i = 0; i < listItems.length; i++) {
      listElement.innerHTML += '<li>' + listItems[0] + '</li>';
    }
  }

  updateList(listItems);
</script>
```

We've seen loops and functions, and both serve the purpose of making our code more readable and maintainable, allowing us to not repeat ourselves over and over again.

But, is there a way to use functions as loops? Sure! Functions are very good because they have a name and can be tested independently, thus it's great to use them even to iterate over collections of items.

JavaScript's got you covered: the `Array` has a method `forEach` that takes a function and applies that function to each item of the array.

The function that iterates over the array has a parameter that contains the element of the array, so that we can use it inside the function. Let's see how our code looks like now.

*2.8 — functions everywhere!*
```html
<script>
  var listItems = ['Buy coffee', 'Buy milk', 'Disco dance'];

  var updateList = function(items) {
    var listElement = document.getElementById('task-list');

    items.forEach(function(item) {
      listElement.innerHTML += '<li>' + item + '</li>';
    });
  }
</script>
```

## Step 3
### Adding new items

Time to ask input to the user and add other items to our list!

Before our `<ul>` element, let’s add this HTML code:

*3.1 — The `#new-item` input*
```html
<input id="new-item" placeholder="Add a new task..." onchange="createNew()">
```

Every time the user inputs some text inside our input field and presses the Return key, the function specified in the `onchange` attribute will be called for us.
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
    listElement.innerHTML += "<li>" + item + "</li>";
  });
}
```

Great! Now we are able to add as many task as we want!

## Step 4
### Removing items
