## Step 2

Replace the last `then` callback content to print out all the items in the database using `forEach`

```javascript
toArray(posts).forEach(function(postToAdd) {
  drawElement(postToAdd);
});
```

### What this code do?

Now We are using the _array_ created with `toArray(posts)` function to draw all the items of the list instead of only one.

> [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

forEach is a _method_ that can be called on an _array_ and that executes the provided __function__ once for each element of the array.

Paramenters of the provided __function__ are:

* The current element __value__ that is processed in the array.
* The current element __index__ of the array.
* The array that forEach() is being applied to.

### How to use forEach

For example, We want to log the content of this array with `forEach`:

```js
var arr = ['a', 'b', 'c', 'd'];
```

We can write:

```js
arr.forEach(function(index, value) {
	console.log(index, value);
});

//Will log:
//  0 "a"
//  1 "b"
//  2 "c"
```

**What we just did:**

 * We used `toArray(posts)` function to transform the `posts` variable from an object into an array.
 * We used `forEach` to print each items of the posts list instead of only one.

