const header = document.getElementById("header");

header.setAttribute("style", "text-align: center; margin: 0; padding: 10px; text-shadow: 5px 5px 2px grey;")


// This is for the default game, where the grid will be 16x16
const gridContainer = document.getElementById("gridContainer");

// styling of the buttons 
const buttonsDiv = document.getElementById("buttonsDiv");
buttonsDiv.setAttribute("style", "text-align: center; padding: 10px; margin: 20px;");


 
 

// Creating the container that will hold the boxes. 
gridContainer.setAttribute("style", "display: flex; flex-wrap: wrap; border: 3px solid blue; width: 500px; height: 500px; margin: auto; border-sizing: border-box;");



// default width and height
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


// creation of Random Color Button 
let randColorBtn = document.createElement("button");
randColorBtn.textContent = "Random Color Button";
buttonsDiv.appendChild(randColorBtn);

// when clicking Random Color Button, it should 1. Clear Board, 2. Have User INput Div Size, 3. create Divs again, and 4. Add eventListener to Divs; when hovered, change colors. 

randColorBtn.addEventListener("click", ()=>{
  let pixelInput = prompt("How many pixels do you want?");


  //Any Input less or more = error, including non-numbers 
  if ( isNaN(pixelInput) || pixelInput <1 || pixelInput >100){
      alert("You need to put a valid input (a number between 1 and 100)!");
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


// *******BELOW CODE IS FROM THIS WEBSITE: https://www.freecodecamp.org/news/generate-colors-in-javascript/ 

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]



function getCharacter(index) {
    return hexCharacters[index]
}

function generateNewColor() {
    let hexColorRep = "#"

    for (let index = 0; index < 6; index++){
        const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
        hexColorRep += getCharacter( randomPosition )
    }

    return hexColorRep
}

    
              gridSquare.style["background-color"] = generateNewColor();
            });  

// ******************ABOVE CODE IS FROM HERE: https://www.freecodecamp.org/news/generate-colors-in-javascript/ 

            
            // INCLUDE OPACITY PART HERE 


            
      }    

  }

});










// When you click button, it will run function to "play game". I will clear the board by deleting gridContainer, and make an identical one. 

let pixelSizeButton = document.getElementById("btn");

// Clear Grid Button: When pressed should clear grid.
let clearGridButton = document.getElementById("clear");
clearGridButton.addEventListener("click", ()=> {
  gridContainer.textContent="";

  // after clearing grid, should run the same code to be able to color the grid again. 
  for (i=0; i < 256 ; i++){
    const gridSquare = document.createElement('div');
    // This part of the code, courtesy of: https://stackoverflow.com/questions/42215029/distribute-div-children-evenly-over-entire-height-and-width-of-container
    gridSquare.setAttribute("style", ` width:${widthOneSquare}px; height:${heightOneSquare}px;flex: 1 1 auto`);

    gridContainer.appendChild(gridSquare);
   
   
    // Changing color of div when hovered over. 

    gridSquare.addEventListener("mouseover", () => {
        gridSquare.style["background-color"] ="lightblue";
      });  
}

}






);


 function customPixelSizeFunction(){
   
    // this is how many pixels the user wants. 
    let pixelInput = prompt("How many pixels do you want?");


    //Any Input less or more = error, including non-numbers 
    if ( isNaN(pixelInput) || pixelInput <1 || pixelInput >100){
        alert("You need to put a valid input (a number between 1 and 100)!");
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



// When you click this button, it should give you a prompt asking for the pixel size (1-100).
pixelSizeButton.addEventListener("click", customPixelSizeFunction);
