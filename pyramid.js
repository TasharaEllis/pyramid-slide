
var heightElem = document.getElementById("height");
var symbolElem = document.getElementById("symbol");

// symbol
symbolElem.onchange = function(event) {

    // figure out the symbol by dropdown menu
    symbol = symbolElem.value;
    //console.log(symbol)

// height
heightElem.oninput = function(event) {

    // slider height
    heightStr = heightElem.value;

    height = parseInt(heightStr);
    
    document.getElementById("slider").innerHTML = "&nbsp;&nbsp;" + height;

// draw pyramid 
drawPyramid(height, symbol);
}}

function drawPyramid(height, symbol) {

    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp;";
            rowStr += spaceChar;
    }

    for (var i = 0; i < numBricks; i++) {
        rowStr += symbol;
    }

        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
