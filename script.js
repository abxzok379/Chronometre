










function startChrono(){
//***********************************************-- Déclaration des variables --

var z = 1000;
  for (let x = 0;x<1000;x++){
   var timeout = setTimeout(retour,z);
   z = z + 1000;
function retour(){
    document.querySelector("#chrono").innerHTML = x;
  }



}



//**************************************************
}




