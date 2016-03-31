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
  fetch(FIREBASE_JSON, {
    method: "POST",
    body: serialize(postObject)
  });
}
```
