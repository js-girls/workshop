## Step 1

Add the utility library

```html
<script type="text/javascript" src="utils/utils.js"></script>
```

Remove the static object `postToAdd` with an actual [ajax](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) call.
> note that we will print only the first item

```javascript
fetch(FIREBASE_JSON)
  .then(function(response) {
    return response.json();
  })
  .then(function(posts) {
    var postToAdd = toArray(posts)[0];
    drawElement(postToAdd);
  });
```

### What does this code do?

This code fragment looks pretty dense; we can phrase it as follows:

_Retrieve the information at the address, prepare them for reading, take the first information piece and draw it_

Now let's analyze it bit by bit (pun intended :) )

*1.1 — the`fetch()` function*

```javascript
fetch(FIREBASE_JSON)
```

`fetch()` is a function that accepts some parameters, the first one is always an address, in this particular case `FIREBASE_JSON`.

`FIREBASE_JSON` is a string inside the file `utils/utils.js`, it's the specific address of our json on the database

*1.2 — The first `.then()`*
```javascript
  .then(function(response) {
    return response.json();
  })
```
> This is a _dirty implementation detail_.

This step is executed as soon as `fetch()` completes, hence it's named  `then()`.

We can manipulate the `response` with a __function__. A function always need a __return__ statement, here we instrument the function to pass the response to the next step in some handy (json) format.

*1.2 — The second `.then()`*
```javascript
  .then(function(posts) {
    var postToAdd = toArray(posts)[0];
    drawElement(postToAdd);
  });
```
The first line inside the function is a variable assignment, here we transform the __posts__ from an _object_ to an _array_, for convenience, and we take the __first__ element (please note that the first element has index `0`)

In the second line we can find the same function that we used in the previous step.

**What we just did:**
  * We used `fetch()` to retrieve the json at this address: `FIREBASE_JSON`
  * We manipulated the `response` of `fetch()`, using `then()`, in something that we can use
  * We isolated the first post and displayed it in the page using `drawElement()`
