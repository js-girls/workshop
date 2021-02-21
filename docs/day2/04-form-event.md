## Step 4

### Collecting the form data
Now that we have the `form`'s html code in place, we need to retrieve the data contained in it, in order to create an actual message.

Let's add some more code, right before the `</script>` tag.

*4.1 – Getting the `form`'s reference*

Let's use `document.querySelector` to get the `form` reference by its HTML id.

```javascript
var form = document.querySelector('#post-form');
```

*4.2 – Adding the submit handler*

The `form` tag – as well as other HTML elements – generates events based on the user input (e.g. mouse clicks, key presses, etcetera).

If we want to execute custom code when these events are triggered, we need to write an **event handler**.

> [What are event handlers?](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers)

In our case we handle the `form`'s **submit** event, that is triggered when the user clicks the submit button of the form.

When the user submits a form, the browser performs a request to the URL specified in the `action` attribute of the `form` tag.

However, we want to customise such behaviour and this is the reason why we create our own submit handler.

> [Handling a form with Javascript](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Sending_forms_through_JavaScript)

Event handlers can be created in a couple of different ways, this is one:

```javascript
form.onsubmit = function(e) {

};
```

We are *overriding* the `onsubmit` property of the `form` with a new function. The parameter `e` is an object representing the event that has been triggered.

*4.3 – Preventing the default behaviour*

Even if we define a custom handler, the browser will execute the default behaviour unless we explicitly tell otherwise.

To prevent the default behaviour, we need to add the following line inside the `onsubmit` function:
```javascript
e.preventDefault();
```
The method `preventDefault()` belongs to the `Event` object.

> [What is the Event object?](https://developer.mozilla.org/en/docs/Web/API/Event)

*4.4 – Getting the form values*

Let's now read the values from the input fields that we have inside the form. As usual, we can use `document.querySelector`.

Add the following lines right after the `preventDefault` statement:

```javascript
var title = document.querySelector('#post-title').value;
var body = document.querySelector('#post-body').value;
```

In each line we are *chaining* two actions: we get the reference to the HTML element and we read its `value` property using the dot operator.

Before we use the data in an actual request, let's check that we did things right. Let's log the two values into the console:

```javascript
console.log(title, body);
```
