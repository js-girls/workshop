## Step 7

## Refreshing the post list

Our app is currently loading all the messages only on the page's first load or when the user submits a new post.

Let's make the app refresh the post list.

*7.1 – A little refactoring*

> _Refactoring_ is the process of restructuring existing code without changing its external behavior.

The refactoring that we are going to perform consists in moving some code inside a function, in order to make it reusable in different parts of our app.

We need to reuse the code that retrieves and draws the messages in the page:
```javascript
fetch(FIREBASE_JSON)
  .then(function(response) {
    return response.json();
  })
  .then(function(posts) {
    toArray(posts).forEach(function(postToAdd) {
      drawElement(postToAdd);
    });
  });
```
In order to make it reusable, we wrap it inside a function called `refreshMessages`:
```javascript
function refreshMessages() {
  fetch(FIREBASE_JSON)
    .then(function(response) {
      return response.json();
    })
    .then(function(posts) {
      toArray(posts).forEach(function(postToAdd) {
        drawElement(postToAdd);
      });
    });
}
```
*7.2 – Clearing the post list of the old content*

__What happens if we call this function multiple times?__

It is going to append the messages to the page, so we are going to have duplicates!

We need to clear the previous content before adding the new messages.

Let's add the `clearContent` function:
```javascript
function clearContent() {
  var postContainer = document.querySelector('#posts');
  postContainer.innerHTML = '';
}
```
It will simply erase whatever is contained in the post container.

Let's call `clearContent` at the beginning of `refreshMessages`. Don't forget to call `refreshMessages()` when the page loads!

Here is the result:
```javascript
function refreshMessages() {
  clearContent();
  fetch(FIREBASE_JSON)
    .then(function(response) {
      return response.json();
    })
    .then(function(posts) {
      toArray(posts).forEach(function(postToAdd) {
        drawElement(postToAdd);
      });
    });
}
refreshMessages();
```
