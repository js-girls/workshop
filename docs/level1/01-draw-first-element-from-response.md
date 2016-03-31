## Step 1

Add the utility library

```html
<script type="text/javascript" src="utils/utils.js"></script>
```

Remove the static object `postToAdd` with the actual ajax call.
> note that we will print only the first item

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
