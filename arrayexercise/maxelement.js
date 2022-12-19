function maxElement(array)
{
    let max_element = arr[0];

    for (let i = 1; i < array.length; i++)
    {
        if (array[i] > max_element)
        {
            max_element = array[i];
        }
    }
    return max_element;
}

let arr = [-3, 5, 1, 3, 2, 10];

let max_element = maxElement(arr);

alert("Phần tử lớn nhất trong mảng là " + max_element);