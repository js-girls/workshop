# Live Timeline

**A Facebook-like timeline**

This tutorial will guide you through the development of the app.

We will be introducing new concepts on each step, so make sure you understand what's going on before going further!
If you have any doubts, please ask your coach for help.

## Setup your Firebase
You need to create a new app on [Firebase](https://www.firebase.com/) (the Free Plan is enough) and you need to configure it.
Copy the following code and paste in the section called "Security and Rules":

```json
{
  "rules": {
    ".read": true,
    ".write": true,
    "posts": {
      "$post": {
      ".validate": "newData.hasChildren(['title', 'body']) && newData.child('title').isString() && newData.child('body').isString() && newData.child('title').val().length > 1 && newData.child('body').val().length > 1",
      ".read": true,
      ".write": true
      }
    }
  }
}
```

## Key concepts

During the workshop we will be covering the following concepts:

### JavaScript
  * Base values: `String`, `Number`, `Boolean`, undefined values
  * Variables and functions
  * Compound values: `Array` and `Object`
  * Language Structure: `if`, `return`
  * Global methods: `setInterval`
  * Array methods: `forEach`
  * HTTP-related methods: `fetch`

### The DOM
  * `Element` and some of its properties and methods (`querySelector`, `innerHTML`)
  * The events and the event object main properties (`target`, `preventDefault`)

### The Web
Internet, at its core, works in a very simple way.

You **request** for something (eg. a web page such as `www.google.com`) and at some point you get back a **response**. Yes, it's just **that** simple!

This **request–response** mechanism happens for example when entering a website address in the address bar of your browser.
So it turns out browsers can help us making requests and handling responses.

Going a level deeper we find out that this is because they're good at handling the communication protocol the *World Wide Web* is built on: [Http](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol).

So when working on our web applications, everytime we want to communicate with the outside world, we can rely on our the capability of our browsers to handle a **HTTP request** and work on the *response* we get back.

**HTTP request** define a few *methods* to better specify the type of request you want to create. We won't go too much into details here, but it's useful that you learn at least the two most common methods one can use: **GET** and **POST**.

  * The **GET** method is usually used when you want to retrieve some remote resource
  * In contrast, the **POST** method is used when you want to send over something over to some remote entity

We can then use our browsers' capability of handling the HTTP protocol in our JavaScript applications.

More specifically the api we will be using go by the name of [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

**fetch** is an easy api. You can:
  * create your request for your remote resource just like this: `fetch(MY_REMOTE_RESOURCE)`
  * you can then work on the response by defining the usual so-called *callback* function and giving it to the `then` method

It'll look like this:
```javascript
fetch('http://some_remote_url')
  .then(function(response) {
    // do something with your response object
  })  
```
