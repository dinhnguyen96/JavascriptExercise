function inputInfo()
{
    let info;
    let sum = 0;
    do{
       info = parseInt(prompt("Nhập số : "));
       if (info === -1)
       {
           break;
       }
       sum += info;
    }
    while(info !== -1);

    alert(sum);
}
inputInfo();