function multiples()
{
    var numberOne = +prompt("Nhập số thứ nhất");

    var numberTwo = +prompt("Nhập số thứ hai");

    if (numberOne < numberTwo)
    {
        alert("Số thứ nhất  phải lớn hơn hoặc bằng số thứ hai");
    }
    else
    {
        if (numberOne % numberTwo === 0)
        {
            alert(numberOne + " " + "là bội số của"+ " "+ numberTwo);
        }
        else
        {
            alert(numberOne + " " + "không phải bội số của"+ " "+ numberTwo);
        }
    }



}
multiples();



