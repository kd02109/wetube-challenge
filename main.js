const $video = document.querySelector("video");
const $playBtn = document.querySelector("#playPauseBtn");
const $volumn = document.querySelector("#volume");
const $volumnRange = document.querySelector("#volumeRange");
const $currentTime = document.querySelector("#currentTime");
const $endTime = document.querySelector("#endTime");
const $timeLine = document.querySelector("#timeLine");
const $screen = document.querySelector("#screen");
const $videoBox = document.querySelector("#videoBox");
const $videoController = document.querySelector("#videoController");

let volumnValue = 0.5;

$video.volume = volumnValue;

let controlsTimeout = null;
let controllHide = null;

const playVideo = (event) => {
  if ($video.paused) {
    $video.play();
    $playBtn.className = "fas fa-pause";
  } else {
    $video.pause();
    $playBtn.className = "fas fa-play";
  }
};
const volumnBtn = (event) => {
  if ($video.muted) {
    $video.muted = false;
    $volumnRange.value = volumnValue;
    event.target.className = "fas fa-volume-up";
  } else {
    $video.muted = true;
    $volumnRange.value = 0;
    event.target.className = "fas fa-volume-mute";
  }
};
const handleVolumnRange = (event) => {
  const {
    target: { value },
  } = event;
  if ($video.muted) {
    $video.muted = false;
    $volumn.className = "fas fa-volume-mute";
  }
  if (value == 0) {
    $volumn.className = "fas fa-volume-off";
  } else {
    $volumn.className = "fas fa-volume-up";
  }
  $video.volume = volumnValue = value;
};

const formatTime = (seconds) => {
  return new Date(seconds * 1000).toISOString().substring(14, 19);
};

const handleLoadedMetadata = () => {
  $endTime.textContent = formatTime(Math.floor($video.duration));
  $timeLine.max = Math.floor($video.duration);
};

const handleTimeUpdate = () => {
  $currentTime.textContent = formatTime(Math.floor($video.currentTime));
  $timeLine.value = Math.floor($video.currentTime);
};

const handleTimeLine = (event) => {
  const {
    target: { value },
  } = event;
  $video.currentTime = value;
};

const handleScreen = () => {
  const screenCheck = document.fullscreenElement;
  if (!screenCheck) {
    $videoBox.requestFullscreen();
    $screen.className = "fas fa-compress";
  } else {
    document.exitFullscreen();
    $screen.className = "fas fa-expand";
  }
};

const hideController = () => $videoController.classList.remove("showing");

const handleMousemove = () => {
  if (controlsTimeout) {
    clearTimeout(controlsTimeout);
    controlsTimeout = null;
  }
  if (controllHide) {
    clearTimeout(controllHide);
    controllHide = null;
  }
  $videoController.classList.add("showing");
  controllHide = setTimeout(hideController, 3000);
};

const handleMouseleave = () => {
  controlsTimeout = setTimeout(hideController, 3000);
};

//클릭시 비디오 plav
const clickPlay = () => {
  playVideo();
};

const handleVideoKey = (event) => {
  const { keyCode } = event;
  console.log(keyCode);
  if (keyCode === 32) {
    playVideo();
  }
  if (keyCode === 70) {
    handleScreen();
  }
};

$playBtn.addEventListener("click", playVideo);
$volumn.addEventListener("click", volumnBtn);
$volumnRange.addEventListener("input", handleVolumnRange);
$video.addEventListener("loadedmetadata", handleLoadedMetadata);
$timeLine.addEventListener("input", handleTimeLine);
$video.addEventListener("timeupdate", handleTimeUpdate);
$videoBox.addEventListener("mousemove", handleMousemove);
$videoBox.addEventListener("mouseleave", handleMouseleave);
$video.addEventListener("click", clickPlay);
document.addEventListener("keydown", handleVideoKey);
$screen.addEventListener("click", handleScreen);
