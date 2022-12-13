function tinhTong()
{
     let numberOne = +document.getElementById("numberOne").value;
     let numberTwo = + document.getElementById("numberTwo").value;
     let sum = numberOne + numberTwo;
     let showInfo = sum < 4 ? "Below" : "Over";
     alert(showInfo);
}