const box = document.querySelector(".container");
const btn = document.querySelector("#btn");
let rainbow = false;

displayBox(16);

function displayBox(boxSize)
{
    for(let i = 1; i <= (boxSize*boxSize);i++)
    {
        const div = document.createElement("div");
        div.style.width = `${480/boxSize}px`;
        div.style.height = "auto";
        div.addEventListener("mousemove", hoverBox);
        box.appendChild(div);
        
    }
}


function hoverBox(div)
{
        this.style.backgroundColor = "red";
}