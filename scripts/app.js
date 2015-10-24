var todoItems = [
  { text: "Buy pasta",   completed: true },
  { text: "Buy milk",    completed: false },
  { text: "Disco dance", completed: false }
];

var renderItem = function(item, template) {
  var todoClass = ['list-group-item'];

  if (item['completed']) todoClass.push('list-group-item-success');

  return template
    .replace('_TEXT_', item['text'])
    .replace('_CLASS_', todoClass.join(' '))
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
  var text = event.target.parentNode.querySelector('span').innerHTML;

  todoItems = todoItems.map(function(item) {
    if (item['text'] == text) item['completed'] = !item['completed'];
    return item;
  });

  renderList(todoItems);
}

var removeItem = function(event) {
  var text = event.target.parentNode.querySelector('span').innerHTML;

  todoItems = todoItems.filter(function(item) {
    if (item['text'] != text) return true;
  });

  renderList(todoItems);
}

var createNew = function(event) {
  var newItemElement = document.querySelector('#new-item');

  if (event.keyCode != 13) return;
  if (newItemElement.value.trim() == '') return;

  todoItems.push({ text: newItemElement.value, completed: false });
  newItemElement.value = '';

  renderList(todoItems);
}

var showItems = function(what) {
  var itemsToShow = [];

  switch(what) {
    case 'completed':
      itemsToShow = todoItems.filter(function(item) {
        return item['completed'];
      });
      break;
    case 'active':
      itemsToShow = todoItems.filter(function(item) {
        return !item['completed'];
      });
      break;
    default:
      itemsToShow = todoItems;
      break;
  }

  renderList(itemsToShow);
}

var clearCompleted = function() {
  todoItems = todoItems.filter(function(item) {
    return !item['completed'];
  });

  renderList(todoItems);
}

renderList(todoItems);
