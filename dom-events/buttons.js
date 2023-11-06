function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log('event.target:', event.target);
}
const btnClick = document.querySelector('.click-button');
btnClick.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log('event.target:', event.target);
}
const btnHover = document.querySelector('.hover-button');
btnHover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log('event.target:', event.target);
}
const btnDouble = document.querySelector('.double-click-button');
btnDouble.addEventListener('dblclick', handleDoubleClick);
