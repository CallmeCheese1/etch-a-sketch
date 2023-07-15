//Define the sketchboard itself, including saving its width and height to specific variables
const sketchboard = document.querySelector(".sketchboard")
const slider = document.querySelector("#myRange")
const unitsLabel = document.querySelector("#unitsLabel")
const resetButton = document.querySelector("#reset-button")
sketchboardHeight = sketchboard.clientHeight;
sketchboardWidth = sketchboard.clientWidth;
let isMouseDown = false;
let penMode = 'black';

//define how many squares per side we need
sketchboardUnits = 32

function draw(pixel) {

    if (penMode === 'black') {
        pixel.style.backgroundColor = 'black'
        pixel.style.opacity = "1"
    } else if (penMode === 'shading') {
        pixel.style.backgroundColor = 'black'
        pixel.style.opacity = parseFloat(pixel.style.opacity) + 0.1;
    } else if (penMode === 'rainbow') {
        pixel.style.opacity = "1"
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        console.log(randomColor)
        pixel.style.backgroundColor = '#' + randomColor;
    }

    
}

function generateSketchboard() {

    sketchboard.innerHTML = "";
    
    for (let i = 0; i < sketchboardUnits; i++) {
        const sketchboardRow = document.createElement('div');
    
        sketchboardRow.className = "sketchboardRow"
        sketchboardRow.style.height = sketchboardHeight / sketchboardUnits + "px"
        sketchboardRow.style.display = "flex"
    
        for (let i = 0; i < sketchboardUnits; i++) {
            const sketchboardPixel = document.createElement('div');
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
    
            sketchboardPixel.className = "sketchboardPixel"
            sketchboardPixel.style.width = sketchboardWidth / sketchboardUnits + "px"
            sketchboardPixel.style.height = sketchboardHeight / sketchboardUnits + "px"
            sketchboardPixel.style.opacity = "0"
    
            sketchboardPixel.addEventListener('mouseover', () => {
                if (isMouseDown) {
                    draw(sketchboardPixel)
                }
            })
            sketchboardPixel.addEventListener('mousedown', () => {
                isMouseDown = true;
                draw(sketchboardPixel)
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

resetButton.onclick = () => generateSketchboard();

const penOptions = document.querySelectorAll('input[type="radio"][name="pen-options"')
console.log(penOptions)
penOptions.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.checked) {
            penMode = radioButton.value;
            console.log(penMode);
        }
    })
})


generateSketchboard();