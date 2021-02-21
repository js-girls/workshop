## Step 2

Replace the content of the last `then` callback to print out all the items we have.
We do this with the the help of the `forEach` function

```javascript
toArray(posts).forEach(function(postToAdd) {
  drawElement(postToAdd);
});
```

### What this code do?

Now we use the _array_ returned by the `toArray(posts)` invocation to draw all the items of the list.

> [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

forEach is a _method_ that can be called on an _array_ and that executes the provided __function__ once for each element of the array.

Parameters of the provided __function__ are:

* The current element __value__ that is processed in the array.
* The current element __index__ of the array.
* The array that forEach() is being applied to.

### How to use forEach

For example, We want to log the content of this array with `forEach`:

```javascript
var arr = ['a', 'b', 'c', 'd'];
```

We can write:

```javascript
arr.forEach(function(value, index) {
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

