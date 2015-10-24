var todoItems = [
  { text: "Buy pasta",   completed: false },
  { text: "Buy milk",    completed: true },
  { text: "Disco dance", completed: false }
];

var renderItem = function(item, template) {
  return template
    .replace('_TODO_TEXT_', item['text'])
    .replace('_CHECKED_', item['completed'] ? 'checked' : '');
}

var renderList = function(items) {
  var listElement = document.querySelector('#todo-list');
  var itemTemplate = document.querySelector('#template-todo-item').innerHTML;

  listElement.innerHTML = '';

  items.forEach(function(item) {
    listElement.innerHTML += renderItem(item, itemTemplate);
  });
}

var toggleStatus = function(event) {
  console.log(event);

  // renderList(todoItems);
}

var removeItem = function(event) {
  console.log(event);

  // renderList(todoItems);
}

var createNew = function(event) {
  var newItemElement = document.querySelector('#new-item');

  if (event.keyCode != 13) return;
  if (newItemElement.value.trim() == '') return;

  todoItems.push({ text: newItemElement.value, completed: false });
  newItemElement.value = '';

  renderList(todoItems);
}

renderList(todoItems);
