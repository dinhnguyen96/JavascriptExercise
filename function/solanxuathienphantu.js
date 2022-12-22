const arr = ['a','b','5','2','1','2','2','a'];
function dispplayCount(charArray, k)
{
    let count = 0;
    for (let i = 0; i < charArray.length;i++)
    {
        if (charArray[i] === k)
        {
            count++;
        }
    }
    if (count === 0)
    {
        return -1;
    }
    return count;
}

function main()
{
    let input;
    do {
        input = prompt("Nhập ký tự bất ký:");
        if (input.length === 1)
        {
            break;
        }
    }
    while (input.length > 1 || input.length === 0);

    let result = dispplayCount(arr, input);

    if (result === -1)
    {
        alert("Ký tự này không tồn tại!");
    }
    else
    {
        alert("Ký tự này xuất hiện " + result + " lần");
    }
}
main();

