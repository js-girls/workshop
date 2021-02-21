## Step 5

### Create a new post.
Now that we have collected user's input we are ready to create a new post.

Replace

```javascript
console.log(title, body);
```

with

```javascript
createPost(title, body);
```

and add the `createPost` function

```javascript
function createPost(title, body) {
  var postObject = { title: title, body: body };
  fetch(FIREBASE_JSON, {
    method: "POST",
    body: serialize(postObject)
  });
}
```

### createPost function

*5.1 – Create a payload object*

We create a single ___object___ containing both `title` and `body` variables.
Such object carries all the necessary information (post title and message) to the server.

> [What is an `object literal`?](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Operators/Object_initializer)

An object is a collection of properties, and a property is an association between a name (or key) and a value.

Given the object represented below, we refer to `title` and `body` as object keys and to `"A title"` and to `"A post"` as object values.

```json
{
  "title" : "A title",
  "body"  : "A post"
}
```

*5.2 – POST message to the server*

Now let's use the `fetch` __function__ to send our brand new post to the server.

First we specify the server address (`FIREBASE_JSON`) as we did in [Step 1](https://js-girls.gitbooks.io/workshop/content/docs/level1/01-draw-first-element-from-response.html).

Then we pass a _request_ configuration __object__ as the second parameter of the `fetch` function.

```javascript
{
  method: "POST",
  body: serialize(postObject)
}
```

This object just tells to the `fetch` function what we want to send to the server and _how_.

Let's take a closer look to this object structure:

* The first property, `method: "POST"`, specifies that we want to *POST* our paylod to the server (we expect back a confirmation by the server).

* The second property, `body: serialize(postObject)` specifies the payload that will be to be sent (in this case the new message).

>[What is `HTTP POST` method](https://developer.mozilla.org/en-US/docs/Web/HTTP)

*5.3– Serialize function*

If You paid attenction, and we are sure you did ;) , you might have noticed the `serialize` __function__ .

This is a user defined function that you can find in `utils/utils.js` and that we report here for convenience:

```javascript
function serialize(obj) {
  return JSON.stringify(obj);
}
```

This function takes an __object__ parameter and converts it into its string representation using the `JSON.stringify` method.

> [What are `json` and `JSON.stringify`?](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/JSON)

JSON is a specific Javascript notation for objects, arrays, numbers, strings and other Javascript's type.
It is often used to share information between the client (our Javascript application) and the server.

**What We just did:**

We introduced a lot of concepts so it is better to recap:

* We created an __object__ to store user form's data.
* We configured and used the `fetch` function to POST our data to the server.
