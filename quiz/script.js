//Pour le formulaire 1
function getInputValue(){

  //Cration des darlay timeout
  var delayInMilliseconds = 1000; //1 second

  setTimeout(function() {
    //your code to be executed after 1 second
    var danger = document.getElementById('alert-danger').style.display
    var success = document.getElementById('alert-success').style.display
  }, delayInMilliseconds);


  var name = document.getElementById("name").value
  if (name == "") {
    danger = 'block'
    document.getElementById('form2').style.display = 'none'
    document.getElementById('form1').style.display = 'block'
  }else {
    console.log(name)
    success = 'block'
    document.getElementById('form2').style.display = 'block'
    document.getElementById('form1').style.display = 'none'
  }
}


//Pour le formulaire 2
function getInputValue2(){

  var check1 = document.getElementById("flexRadio1").checked;
  var check2 = document.getElementById("flexRadio2").checked

  if (check1 == true || check2 == true) {
    success = 'block'
  }else {
    danger = 'block'
  }

}
