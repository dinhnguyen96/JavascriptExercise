function noiphantu(array)
{
   let convertAfter = array.toString();

   return '"'+convertAfter+'"';
}

let arr = ["Red", "Green", "White", "Black"];

let result = noiphantu(arr);

alert(result);