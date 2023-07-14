//Define the sketchboard itself, including saving its width and height to specific variables
const sketchboard = document.querySelector(".sketchboard")
const slider = document.querySelector("#myRange")
const unitsLabel = document.querySelector("#unitsLabel")
sketchboardHeight = sketchboard.clientHeight;
sketchboardWidth = sketchboard.clientWidth;
let isMouseDown = false;

//define how many squares per side we need
sketchboardUnits = 32

//Run a for loop as many times as that number, with each creating a div that's the height of the sketchboard divided by the number of squares per side. After that, inside of the div, create a set number of divs with their width equal to the width of the sketchboard divided by the number of squares per side. 

function draw(e) {
    if (e.type === 'mouseover' && !mouseDown) return

    e.target.style.backgroundColor = 'black'
}

function generateSketchboard() {

    sketchboard.innerHTML = "";
    
    for (let i = 0; i < sketchboardUnits; i++) {
        const sketchboardRow = document.createElement('div');
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
    
        sketchboardRow.className = "sketchboardRow"
        sketchboardRow.style.height = sketchboardHeight / sketchboardUnits + "px"
        sketchboardRow.style.display = "flex"
    
        for (let i = 0; i < sketchboardUnits; i++) {
            const sketchboardPixel = document.createElement('div');
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
    
            sketchboardPixel.className = "sketchboardPixel"
            sketchboardPixel.style.width = sketchboardWidth / sketchboardUnits + "px"
            sketchboardPixel.style.height = sketchboardHeight / sketchboardUnits + "px"
    
            sketchboardPixel.addEventListener('mouseover', () => {
                if (isMouseDown) {
                    sketchboardPixel.style.backgroundColor = 'black'
                }
            })
            sketchboardPixel.addEventListener('mousedown', () => {
                isMouseDown = true;
                sketchboardPixel.style.backgroundColor = 'black'
            })
            sketchboardPixel.addEventListener('mouseup', () => {
                isMouseDown = false;
            })
    
            sketchboardRow.appendChild(sketchboardPixel);
    
        }
    
        sketchboard.appendChild(sketchboardRow)
    
    }
}

slider.oninput = function() {
    sketchboardUnits = this.value;
    unitsLabel.innerHTML = "Squares per side: " + this.value;
    generateSketchboard()
}


generateSketchboard();