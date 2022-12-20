function addcharevenelement()
{
    let value = prompt("Nhập vào 1 giá trị: ");

    let arrayNew = [];

    if (value.length === 1)
    {
        arrayNew.push(value);
    }
    else
    {
        let inputArray = value.split("");

        let count = 0;

        for (let i = 0; i < inputArray.length;i++)
        {
            let oneValue = parseInt(inputArray[i]);
            if (oneValue % 2 === 0)
            {
                count++;

                if (count > 1)
                {
                    arrayNew.push("-");
                }
            }
            else
            {
                count = 0;
            }
            arrayNew.push(oneValue);
        }
    }
    return arrayNew.join("");
}

let result = addcharevenelement();

alert(result);