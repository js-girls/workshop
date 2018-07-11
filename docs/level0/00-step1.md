## Step 1

### Exercises
* Write a greeting message inside a `div` element. [Solution](http://codepen.io/daldosso/pen/QyVmzV)
* Write something in a `li` element. [Solution](http://codepen.io/daldosso/pen/jWedqO)

---
### From basic HTML markup and styling to a dynamic list of tasks

We will start with a new HTML file called `index.html`. We will use it as the skeleton of our little app. This is what it will look like:

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
