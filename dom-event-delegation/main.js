const $list = document.querySelector('.task-list');
$list.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    const taskListItem = event.target.closest('.task-list-item');
    if (taskListItem) {
      console.log('closest .task-list-item:', taskListItem);
      taskListItem.remove();
    }
  }
});
