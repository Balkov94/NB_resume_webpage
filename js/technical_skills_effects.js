(function () {
     let allLogosP = document.querySelectorAll(".logo p");
     let allLogos = document.querySelectorAll(".logo img");

     for (let i = 0; i < allLogos.length; i++) {
          allLogos[i].addEventListener("mouseover", function () {
               allLogosP[i].className = "flickerElement";
          })
          allLogos[i].addEventListener("mouseleave", function () {
               setTimeout(() => {
                    allLogosP[i].className = "normalElement";

               }, 2000);
          })
     }

})()