function showMessage(){
  var number = parseInt(prompt("Moi ban nhap tuoi"));
  document.getElementById("content").innerHTML = "Tuổi của bạn là : " + number;
}
showMessage();