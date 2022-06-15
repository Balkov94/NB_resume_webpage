function activating_Typing_Sound() {
     let wavingHandContainer = document.getElementById("waving_hand_container");
     let wavingHand = document.getElementById("waving_hand");

     let typingContainer = document.getElementById("welcome_container");
     typingContainer.style.display = "none";
     wavingHand.addEventListener("click", function () {
          wavingHandContainer.style.display = "none";
          typingAnimation();
     })



}
activating_Typing_Sound();    