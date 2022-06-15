(function () {
     let laptopScreen = document.getElementById("screen");
     let acordeonButtons = document.getElementsByClassName("btn btn-link");

     // all videos src
     let glovo = "assets/projects_video_files/glVideo.mp4";
     let cinema = "assets/projects_video_files/movies_fetching_project_video.mp4";
     let recipes = "assets/projects_video_files/cooking_webpage_video.mp4";
     let game2048 = "assets/projects_video_files/2048_game_video.mp4";
     let simpleBusiness = "assets/projects_video_files/friend_project_video.mp4";
     let videoSrc = [glovo, cinema, recipes, game2048, simpleBusiness];

     for (let i = 0; i < acordeonButtons.length; i++) {
          acordeonButtons[i].addEventListener("click", function () {
               laptopScreen.src = videoSrc[i];
               // laptopScreen.play();
          })
     }
})()