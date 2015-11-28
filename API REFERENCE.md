# API Reference

## Array

#### .filter(callback) ([see in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter))
Executes a `function` on every element of the Array. It returns a new Array that contains only the elements for which the provided `function` returned `true`.

Example:
```
var myArray = [5, 6, 1, 2, 10];

var filteredArray = myArray.filter(function(num) {
    return num > 3; // Returns true only if the number is greater than 3
});

// filteredArray is [5, 6, 10]
```

#### .forEach(callback) ([see in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach))
Allows to execute a `function` on each and every element of the Array.

Example:
```
var myArray = ['Mickey', 'Goofy', 'Donald'];

myArray.forEach(function(name) {
   console.log('Hello' + name);
};

// Console Output
Hello Mickey
Hello Goofy
Hello Donald
```

#### .push(element) ([see in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push))
Appends an element at the end of the Array.

Example:
```
var myArray = [20, 100, 30];

myArray.push(50);

// myArray is now [20, 100, 30, 50]
```

## Event

#### .target ([see in MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/target))
Returns the element on which the event was captured.

#### .preventDefault() ([see in MDN](https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault))
Cancels the default event behavior.

## String

#### .replace(pattern, replacement) ([see in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace))
Returns a copy of the String with the given _pattern_ replaced with another String.

Example:
```
var myString = 'This and that';

var newString = myString.replace('and', 'or');

// newString is 'This or that'
```

#### .trim() ([see in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim))
Returns the original String without the whitespaces that it might have at the beginning or at the end.

Example:
```
var myString = '    Chocolate  ';

var newString = myString.trim();

// newString is 'Chocolate'
```

## JSON

#### .parse(jsonString) ([see in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse))
Converts a JSON string into a Javascript Object.

```
var myObject = JSON.parse('{"type": "door", "state": "open"}');

// myObject is { type: 'door', state: 'open' }
```

#### .stringify(object) ([see in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify))
Converts a Javascript Object into a JSON string.

```
var myObject = { type: 'door', state: 'open' };
var jsonString = JSON.stringify(myObject);

// jsonString is '{"type":"door","state":"open"}'
```

## document

#### .querySelector(cssSelector) ([see in MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector))
Returns the first element that matches the provided CSS selector.

Example:
```
// HTML
<div class="container">
   <div id="myElement">
      <span>Hello!</span>
   </div>
</div>

// Javascript
var myElement = document.querySelector('#myElement');

// myElement contains a reference to <div id="myElement"></div>
```

## Element

#### .innerHTML ([see in MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML))
Returns the HTML contained inside an Element. It can be set to a new value.

Example:
```
// HTML
<div id="myElement">
  <span>Hello!</span>
</div>

// Javascript
var myElement = document.querySelector('#myElement');

// myElement.innerHTML returns '<span>Hello!</span>'

myElement.innerHTML = '<div>Something else</div>';

// Now the HTML is this:
<div id="myElement">
  <div>Something else</div>
</div>
```

#### .previousElementSibling ([see in MDN](https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling))
Returns the Element before the selected one.

Example:
```
// HTML
<div class="container">
   <span>One</span>
   <span class="selected">Two</span>
   <span>Three</span>
</div>

// Javascript
var selected = document.querySelector('.selected');
var previous = selected.previousElementSibling;

// previous is <span>One</span>
```

#### .dataset ([see in MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset))
Returns the map of the `data-` attributes of the selected element.

Example:
```
// HTML
<div id="myElement" data-type="door" data-state="open"></div>

// Javascript
var door = document.querySelector('#myElement');
var dataSet = door.dataset;

// dataSet is { type: 'door', state: 'open' }
```

## <input>

#### .value ([see in MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input))
Returns or sets the value of the input field.

## console

#### .log(text) ([see in MDN](https://developer.mozilla.org/en-US/docs/Web/API/Console/log))
Writes a message in the browser's console.
