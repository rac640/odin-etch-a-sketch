const gridContainer = document.getElementById("gridContainer");
gridContainer.setAttribute("style", "display: flex; flex-wrap: wrap; border: 1px solid blue; width: 100vw; height: 100vh;");
gridContainer.style.display = "flex";
gridContainer.style.border = "3px solid blue";



// Creating 256 boxes inside of the container using a function 

for (i=0; i < 256 ; i++){
    const gridSquare = document.createElement('div');
    gridSquare.setAttribute("style", "color: blue; border: 1px solid black; min-width:6%;   flex:1 1 auto;");
    gridContainer.appendChild(gridSquare);
    
}







// const container = document.getElementById("container");

// // div container 
// container.setAttribute("style", "display: flex; height: 100vh; width: 100vw; border:1px solid blue; flex-wrap: wrap; padding: 3px;justify-content: space-between;")

// for (let i = 0; i < 256; i++){
//     const a = document.createElement("div");
//     a.setAttribute("style", " flex: 1 1 auto; min-width: 6%; border: 1px solid black;");


    
//     container.appendChild(a);
// }