## Step 5

### Create a new post.
Now that We have collected user's input We are ready to create a new post.

Replace 

```js
console.log(title, body);
```

with

```js
createPost(title, body);
```

and add the `createPost` function

```js
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

We can use `title` and `body` variables to create an object that can be used as a payload to bring the desired information (the user message with a title) to the server.

> [What is an ```object literal```?](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Operators/Object_initializer)

An object is a collection of properties, and a property is an association between a name (or key) and a value. 
 
In our case We are creating an object whose keys are `title` and `body` and the valus are the collected form's information.


*5.2 – POST message to the server*

Now let's use `fetch` __function__ to send our new fresh post to the server.

First We specify server's address (`FIREBASE_JSON`) as We Did in [Step 1](https://js-girls.gitbooks.io/workshop/content/docs/level1/01-draw-first-element-from-response.html).

Then We pass a _request_ configuration __object__ as the second parameter of `fetch`.

```js
{
  method: "POST",
  body: serialize(postObject)
}
```

This object just tell to `fetch` what We want to send to the server and _how_.
Just dig into this object structure:

* The first property, ```method: "POST"```, specify that We'd like to send our paylod to the server and to have back an appropriate response.

* The second property, ```body: serialize(postObject)``` specify what is the payload to send (in this case the new message).

>[What is ```HTTP POST``` method](https://developer.mozilla.org/en-US/docs/Web/HTTP)

*5.3– Serialize function*

If You paid attenction, and We know You did ; ) , You have just noticed the use of `serialize` __function__ .

Serialize is a user defined function that You can find in `utils/utils.js` and that We report here for commodity:

```js
function serialize(obj) { 
  return JSON.stringify(obj); 
}
```

This function take an __object__ parameter and convert it into a json string with the use ```JSON.stringify``` method.

> [What are ```json``` and ```JSON.stringify```?](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/JSON)

JSON is a special syntax for serializing objects, arrays, numbers, strings and other Javascript's type.
It is often used to share messages between the client (our Javascript application) and the server.

**What We just did:**

We introduced a lot of concepts so it's better to do a recap:

* We created and __object__ to store user form's data.
* We configured and used `fetch` function to POST our data to the server.

