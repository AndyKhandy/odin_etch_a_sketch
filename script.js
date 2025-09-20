const box = document.querySelector(".container");

const sizeBtn = document.querySelector("#btnChange");
const clearBtn = document.querySelector("#btnClear");
const sizeText = document.querySelector("#sizeText");
const deactiveBtn = document.querySelector("#btnDeactivate")

let boxSize = 16;
let divs;

let rainbow = false;
let colorActive = true;

displayBox();

sizeBtn.addEventListener("click", () => {
    deleteBox();
    boxSize = prompt("Enter how many squares you want per row! (max is 100)");
    displayBox();
});

clearBtn.addEventListener("click", () => {
    deleteBox();
    displayBox();
});

deactiveBtn.addEventListener("click", () => colorActive = !colorActive);

function displayBox()
{
    sizeText.textContent = `${boxSize} x ${boxSize}`;
    for(let i = 1; i <= (boxSize*boxSize);i++)
    {
        const div = document.createElement("div");
        div.style.width = `${640/boxSize}px`;
        div.style.height = "auto";
        div.id = "box";
        div.addEventListener("mousemove", hoverBox);
        box.appendChild(div);
    }
    divs = document.querySelectorAll("#box");
}


function hoverBox(div)
{
    if(colorActive)
    {
        if(rainbow)
    {
        let randomRed = Math.floor(Math.random() * 255);
        let randomGreen = Math.floor(Math.random() * 255);
        let randomBlue = Math.floor(Math.random() * 255);
        this.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
    }
        else{
         this.style.backgroundColor = "red";
        }
    }
}

function deleteBox()
{
    for(const div of divs)
    {
        div.remove();
    }
}