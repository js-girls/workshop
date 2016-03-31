## Step 3

After `div#posts` add 

```html
<hr />
<form class="form-horizontal" id="post-form">
  <div class="form-group">
    <label for="post-title" class="control-label">Post Title</label>
    <input type="text" class="form-control" id="post-title" placeholder="A new post" />
  </div>
  <div class="form-group">
    <label for="post-body" class="control-label">Post Content</label>
    <textarea type="text" class="form-control" id="post-body" placeholder="A new Body"></textarea>
  </div>
  <button type="submit" class="btn btn-default">Post</button>
</form>
```



