const value = parseInt(prompt("Nhập giá trị : "));
const arr = [20,33,11,-59,33];
const position = exitinarray(arr);
function exitinarray(arrayElement)
{
    for (let i = 0; i < arrayElement.length;i++) {
        if (arrayElement[i] === value) {
            return i;
        }
    }
    return -1;
}
if (position === -1)
{
    alert("Không tìm thấy vị trí");
}
else
{
    alert("Vị trí của phần tử "+value+" là " +position );
}
