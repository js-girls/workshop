## Step 0

### The initial code
Here is the code that we will start with:

```html
<!DOCTYPE html>
<html>

<head>
  <title></title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
</head>

<body>
  <div class="container">
    <div id="posts"></div>
  <div>
</body>
<script>
  function drawElement(post) {
    var postContainer = document.querySelector('#posts');
    postContainer.innerHTML +=
      '<div class="panel panel-default">' +
        '<div class="panel-heading">' +
          post.title +
        '</div>' +
        '<div class="panel-body">' +
          post.body +
        '</div>' +
      '</div>';
  }
  var postToAdd = { title: 'new post', body: 'This is a message..' };
  drawElement(postToAdd);
</script>
</html>
```

Let's go through the most relevant parts to understand what it does.

*0.1 — The Doctype*
```html
<!DOCTYPE html>
```
The **Doctype** informs the browser which version of HTML is used in the file.

> [What is the Doctype?](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)

*0.2 — The head*
```html
<head>
  <title></title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
</head>
```
The `<head>` tag can contain:
- information about the page, such as the title
- references to resources that need to be requested before creating the actual page content
- inline scripts and styles

We are including [Bootstrap](http://getbootstrap.com/)'s CSS file. Bootstrap is a UI framework that provides a set of predefined styles, components and scripts.

*0.3 — The body*
```html
<body>
  <div class="container">
    <div id="posts"></div>
  <div>
</body>
```
The body is the root of our application's visible content.

The element `<div id="posts">` is where we will put all the messages. It is empty because the messages will be created dynamically using Javascript!

The posts container is wrapped by `<div class="container">`. This div acts as a container for other elements that we will add in the future, and helps to better style and position its content. `container` is a class used by Bootstrap.

> [What is a `<div>`?](https://developer.mozilla.org/en/docs/Web/HTML/Element/div)

*0.4 — The script that creates a post*
```html
<script>
  function drawElement(post) {
    var postContainer = document.querySelector('#posts');
    postContainer.innerHTML +=
      '<div class="panel panel-default">' +
        '<div class="panel-heading">' +
          post.title +
        '</div>' +
        '<div class="panel-body">' +
          post.body +
        '</div>' +
      '</div>';
  }
  var postToAdd = { title: 'new post', body: 'This is a message..' };
  drawElement(postToAdd);
</script>
```
In order to create the first post, we split the code in two parts:
- A generic `drawElement` function that appends some HTML to the posts container, customised with the provided message details
- A call to the `drawElement` function with the actual message data

> [How do I use functions?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

*0.4.1 — The `drawElement` function*

What is the function actually doing?

```javascript
var postContainer = document.querySelector('#posts');
```
The first line of `drawElement` gets the reference to the posts container.

> [How does document.querySelector() work?](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
>
> [What syntax can I use with a query selector?](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors)

```javascript
postContainer.innerHTML +=
  '<div class="panel panel-default">' +
    '<div class="panel-heading">' +
      post.title +
    '</div>' +
    '<div class="panel-body">' +
      post.body +
    '</div>' +
  '</div>';
```
The second part does a couple of things:
- It concatenates a set of strings, some of which (title and body) are properties of the `post` input parameter
- It appends the concatenated string to the post container as HTML

> [What are `panel` and the other `panel-` classes?](http://getbootstrap.com/components/#panels)

*0.4.2 — The initialisation code*

In order to create the message, we call the `drawElement` function and pass the message data as parameter.

```javascript
var postToAdd = { title: 'new post', body: 'This is a message..' };
```
The message data is a Javascript object. It contains two properties, `title` and `body`.

> [What are Javascript objects?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

```javascript
drawElement(postToAdd);
```
The second line contains the call to the `drawElement` function!
