var FIREBASE_JSON = 'https://jsgirls-level1.firebaseio.com/posts.json';

function toArray(obj) { return Object.keys(obj).map(function (key) {return obj[key]}) }

function serialize(obj) { return JSON.stringify(obj); }
