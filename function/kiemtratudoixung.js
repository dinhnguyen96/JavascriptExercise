function symmetryCheck(s)
{
    let startCharactor = 0, endCharactor = s.length-1;

    while(startCharactor <= endCharactor)
    {
       let leftValue = s.charAt(startCharactor);
       let rightValue = s.charAt(endCharactor);
       if (leftValue !== rightValue)
       {
           return false;
       }
        startCharactor++;
        endCharactor--;
    }
    return true;
}
let check = symmetryCheck("motor");

if (check)
{
    alert("Chuỗi này là palindrome!");
}
else
{
    alert("Chuỗi này không phải là palindrome !");
}