/*  HELLO EVERYONE WELCOME TO THIS MY PROJECT OF HTML PART HERE CREAT TO ALL BUTTOM FUNCTION AND HERE 
CAN SEE HOW TO CREATE AND YOU CAN CONTACT ANY PROJECT MAKE AND ANT DESIGN CREATE OF CREATE PROJECT FOR CONTEACT ME 
MY NAME IS MD SHAHNSHAH FROM BIHAR AND I HAVE DOE IT AND NOW READY FOR NIT PAPER AND I'M GOOD PROGRAM ANY PROBLEM YOU CONTACT ME GAMIL
SO GMAIL THIS GMAI LANY PROJECT CREATE mdshahnshah855113@gmail.com  AND HTML,CSS,JAVASCRIPT KE ALAWA JAVA,PYTHON REACT ETC. 
*/




let circle = document.querySelector(".color-option");

circle.addEventListener("click", (e)=>{
  let target = e.target;
  if(target.classList.contains("circle")){
    circle.querySelector(".active").classList.remove("active");
    target.classList.add("active");
    document.querySelector(".main-images .active").classList.remove("active");
    document.querySelector(`.main-images .${target.id}`).classList.add("active");
  }
});



/*  GITHUB: https://github.com/shahanshah786
 instagram: https://instagram.com/shahnshah_123
 facebook: https://facebook.com/Shahnshahking (Shahnshah King)
 gamil:    mdshahnshah855113@gmail.com 
 */
