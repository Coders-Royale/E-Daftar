const [container] = document.getElementsByClassName('container');
const [slider] = document.getElementsByClassName('slider');

const onMove = (event) => {
  if (!event.offsetX || event.offsetX < 10) {
    return;
  }

  container.style.setProperty('--slide', `${event.offsetX}px`);
}


slider.addEventListener('mousedown', (event) => {
  container.addEventListener('mousemove', onMove);
  event.preventDefault();
});

document.addEventListener('mouseup', () => {
  container.removeEventListener('mousemove', onMove);
});