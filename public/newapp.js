/*document.querySelector('#cube1').addEventListener('click', function () {
  this.setAttribute('material', 'color', 'red');
  console.log('I was clicked!');
});*/

$(document).ready(function(){
  //set up variables to detect completion conditions
  testOne = [0, 0, 0];
  testTwo = [0,0,0,0];
  //flags so puzzles cannot be completed more than once
  var testOneComplete = false;
  var testTwoComplete = false;
  //possible npm module?
  //takes in array of 3 values, string id, type of object, color of object and returns string constructor for
  //vr objects
  var createEntity = function(pos, id, geometry, material){
    return '<a-entity position="' + pos[0] + ' ' + pos[1] + ' ' + pos[2] + '"id="' + id + '" geometry ="primitive: ' + geometry + '" material="color: ' + ' ' + material +'"></a-entity>';
  };

  var increaseScore = function(){
    var score = parseInt($('#int').text());
    score += 1000;
    $('#int').text(score);
    alert('You completed this puzzle!');
  }

  //generate objects for puzzle #1
  var puz1cube1 = createEntity([3,0,0], 'puz1Cube1', 'box', 'blue');
  var puz1cube2 = createEntity([0,0,0], 'puz1Cube2', 'box', 'green');
  var puz1cube3 = createEntity([-3,0,0], 'puz1Cube3', 'box', 'teal');

  //set scene for puzzle #1
  $('#scene').append(puz1cube1, puz1cube2, puz1cube3);

  //generate objects for puzzle #2
  var puz2cube1 = createEntity([0,0,20], 'puz2Cube1', 'box', 'blue');
  var puz2cube2 = createEntity([0,4,20], 'puz2Cube2', 'box', 'blue');
  var puz2cube3 = createEntity([4,0,20], 'puz2Cube3', 'box', 'blue');
  var puz2cube4 = createEntity([4,4,20], 'puz2Cube4', 'box', 'blue');
  $('#scene').append(puz2cube1, puz2cube2, puz2cube3, puz2cube4);
  //set up event handling for first puzzle
  $('#puz1Cube1').on('click', function(){
    this.setAttribute('material', 'color', '#00ff00');
    testOne[0] = 1;
    if(testOne.indexOf(0) === -1 && !testOneComplete){
      console.log('complete');
      testOneComplete = true;
      increaseScore();
    }
  });

  $('#puz1Cube2').on('click', function(){
    this.setAttribute('material', 'color', '#00ff00');
    testOne[1] = 1;
    if(testOne.indexOf(0) === -1 && !testOneComplete){
      console.log('complete');
      testOneComplete = true;
      increaseScore();
    }
  });

  $('#puz1Cube3').on('click', function(){
    this.setAttribute('material', 'color', '#00ff00');
    testOne[2] = 1;
    if(testOne.indexOf(0) === -1 && !testOneComplete){
      console.log('complete');
      testOneComplete = true;
      increaseScore();
    }
  });
  //end event handling for first puzzle
  //start event handling for second puzzle
  $('#puz2Cube1').on('click', function(){
    if(testTwo[1] === 1){
      testTwo[2] = 1;
      this.setAttribute('material', 'color', '#00ff00');
    }
  });

  $('#puz2Cube2').on('click', function(){
    if(testTwo[0] === 1){
      testTwo[1] = 1;
      this.setAttribute('material', 'color', '#00ff00');
    }
  });

  $('#puz2Cube3').on('click', function(){
    if(testTwo[0] === 0){
      testTwo[0] = 1;
      this.setAttribute('material', 'color', '#00ff00');
    }
  });

  $('#puz2Cube4').on('click', function(){
    if(testTwo[2] === 1){
      testTwo[3] = 1;
      this.setAttribute('material', 'color', '#00ff00');
    }
    if(testTwo.indexOf(0) === -1 && !testTwoComplete){
      console.log('complete');
      testTwoComplete = true;
      increaseScore();
    }
  });

});
