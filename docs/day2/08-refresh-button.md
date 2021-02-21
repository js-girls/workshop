## Step 8

## Refreshing the post list

Thanks to code we added in the previous step, we only refresh the list when a user posts a new message.

Let's add a button to manually refresh the whole list.

*8.1 – The refresh button's HTML*

Right after the `<body>` tag add:
```html
<button class="btn btn-default btn-large" type="button" id="refresh-button"
        style="position: fixed; top: 0; right: 0;">
  <span class="glyphicon glyphicon-refresh" />
</button>
```

In order to give the button a nicer look, we make use of some Bootstrap's utility classes.

The inline style anchors the button to the top-right corner of the screen, even when the page is scrolled.

The `glyphicon-refresh` class in the `span` tag is another Bootstrap feature. It adds the refresh icon inside the button.

*8.2 – The refresh button's javascript*

Let's add a `console.log()` statement in the `refreshMessages` function, so that we can see the function being called when the user clicks the button.

```javascript
console.log('refresh');
```

Let's move now to the end of the script, where we add the click handler to the button.

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
