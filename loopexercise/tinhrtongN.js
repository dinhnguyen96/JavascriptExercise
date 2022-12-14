function sumOfN ()
{
    let n;
    do{
         n = parseInt(prompt("Nhập số : "));
         if (n > 0)
         {
             break;
         }
    }
    while (n <= 0);

    let sum = 0;
    for (let i = 0; i < n; i++)
    {
        sum+= i;
    }
    alert("Sum = " + sum);
}
sumOfN();