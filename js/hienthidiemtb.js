function tinhTong()
{
    let bioScore = +document.getElementById("bioScore").value;
    let chemScore = +document.getElementById("chemScore").value;
    let phyScore = +document.getElementById("phyScore").value;

    if (bioScore < 0 || chemScore < 0 || phyScore < 0)
    {
        alert("Điểm môn học không được số âm");
        document.getElementById("content").reset();
    }
    else
    {
        let sum = bioScore + chemScore + phyScore;
        let averageScore = sum / 3;
        document.getElementById("sum").value = sum.toString();
        document.getElementById("averageScore").value = averageScore.toString();
    }
}