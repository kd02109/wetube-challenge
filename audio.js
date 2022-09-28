const $button = document.querySelector("#recordBtn");
const $div = document.querySelector("#audioBox");
const $audio = document.createElement("audio");
const h1 = document.createElement("h1");
let stream = null;
let audio = null;
let audioData = null;

const handleDownload = () => {
  const a = document.createElement("a");
  a.href = audioData;
  a.download = "MY RECORDIN.mp4";
  document.body.appendChild(a);
  a.click();
  $audio.remove();
  h1.remove();
  $button.textContent = "Start Recording";
  $button.removeEventListener("click", handleDownload);
  $button.addEventListener("click", handleStart);
};

const handleStart = async () => {
  //컴퓨터내의 디바이스 접근 권한 가지기
  stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false,
  });
  $audio.srcObject = stream;
  $audio.controls = true;
  $audio.play();
  $div.appendChild($audio);
  $button.disabled = true;
  $button.textContent = "RECORDING NOW";
  h1.textContent = "Record for 5 seconds🧨🧨 ";
  $div.appendChild(h1);

  // MediaRecorder로 녹화 기능 가져오기
  audio = new MediaRecorder(stream);
  // 녹화 끝난 후에 실행!
  audio.ondataavailable = (event) => {
    audioData = URL.createObjectURL(event.data);
    $audio.scrObject = null;
    $audio.src = audioData;
    if (audioData !== null) {
      $button.disabled = false;
      $button.textContent = "DOWNLOAD";
      h1.textContent = "NOW YOU CAN DOWNLOAD AUDIO FILE😸🚀";
      $button.removeEventListener("click", handleStart);
      $button.addEventListener("click", handleDownload);
    }
  };
  //녹화 시작
  audio.start();
  setTimeout(() => {
    audio.stop();
  }, 5000);
  //녹화 끝!
};

$button.addEventListener("click", handleStart);
