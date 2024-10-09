const header = document.getElementById("header");

header.setAttribute("style", "text-align: center; margin: 0; padding: 10px; background-color: yellow;")

// This is the default game, where the grid will be 16x16
const gridContainer = document.getElementById("gridContainer");


const buttonsDiv = document.getElementById("buttonsDiv");
buttonsDiv.setAttribute("style", "text-align: center; padding: 10px; margin: 20px;");

// Creating the container that will hold the boxes. 
gridContainer.setAttribute("style", "display: flex; flex-wrap: wrap; border: 3px solid blue; width: 500px; height: 500px; margin: auto; border-sizing: border-box;");


// to make perfect square pixels:
// 1. Calculate width of container. 
// 2. Divide width of container by # of squares to put on one side to get size of one square. THAT WILL BE PIXELS FOR WIDTH OF BOX. 
// 3. Divide height of container by # of squres to put on one side to get size of one square. THAT WILL BE PIXELS FOR HEIGHT OF BOX. 


// default width 
widthOneSquare = 500/16;

heightOneSquare = 500/16;
// Creating 256 boxes inside of the container using a function 
for (i=0; i < 256 ; i++){
    const gridSquare = document.createElement('div');
    // This part of the code, courtesy of: https://stackoverflow.com/questions/42215029/distribute-div-children-evenly-over-entire-height-and-width-of-container
    gridSquare.setAttribute("style", ` width:${widthOneSquare}px; height:${heightOneSquare}px;flex: 1 1 auto`);

    gridContainer.appendChild(gridSquare);
   
   
    // step 3: changing color of div when hovered over. 

    gridSquare.addEventListener("mouseover", () => {
        gridSquare.style["background-color"] ="lightblue";
      });  
}


// When you click button, it will run function to "play game". I will clear the board by deleting gridContainer, and make an identical one. 

let pixelSizeButton = document.getElementById("btn");

 function customPixelSizeFunction(){
   
    // this is how many pixels the user wants. 
    let pixelInput = prompt("How many pixels do you want?");

    //Any Input less or more = error, including non-numbers 
    if ( isNaN(pixelInput) || pixelInput <1 || pixelInput >100){
        alert("You need to put a valid input (a number between 16 and 100)!");
        // customPixelSizeFunction();
    }

    // input should be an integer between 16 and 100. 
    else if (pixelInput >= 1 || pixelInput <=100){
        // If user input is valid, the first step is to clear the board and create a new, identical one. 
        // clearing the grid 
        gridContainer.textContent="";

        // Taking user input for boxes (Ex: User Enters 18 pixels)
        let totalBoxes = pixelInput * pixelInput;
        
        // finding custom square width and height  
        let customSquareWidth = 500/pixelInput;

        //    creating the custom squares 
        for (i=0; i < totalBoxes ; i++){
            const gridSquare = document.createElement('div');
            // This part of the code, courtesy of: https://stackoverflow.com/questions/42215029/distribute-div-children-evenly-over-entire-height-and-width-of-container
            gridSquare.setAttribute("style", ` width:${customSquareWidth}px; height:${customSquareWidth}px;flex: 1 1 auto`);
        
            gridContainer.appendChild(gridSquare);
            
            
            gridSquare.addEventListener("mouseover", () => {
                gridSquare.style["background-color"] ="lightblue";
              });  
        }
        

    }

 }

// When you click this button, it should give you a prompt asking for the pixel size (16-100).
pixelSizeButton.addEventListener("click", customPixelSizeFunction);
