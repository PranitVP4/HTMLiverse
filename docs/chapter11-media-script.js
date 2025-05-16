// chapter11-media-script.js

document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.getElementById("audio-player");
  const videoPlayer = document.getElementById("video-player");

  const audioStatus = document.getElementById("audio-status");
  const videoStatus = document.getElementById("video-status");

  audioPlayer.addEventListener("play", () => {
    audioStatus.textContent = "🎵 Audio is playing...";
  });

  audioPlayer.addEventListener("pause", () => {
    audioStatus.textContent = "⏸️ Audio is paused.";
  });

  videoPlayer.addEventListener("play", () => {
    videoStatus.textContent = "🎬 Video is playing...";
  });

  videoPlayer.addEventListener("pause", () => {
    videoStatus.textContent = "⏸️ Video is paused.";
  });

  videoPlayer.addEventListener("ended", () => {
    videoStatus.textContent = "✅ Video finished!";
  });

  audioPlayer.addEventListener("ended", () => {
    audioStatus.textContent = "✅ Audio finished!";
  });
});
