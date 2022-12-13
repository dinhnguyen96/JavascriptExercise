function showMessage()
{
    let message = prompt("Nhập thông tin: ");

    let showInfo = (message === "Employee")?"Hello":(message === "Director")?"Greeting":(message === "")?"No Login":"";

    alert(showInfo);
}
showMessage();