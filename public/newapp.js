document.querySelector('#cube').addEventListener('click', function () {
  this.setAttribute('material', 'color', 'red');
  console.log('I was clicked!');
});