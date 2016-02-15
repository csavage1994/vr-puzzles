/*document.querySelector('#cube1').addEventListener('click', function () {
  this.setAttribute('material', 'color', 'red');
  console.log('I was clicked!');
});*/
var createEntity = function(pos, id, geometry, material){
  return '<a-entity position="' + pos[0] + ' ' + pos[1] + ' ' + pos[2] + '"id="' + id + '" geometry ="primitive: ' + geometry + '" material="color: ' + ' ' + material +'"></a-entity>';
};

$('#cube1').on('click', function(){
  this.setAttribute('material', 'color', 'red');
});
var cubeTest = createEntity([3,3,3], 'cube4', 'box', 'green');
console.log(cubeTest);
$('#scene').append(cubeTest);
