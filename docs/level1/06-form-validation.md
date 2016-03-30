## Step 6

```javascript
form.onsubmit = function(e) {
  e.preventDefault();
  var titleElement = document.querySelector('#post-title');
  var bodyElement = document.querySelector('#post-body');
  clearValidation(titleElement)
  clearValidation(bodyElement);
  // i know this is dumb, it's clear though
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
