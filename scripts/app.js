var loadList = function() {
  if (localStorage.listItems) return JSON.parse(localStorage.listItems);

  return [
    { text: 'Buy coffee',  completed: true  },
    { text: 'Buy milk',    completed: false },
    { text: 'Disco dance', completed: false }
  ];
};

var updateList = function(items, save) {
  var listElement = document.querySelector('#task-list');

  listElement.innerHTML = '';

  items.forEach(function(item) {
    listElement.innerHTML += renderItem(item);
  });

  if (save) localStorage.listItems = JSON.stringify(items);

  updateCounters();
};

var renderItem = function(item) {
  var template = document.querySelector('#item-template').innerHTML;

  return template
    .replace('_TEXT_', item.text)
    .replace('_COMPLETED_', item.completed);
};

var createNew = function(event) {
  var newItemElement = event.target;
  var newItemValue = newItemElement.value.trim();

  if (event.keyCode != 13) return;
  if (!newItemValue) return;

  listItems.push({ text: newItemValue, completed: false });
  newItemElement.value = '';

  updateList(listItems, true);
};

var removeItem = function(event) {
  var clickedItemText = event.target.previousElementSibling.innerHTML;

  listItems = listItems.filter(function(item) {
    return clickedItemText != item.text;
  });

  updateList(listItems, true);
};

var toggleStatus = function(event) {
  var clickedItemText = event.target.innerHTML;

  listItems.forEach(function(item) {
    if (clickedItemText == item.text) {
      item.completed = !item.completed;
    }
  });

  updateList(listItems, true);
};

var filterItems = function(status) {
  var itemsToShow = [];

  if (status == 'completed') {
    itemsToShow = listItems.filter(function(item) {
      return item.completed;
    });
  } else if (status == 'active') {
    itemsToShow = listItems.filter(function(item) {
      return !item.completed;
    });
  } else {
    itemsToShow = listItems;
  }

  updateList(itemsToShow);
};

var clearCompleted = function() {
  listItems = listItems.filter(function(item) {
    return !item.completed;
  });

  updateList(listItems, true);
};

var updateCounters = function() {
  var completedCount = 0;

  listItems.forEach(function(item) {
    if (item.completed) completedCount++;
  });

  document.querySelector('.filter-all').dataset.count = listItems.length;
  document.querySelector('.filter-active').dataset.count = listItems.length - completedCount;
  document.querySelector('.filter-completed').dataset.count = completedCount;
};

var listItems = loadList();
updateList(listItems);
