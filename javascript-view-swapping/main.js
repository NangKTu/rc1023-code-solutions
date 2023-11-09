const $container = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');

$container.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === event.target) {
        $tabs[i].classList.add('active');
      } else {
        $tabs[i].classList.remove('active');
      }
    }

    const clickedDataView = event.target.getAttribute('data-view');

    for (let n = 0; n < $views.length; n++) {
      const dataView = $views[n].getAttribute('data-view');
      if (dataView === clickedDataView) {
        $views[n].classList.remove('hidden');
      } else {
        $views[n].classList.add('hidden');
      }
    }
  }
});
