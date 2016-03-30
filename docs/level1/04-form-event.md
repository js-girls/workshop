## Step 4

```javascript
var form = document.querySelector('#post-form');

form.onsubmit = function(e) {
  e.preventDefault();
  var title = document.querySelector('#post-title').value;
  var body = document.querySelector('#post-body').value;
  console.log(title, body);
};
```
