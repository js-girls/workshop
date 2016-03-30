## Step 7

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
