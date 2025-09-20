const box = document.querySelector(".container");
const sizeBtn = document.querySelector("#btn");
const sizeText = document.querySelector("#sizeText");
let boxSize = 16;
let divs;

let rainbow = false;

displayBox();

sizeBtn.addEventListener("click", () => {
    clearBox();
    boxSize = prompt("Enter how many squares you want per row! (max is 100)");
    displayBox();
});

function displayBox()
{
    sizeText.textContent = `${boxSize} x ${boxSize}`;
    for(let i = 1; i <= (boxSize*boxSize);i++)
    {
        const div = document.createElement("div");
        div.style.width = `${480/boxSize}px`;
        div.style.height = "auto";
        div.id = "box";
        div.addEventListener("mousemove", hoverBox);
        box.appendChild(div);
    }
    divs = document.querySelectorAll("#box");
}


function hoverBox(div)
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

function clearBox()
{
    for(const div of divs)
    {
        div.remove();
    }
}
