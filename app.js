$(function() {
  
  var squaresPerRow = 50;
  var square = "<div class=square></div>";
  
  //generate squares
  function generateSquares(squaresPerRow) {
    for (var i=0; i< squaresPerRow * squaresPerRow; i++) {
      $("#container").append(square);
    }
  };

  generateSquares(squaresPerRow);
  
  //fit squares to #container div
  function customFitSquares() {
    var containerWidth = $("#container").width(); 
    setHeightWidth = containerWidth/squaresPerRow;  
    $(".square").height(setHeightWidth);
    $(".square").width(setHeightWidth);
  };
  
  customFitSquares();
  
  //set up hover affects to change the color of the squares
  function draw() {
    $(".square").mouseenter(function() {
      $(this).css({"background-color": "white"});
    });
  };
  
  draw();
  
  //add a button to clear the current grid
  $(".clear").click(function() {
    $(".square").css({"background-color": "red"});
  });
  
  //add a button that creates a new grid by asking for the amount of squares with a pop up
  $(".grid").click(function() {    
    $("#container").empty();
    var newGrid = Number(prompt("Enter number of squares (1-64):", "50"));
    squaresPerRow = newGrid    
    generateSquares(squaresPerRow);
    customFitSquares();
    draw();    
  });
  
});