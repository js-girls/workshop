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

### What does this code do?

We are adding a __form__ to let the user write and post a new message.  

A form is a powerful tool that allows users to interact with the website interface through its components (such as text areas, option fields and so on).
Once a form is submitted, its content is sent to a server where it can processed.

Usually an __HTML form__ contains other control element like _input_  or _textarea_ that can used to insert any kind of text.


> [What is a `<form>`?](https://developer.mozilla.org/it/docs/Web/HTML/Element/form)

**What we just did:**

* We used a __form__ to let our users write and post new messages.
* Form implements some css classes from [Boostrap](http://getbootstrap.com/) to appear more pleasant!
