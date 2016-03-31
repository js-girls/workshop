## Step 7

Add the `clearContent` function

```javascript
function clearContent() {
  var postContainer = document.querySelector('#posts');
  postContainer.innerHTML = '';
}
```

then replace

```javascript
fetch('https://brilliant-inferno-184.firebaseio.com/posts.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(posts) {
    toArray(posts).forEach(function(postToAdd) {
      drawElement(postToAdd);
    });
  });
```

with 

```javascript
function refreshMessages() {
  clearContent();
  fetch('https://brilliant-inferno-184.firebaseio.com/posts.json')
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
