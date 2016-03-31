## Step 6

Replace
```javascript
form.onsubmit = function(e) {
  e.preventDefault();

  var title = document.querySelector('#post-title').value;
  var body = document.querySelector('#post-body').value;

  createPost(title, body);
};

function createPost(title, body) {
  var postObject = { title: title, body: body };

  fetch("https://brilliant-inferno-184.firebaseio.com/posts.json", {
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
```
and modify the `createPost` function accordingly

```javascript
function createPost(titleElement, bodyElement) {
  var postObject = { title: titleElement.value, body: bodyElement.value };
  fetch("https://brilliant-inferno-184.firebaseio.com/posts.json", {
    method: "POST",
    body: serialize(postObject)
  });
}
var MIN_LIMIT = 4;
function isDataValid(value) {
  return value.length > MIN_LIMIT;
}
function clearValidation(element) {
  element.parentNode.classList.remove('has-error');
}
function showError(element) {
  element.parentNode.classList.add('has-error');
}

```
