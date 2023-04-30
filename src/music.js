const audio = document.getElementsByTagName("audio")[0];
const playButton = document.querySelector(".play");
const stopButton = document.querySelector(".stop");

playButton.addEventListener("click", () => {
  audio.play();
});

stopButton.addEventListener("click", () => {
  audio.pause();
});
