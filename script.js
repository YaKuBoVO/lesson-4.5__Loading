"use strict"

const indexFile = document.querySelectorAll(".index");

for(let i = 0; i < indexFile.length; i++) {
   const timeOut = setTimeout(myGood, 2500);
      function myGood() {
      indexFile[i].style.color = "red";
   }
   const timeOut2 = setTimeout(myGood2, 5000);
      function myGood2() {
      indexFile[i].style.color = "green";
   }
    const timeOut3 = setTimeout(myGood3, 7500);
      function myGood3() {
      indexFile[i].style.color = "orange";
   }
      const timeOut4 = setTimeout(myGood4, 10000);
      function myGood4() {
      indexFile[i].style.color = "gray";
   }
   const timeOut5 = setTimeout(myGood5, 12500);
      function myGood5() {
      indexFile[i].style.color = "black";
   }
}
