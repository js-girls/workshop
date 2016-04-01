## Step 8

## Refreshing the post list

The way we wrote the code in the previous step only refreshes the list when we post a new message.

Let's add a button that refreshes the whole list.

*8.1 – The refresh button's HTML*

Right after the `<body>` tag add:
```html
<button class="btn btn-default btn-large" type="button" id="refresh-button"
        style="position: fixed; top: 0; right: 0;">
  <span class="glyphicon glyphicon-refresh" />
</button>
```
The classes that we add to the button are defined by Bootstrap. These classes give the button a nicer look.

The inline style locks the button at the top-right corner of the screen when the user scrolls the page.

The `span` tag is another Bootstrap feature. It adds the refresh icon inside the button.

*8.2 – The refresh button's javascript*

Let's add a `console.log()` statement in the `refreshMessages` function, so that we can see that the function is actually called when the user clicks the button.

```javascript
console.log('refresh');
```

Let's move now to the end of the script, where now we add the click handler to the button.

First of all, we get the reference to the refresh button with the good old `document.querySelector`:
```javascript
var refreshButton = document.querySelector('#refresh-button');
```
Then we define the handler for the click event, in a similar way we did for the `form`'s **submit** event. Inside the handler function we simply call the `refreshMessages` function.
```javascript
refreshButton.onclick = function() {
  refreshMessages();
}
```
