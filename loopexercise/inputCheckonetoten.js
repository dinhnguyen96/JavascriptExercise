function inputCheckonetoten()
{
    let input;
    let value = null;
    do{
        input = parseInt(prompt("Nhập số trong khoảng từ 1 đén 10"));
        if (input <= 10 && input > 0)
        {
            value = input;
            break;
        }
    }
    while (input > 10 || input <= 0);

    alert(value);

}
inputCheckonetoten();