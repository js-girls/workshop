var loadList = function() {
  if (localStorage['taskItems']) return JSON.parse(localStorage['taskItems']);

  return [
    { text: 'Buy coffee',  completed: true  },
    { text: 'Buy milk',    completed: false },
    { text: 'Disco dance', completed: false }
  ];
}

var renderItem = function(item) {
  var template = document.querySelector('#item-template').innerHTML;
  var classAttr = ['list-group-item'];
  var checkedAttr = '';

  if (item['completed']) {
    classAttr.push('completed');
    checkedAttr = 'checked';
  }

  return template
    .replace('_TEXT_', item['text'])
    .replace('_CLASS_', classAttr.join(' '))
    .replace('_CHECKED_', checkedAttr);
}

var updateList = function(items, save) {
  var listElement = document.querySelector('#task-list');

  listElement.innerHTML = '';

  items.forEach(function(item) {
    listElement.innerHTML += renderItem(item);
  });

  if (save) localStorage['taskItems'] = JSON.stringify(items);

  updateCounters();
}

var updateCounters = function() {
  var completedCount = 0;

  taskItems.forEach(function(item) {
    if (item['completed']) completedCount++;
  });

  document.querySelector('.filter-all').dataset.count = taskItems.length;
  document.querySelector('.filter-active').dataset.count = taskItems.length - completedCount;
  document.querySelector('.filter-completed').dataset.count = completedCount;
}

var toggleStatus = function(event) {
  var text = event.target.parentNode.querySelector('.item-text').innerHTML;

  taskItems = taskItems.map(function(item) {
    if (item['text'] == text) item['completed'] = !item['completed'];
    return item;
  });

  updateList(taskItems, true);
}

var createNew = function(event) {
  var newItemElement = document.querySelector('#new-item');
  var newItemValue = newItemElement.value.trim();
  var returnKeyCode = 13;

  if (event.keyCode != returnKeyCode) return;
  if (!newItemValue) return;

  taskItems.push({ text: newItemValue, completed: false });
  newItemElement.value = '';

  updateList(taskItems, true);
}

var removeItem = function(event) {
  var text = event.target.parentNode.querySelector('.item-text').innerHTML;

  taskItems = taskItems.filter(function(item) {
    if (item['text'] != text) return true;
  });

  updateList(taskItems, true);
}

var filterItems = function(status) {
  var itemsToShow = [];

  if (status == 'completed') {
    itemsToShow = taskItems.filter(function(item) {
      return item['completed'];
    });
  } else if (status == 'active') {
    itemsToShow = taskItems.filter(function(item) {
      return !item['completed'];
    });
  } else {
    itemsToShow = taskItems;
  }

  updateList(itemsToShow);
}

var clearCompleted = function() {
  taskItems = taskItems.filter(function(item) {
    return !item['completed'];
  });

  updateList(taskItems, true);
}

var taskItems = loadList();
updateList(taskItems);
