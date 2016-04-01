## Step 9

> [How does `setInterval` work?](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)

Since we want our timeline to be refreshed automatically, we'll use a native javascript function: `setInterval` that will handle this task.
We pass the name of the function we want to be called (in our case `refreshMessages`) and the delay between each call expressed in milliseconds.

```javascript
setInterval(refreshMessages, 5000);
```
