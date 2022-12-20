function convertUpperLower()
{
    let value = prompt("Nhập 1 giá trị :").trim();
    let convertAfter = "";

    for (let i = 0; i < value.length;i++)
    {
        let convertValue = value.charAt(i);
        if (convertValue === ' ')
        {
            convertAfter += " ";
        }
        else if (convertValue === convertValue.toUpperCase())
        {
            convertAfter += convertValue.toLowerCase();
        }
        else
        {
            convertAfter += convertValue.toUpperCase();
        }
    }
    alert(convertAfter);
}
convertUpperLower();
