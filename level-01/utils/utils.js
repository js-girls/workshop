function toArray(obj) { return Object.keys(obj).map(function (key) {return obj[key]}) };

function serialize(obj) { return JSON.stringify(obj); }
