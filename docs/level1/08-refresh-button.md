## Step 8

Right after the `<body>` add
```html
<button class="btn btn-default btn-large" type="button" id="refresh-button"
        style="position: fixed; top: 0; right: 0;">
  <span class="glyphicon glyphicon-refresh" />
</button>
```

add a `console.log()` in the `refreshMessages` function
```javascript
console.log('refresh');
```
and 

```javascript
var refreshButton = document.querySelector('#refresh-button');

refreshButton.onclick = function() {
  refreshMessages();
}
```
