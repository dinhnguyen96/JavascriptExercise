const starArrayOne = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe','Regulus'];
const starArrayTwo = ['Ursa Minor', 'Tarurus', 'Cygnus','Lyra', 'Aquila', 'Ursa Major','Leo'];
function starSearch(starSearch)
{
   for (let i = 0; i < starArrayOne.length;i++)
   {
       if (starArrayOne[i] === starSearch)
       {
           return i;
       }
   }
   return -1;
}

function constellationSearch(value)
{
    let starIndex = starSearch(value);

    if (starIndex === -1)
    {
        return null;
    }
    else
    {
        return starArrayTwo[starIndex];
    }
}

function serachResult(starSearch)
{
    let resultSearch = constellationSearch(starSearch);

    if (resultSearch === null)
    {
        alert("Không tìm thấy kết quả !");
    }
    else
    {
        alert(resultSearch);
    }

}






