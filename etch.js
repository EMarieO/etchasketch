const container = document.querySelector('#container');


function createGrid(gridSize) {
for (let i = 0; i < gridSize * gridSize; i++) {
   const content = document.createElement('div');
   content.classList.add('content');
   container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
   container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
   container.appendChild(content);
   content.addEventListener('mouseover', () => {
   content.style.backgroundColor = 'green';
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
  let resetB = Number(window.prompt("New number of squares per side:", ""));
  if (resetB > 100)
    window.prompt("Needs to be a number under 100!");
    else
     removeOldGrid ();
     createGrid(resetB);
     
    
}

