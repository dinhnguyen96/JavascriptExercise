const arr = [5,8,9,10,12,45];

function arrayDisplay(arr)
{
    for (let i = 0; i < arr.length;i++)
    {
       document.write(arr[i] + " ");
    }
    document.write("<br>");
}
function arrayReverse(arr)
{
    let start = 0, end = arr.length-1;

    while (start <= end)
    {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
document.write("Mảng ban đầu : " + "<br>");
arrayDisplay(arr);
document.write("Sau khi đảo ngược mảng : " + "<br>");
arrayReverse(arr);
arrayDisplay(arr);