## Step 5

```javascript
function createPost(title, body) {
  var postObject = { title: title, body: body };
  fetch("https://brilliant-inferno-184.firebaseio.com/posts.json", {
    method: "POST",
    body: serialize(postObject)
  });
}
```
