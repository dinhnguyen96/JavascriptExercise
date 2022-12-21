function primeNumberCheck(primeNumber)
{
    if (primeNumber < 2) return false;
    if (primeNumber === 2) return  true;

    for (let i = 2; i <= primeNumber/2;i++)
    {
        if (primeNumber % i === 0)
        {
            return false;
        }
    }
    return true;
}
function main()
{
    for (let i = 0; i < 10000;i++)
    {
        if (primeNumberCheck(i))
        {
            document.write(i + "<br>");
        }
    }
}
main();

