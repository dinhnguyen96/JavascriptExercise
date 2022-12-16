function kiemtrasonguyento(k)
{
    if (k <= 1) return false;
    if (k == 2) return true;
    for (let i = 2; i <= k/2; i++)
    {
        if (k % i == 0)
        {
            return false;
        }
    }
    return true;
}
function hienthisonguyento()
{
   let numbers = parseInt(prompt("Nhập số lượng số nguyên tố : "));
   let result = "";
   let count = 0,songuyento = 0;

   while (count < numbers)
   {
       if (kiemtrasonguyento(songuyento))
       {
           result += songuyento;
           count++;
       }
       songuyento++;
   }
   if (result !== '')
   {
       alert(result + " ");
   }
}
hienthisonguyento();