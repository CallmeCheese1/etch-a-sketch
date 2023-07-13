//Define the sketchboard itself, including saving its width and height to specific variables
const sketchboard = document.querySelector(".sketchboard")
console.log(sketchboard)
sketchboardHeight = sketchboard.clientHeight;
sketchboardWidth = sketchboard.clientWidth;

//define how many squares per side we need
sketchboardUnits = 16

//Run a for loop as many times as that number, with each creating a div that's the height of the sketchboard divided by the number of squares per side. After that, inside of the div, create a set number of divs with their width equal to the width of the sketchboard divided by the number of squares per side. 

for (let i = 0; i < sketchboardUnits; i++) {
    const sketchboardRow = document.createElement('div');
    let randomColor = Math.floor(Math.random()*16777215).toString(16);

    sketchboardRow.className = "sketchboardRow"
    sketchboardRow.style.height = sketchboardHeight / sketchboardUnits + "px"
    sketchboardRow.style.backgroundColor = "#" + randomColor;

    sketchboard.appendChild(sketchboardRow)

}