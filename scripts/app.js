var taskItems = [
  { text: 'Buy coffee',  completed: true  },
  { text: 'Buy milk',    completed: false },
  { text: 'Disco dance', completed: false }
];

var renderItem = function(item) {
  var template = document.querySelector('#item-template').innerHTML;
  var classAttr = ['list-group-item'];

  if (item['completed']) classAttr.push('list-group-item-success');

  return template
    .replace('_TEXT_', item['text'])
    .replace('_CLASS_', classAttr.join(' '))
    .replace('_CHECKED_', item['completed'] ? 'checked' : '');
}

var renderList = function(items) {
  var listElement = document.querySelector('#todo-list');

  listElement.innerHTML = '';

  items.forEach(function(item) {
    listElement.innerHTML += renderItem(item);
  });
}

var toggleStatus = function(event) {
  var text = event.target.parentNode.querySelector('span').innerHTML;

  taskItems = taskItems.map(function(item) {
    if (item['text'] == text) item['completed'] = !item['completed'];
    return item;
  });

  renderList(taskItems);
}

var removeItem = function(event) {
  var text = event.target.parentNode.querySelector('span').innerHTML;

  taskItems = taskItems.filter(function(item) {
    if (item['text'] != text) return true;
  });

  renderList(taskItems);
}

var createNew = function(event) {
  var newItemElement = document.querySelector('#new-item');

  if (event.keyCode != 13) return;
  if (newItemElement.value.trim() == '') return;

  taskItems.push({ text: newItemElement.value, completed: false });
  newItemElement.value = '';

  renderList(taskItems);
}

var showItems = function(what) {
  var itemsToShow = [];

  switch(what) {
    case 'completed':
      itemsToShow = taskItems.filter(function(item) {
        return item['completed'];
      });
      break;
    case 'active':
      itemsToShow = taskItems.filter(function(item) {
        return !item['completed'];
      });
      break;
    default:
      itemsToShow = taskItems;
      break;
  }

  renderList(itemsToShow);
}

var clearCompleted = function() {
  taskItems = taskItems.filter(function(item) {
    return !item['completed'];
  });

  renderList(taskItems);
}

renderList(taskItems);
