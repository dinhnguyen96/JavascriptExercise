const arr = [];
function elementAdd()
{
    let element = +document.getElementById("elementadd").value;
    arr.push(element);
    document.getElementById("content").reset();
}

function arrayDisplay()
{
    let resultDisplay = document.getElementById("resultDisplay");

    for (let i = 0; i < arr.length;i++)
    {
       resultDisplay.innerHTML += "Element["+i+"] = " + arr[i] + "<br>";
    }
}