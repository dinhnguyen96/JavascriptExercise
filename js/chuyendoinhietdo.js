function temConvert()
{
    let convertValue = parseInt(prompt("Nhập giá trị độ C :"));
    let convertAfter = ((9*convertValue)/5)+32;
    document.getElementById("result").innerHTML = convertAfter.toString()+"F";
}
temConvert();