const gridContainer = document.getElementById("gridContainer");
gridContainer.setAttribute("style", "display: flex; flex-wrap: wrap; border: 1px solid blue; width: 100vw; height: 100vh;");
gridContainer.style.display = "flex";
gridContainer.style.border = "3px solid blue";



// Creating 256 boxes inside of the container using a function 


for (i=0; i < 256 ; i++){
    const gridSquare = document.createElement('div');

    // This part of the code, courtesy of: https://stackoverflow.com/questions/42215029/distribute-div-children-evenly-over-entire-height-and-width-of-container
    gridSquare.setAttribute("style", "color: blue; border: 1px solid black; min-width:6%;   flex:1 1 auto;");
    gridContainer.appendChild(gridSquare);
   
   
    // step 3: changing color of div when hovered over. 

    gridSquare.addEventListener("mouseover", () => {
        gridSquare.style["background-color"] ="lightblue";
      });  
}



