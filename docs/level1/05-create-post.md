## Step 5

Replace 

```javascript
console.log(title, body);
```
with
```javascript
createPost(title, body);
```
and add the `createPost` function
```javascript
function createPost(title, body) {
  var postObject = { title: title, body: body };
  fetch("https://brilliant-inferno-184.firebaseio.com/posts.json", {
    method: "POST",
    body: serialize(postObject)
  });
}
```
