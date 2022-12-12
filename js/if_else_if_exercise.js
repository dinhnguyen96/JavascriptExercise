function passwordCheck()
{
    let checkPassword = prompt("Nhập mật khẩu");

    if (checkPassword === "TheMaster")
    {
        alert("Welcome!");
    }
    else if (checkPassword === "null")
    {
        alert("Canceled!");
    }
    else
    {
        alert("I don't know you!");
    }
}
passwordCheck();