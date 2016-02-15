/*document.querySelector('#cube1').addEventListener('click', function () {
  this.setAttribute('material', 'color', 'red');
  console.log('I was clicked!');
});*/
$(document).ready(function(){
  testOne = [0, 0, 0];
  var testOneComplete = false;

  var createEntity = function(pos, id, geometry, material){
    return '<a-entity position="' + pos[0] + ' ' + pos[1] + ' ' + pos[2] + '"id="' + id + '" geometry ="primitive: ' + geometry + '" material="color: ' + ' ' + material +'"></a-entity>';
  };

  var increaseScore = function(){
    var score = parseInt($('#int').text());
    testOneComplete = true;
    score += 1000;
    $('#int').text(score);
    alert('You completed this puzzle!');
  }
  var puz1cube1 = createEntity([3,0,0], 'puz1Cube1', 'box', 'blue');
  var puz1cube2 = createEntity([0,0,0], 'puz1Cube2', 'box', 'green');
  var puz1cube3 = createEntity([-3,0,0], 'puz1Cube3', 'box', 'teal');
  $('#scene').append(puz1cube1, puz1cube2, puz1cube3);

  $('#puz1Cube1').on('click', function(){
    this.setAttribute('material', 'color', '#00ff00');
    testOne[0] = 1;
    if(testOne.indexOf(0) === -1 && !testOneComplete){
      console.log('complete');
      increaseScore();
    }
  });

  $('#puz1Cube2').on('click', function(){
    this.setAttribute('material', 'color', '#00ff00');
    testOne[1] = 1;
    if(testOne.indexOf(0) === -1 && !testOneComplete){
      console.log('complete');
      increaseScore();
    }
  });

  $('#puz1Cube3').on('click', function(){
    this.setAttribute('material', 'color', '#00ff00');
    testOne[2] = 1;
    if(testOne.indexOf(0) === -1 && !testOneComplete){
      console.log('complete');
      increaseScore();
    }
  });
});
