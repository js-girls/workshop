const FIREBASE_JSON = 'https://brilliant-inferno-184.firebaseio.com/posts.json';

function toArray(obj) { return Object.keys(obj).map(function (key) {return obj[key]}) }

function serialize(obj) { return JSON.stringify(obj); }
