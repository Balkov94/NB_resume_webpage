
// waving hand => listener for click
// after click => activate typing animation + sound 
// all this for CHROME doc/ hack autoplay on sounds
function activating_Typing_Sound() {
     let wavingHandContainer = document.getElementById("waving_hand_container");
     let wavingHand = document.getElementById("waving_hand");

     let audio = document.getElementById("audio");
     // disable scroll before loaded all animations
     let disablleMouseScroll = function () { window.scrollTo(0, 0); };
     window.addEventListener("scroll", disablleMouseScroll);

     let typingContainer = document.getElementById("welcome_container");
     typingContainer.style.display = "none";
     wavingHand.addEventListener("click", function () {
          audio.muted = false;
          audio.play();
          wavingHandContainer.style.display = "none";
          typingAnimation(disablleMouseScroll);
          
     })
}

activating_Typing_Sound();

function typingAnimation(disableScrollFunc) {
     // activate sound

     let typingContainer = document.getElementById("welcome_container");
     typingContainer.style.height = "100vh";
     typingContainer.style.display = "flex";

     // ARTICLE css initional state of OPACITY is 0
     let article = document.getElementsByTagName("article")[0];
    
     setTimeout(() => {
          typingContainer.style.transition = " all 800ms linear";
          typingContainer.style.height = "40vh";
          article.style.transition = "visibility 0s, opacity 1.0s linear";
          article.style.opacity = "1";
          // remove disable scroll -> 1.5s delay after animations
          setTimeout(() => {
               window.removeEventListener("scroll", disableScrollFunc);
               
          }, 1500);

     }, 8000);

}
