function convertMetFoot()
{
   let valueSelected = document.getElementById("selectedValue").value;

   let numberValue = +document.getElementById("numberValue").value;

   let result;

   if (valueSelected === "m")
   {
        result = 0.375 * numberValue;
   }
   else
   {
       result = 3.729 * numberValue;
   }
   alert("Kết quả của giá trị sau khi chuyển đổi " + result);
}