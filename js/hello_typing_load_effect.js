(function () {
     //     keyboard audio offect after load
     // let audio = new Audio("./assets/sound-effects/keyBoardSound.m4a");
     let audio = document.getElementsByTagName("audio")[0];
     // window.addEventListener("load", () => {
     //      audio.muted = false;
     //      audio.autoplay = true;
     //      audio.currentTime = 0.0;
     //      audio.play();


     // });

     window.onload = function() {
          audio.play();
      }



     let typingContainer = document.getElementById("wellcome_container");
     typingContainer.style.height = "100vh";


     // ARTICLE css initional state of OPACITY is 0
     let article = document.getElementsByTagName("article")[0];
     // disable scroll before article appear
     let disablleMouseScroll = function () { window.scrollTo(0, 0); };
     window.addEventListener("scroll", disablleMouseScroll);

     setTimeout(() => {
          typingContainer.style.transition = " all 800ms linear";
          typingContainer.style.height = "40vh";
          article.style.transition = "visibility 0s, opacity 1.0s linear";
          article.style.opacity = "1";
          // remove disable scroll
          window.removeEventListener("scroll", disablleMouseScroll);

     }, 8000);




})()