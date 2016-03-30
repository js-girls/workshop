## Step 0

```javascript
function drawElement(post) {
    var postContainer = document.querySelector('#posts')
    postContainer.innerHTML +=
      '<div class="panel panel-default">' +
        '<div class="panel-heading">' +
          post.title +
        '</div>' +
        '<div class="panel-body">' +
          post.body +
        '</div>' +
      '</div>';
  }
  var postToAdd = { title: 'new post', body: 'This is a message..' };
  drawElement(postToAdd);
```
