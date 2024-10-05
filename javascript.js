const gridContainer = document.getElementById("gridContainer");
gridContainer.setAttribute("style", "display: flex; flex-wrap: wrap; border: 1px solid blue; width: 100%; height: 100%;")
gridContainer.style.display = "flex";
gridContainer.style.border = "3px solid blue";



// Creating 256 boxes inside of the container using a function 

for (i=0; i < 256 ; i++){
    const gridSquare = document.createElement('div');
    gridSquare.setAttribute("style", "color: blue; border: 1px solid black; width: 90px; height:90px;flex-grow:1;")
    gridContainer.appendChild(gridSquare);
    
}