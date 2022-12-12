function tinhChuvi()
{
   let radius = +document.getElementById("radius").value;
   let perimeter = 2 * radius * 3.14;
   document.getElementById("perimeter").value = perimeter.toString();
}
function tinhDientich()
{
    let radius = +document.getElementById("radius").value;
    let area = Math.pow(radius,2) * 3.14;
    document.getElementById("area").value = area.toString();
}