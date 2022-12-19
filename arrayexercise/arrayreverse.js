
function arrayDisplay(arrayElement)
{
    for (let i = 0; i < arrayElement.length;i++)
    {
        document.write(arrayElement[i] + " ");
    }
    document.write("<br>");
}

function arrayReverse(arrayElement)
{
    let elementReverse = 0;

    let reverseArray = [];

    for (let i = arrayElement.length-1; i >= 0;i--)
    {
       reverseArray[elementReverse] = arrayElement[i];
       elementReverse++;
    }
    return reverseArray;
}
let arr = [-3,5,1,3,2,10];
document.write("Mảng ban đầu :" + "<br>");
arrayDisplay(arr);
document.write("Sau khi đảo ngược : " + "<br>");
let reverserArray = arrayReverse(arr);
document.write(reverserArray.join(" "));

