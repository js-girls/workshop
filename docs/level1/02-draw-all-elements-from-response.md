## Step 2

Replace the last `then` callback content to print out all the items in the database using `forEach`

```javascript
toArray(posts).forEach(function(postToAdd) {
  drawElement(postToAdd);
});
```
