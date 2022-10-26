const container = document.querySelector('#container');


function createGrid(gridSize) {
for (let i = 0; i < gridSize * gridSize; i++) {
   const content = document.createElement('div');
   content.classList.add('content');
   container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
   container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
   container.appendChild(content);
   content.addEventListener('mouseover', () => {
   content.style.backgroundColor = randomRgb();
  });
 }
}

createGrid(16);

function removeOldGrid() {
   while(container.firstChild) {
      container.removeChild(container.firstChild);
   }
}

function reset() {
  let resetB = Number(window.prompt("New number of squares per side:", "between 1 and 100"));
  if (resetB > 100)
    window.prompt("Number too high!");
    else if (isNaN(resetB) || !Number.isInteger(+resetB) || resetB < 1) {
      return reset();
    }
    else
     removeOldGrid ();
     createGrid(resetB);
     
    
}

function randomRgb() {
   const red = Math.floor(Math.random() * 256/2);
   const green = Math.floor(Math.random() * 256/2);
   const blue = Math.floor(Math.random() * 256/2);
   return "rgb(" + red + ", " + green + ", " + blue + ")";
 }
