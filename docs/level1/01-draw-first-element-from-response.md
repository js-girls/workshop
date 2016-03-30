## Step 1

```javascript
fetch('https://brilliant-inferno-184.firebaseio.com/posts.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(posts) {
    var postToAdd = toArray(posts)[0];
    drawElement(postToAdd);
  });
```
