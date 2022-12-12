function userCheck() {
    let checkUsername = prompt("Nhập tên người dùng:");

    if (checkUsername === "Admin")
    {
        let checkPassword = prompt("Nhập mật khẩu: ");
        if (checkPassword === "TheMaster")
        {
           alert("Welcome!");
        }
        else if (checkPassword === null) {
            alert("Canceled!");
        }
        else {
            alert("Wrong password!");
        }
    }
    else if (checkUsername == null)
    {
        alert("Canceled!");
    }
    else
    {
        alert("I don't know you!");
    }
}
userCheck();