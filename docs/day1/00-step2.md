## Step 2

### Exercises
* Create an array of your friend's emails. [Solution](http://codepen.io/daldosso/pen/OMBdRq)
* Print the emails list. (use the console). [Solution](http://codepen.io/daldosso/pen/wMYNoL?editors=1111)
* Print the emails list. (use a div). [Solution](http://codepen.io/daldosso/pen/VeEgPd?editors=1111)
* Print the emails list using forEach. [Solution](http://codepen.io/daldosso/pen/EPdrWX?editors=1111)

---

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
