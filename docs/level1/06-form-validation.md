## Step 6

### Validating new posts.
We learnt how to create new posts.
Now we may want to add some validation rules for them.
You do not want to get empty posts or very short ones.

We're going to declare that a post body or a post title are **valid** if they're longer than 4 characters, for example.

Also, we want to show some kind of warning when a user tries to create a post that does not pass our super cool validation rule.

We will show that something is wrong by changing the css class of the input that do not pass our validation.

Replace:

```javascript
form.onsubmit = function(e) {
  e.preventDefault();

  var title = document.querySelector('#post-title').value;
  var body = document.querySelector('#post-body').value;

  createPost(title, body);
};

function createPost(title, body) {
  var postObject = { title: title, body: body };

  fetch(FIREBASE_JSON, {
    method: "POST",
    body: serialize(postObject)
  });
}
```
with
```javascript
form.onsubmit = function(e) {
  e.preventDefault();
  var titleElement = document.querySelector('#post-title');
  var bodyElement = document.querySelector('#post-body');
  clearValidation(titleElement)
  clearValidation(bodyElement);
  if (isDataValid(titleElement.value) && isDataValid(bodyElement.value)) {
    createPost(titleElement, bodyElement);
  } else {
    if (!isDataValid(titleElement.value)) {
      showError(titleElement);
    }
    if (!isDataValid(bodyElement.value)) {
      showError(bodyElement);
    }
  }
};

function createPost(titleElement, bodyElement) {
  var postObject = { title: titleElement.value, body: bodyElement.value };

  fetch(FIREBASE_JSON, {
    method: "POST",
    body: serialize(postObject)
  });
}
```

### What have we done here?

Well first we're clearing any possible *warning sign* that might be shown by calling `clearValidation` on our input elements.

```javascript
function clearValidation(element) {
  element.parentNode.classList.remove('has-error');
}
```

Then we call the validation helper function `isDataValid` on both our input values to check if they are... well... **valid**!

(note: `MIN_LIMIT` is our simple variable holding the minimum length value allowed for our pieces of text)

```javascript
var MIN_LIMIT = 4;
function isDataValid(value) {
  return value.length > MIN_LIMIT;
}
```

`if` that's the case, we are allowed to call `createPost` function and add our new post.

```javascript
function createPost(titleElement, bodyElement) {
  var postObject = { title: titleElement.value, body: bodyElement.value };

  fetch(FIREBASE_JSON, {
    method: "POST",
    body: serialize(postObject)
  });
}
```

Otherwise we're going to show it to our users.

 We are going to have to call our new function `showError` on the elements that are not valid.

 This new function, as mentioned above, will simply add a new css class (namely `has-error`) so that our users get a correct feedback about what's wrong and why their post hasn't been added.

```javascript
function showError(element) {
  element.parentNode.classList.add('has-error');
}
```
