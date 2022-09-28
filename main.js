const $recordBtn = document.querySelector("#recordBtn");
const $audio = document.querySelector("#audio");
let stream = null;
let recorder = null;
let audio = null;

const recordFunction = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false,
  });
  $audio.srcObject = stream;
  $audio.play();
};
recordFunction();

const handleDownload = () => {
  //fake Link 만들기
  const a = document.createElement("a");
  a.href = audio;
  a.download = "MY AUDIO.mp4";
  document.body.appendChild(a);
  a.click();
};

const handleStop = () => {
  $recordBtn.textContent = "DOWNLOAD RECORDING";
  $recordBtn.removeEventListener("click", handleStop);
  $recordBtn.addEventListener("click", handleDownload);
  recorder.stop();
};

const handleStart = () => {
  $recordBtn.textContent = "STOP RECORDING";

  recorder = new MediaRecorder(stream);
  console.log(recorder);
  recorder.ondataavailable = (e) => {
    console.log(e.data);
    //파일을 브라우저의 메모리상에 남아있다. 즉 메모리 누수를 막기위해 reboke를 활용
    audio = URL.createObjectURL(e.data);
    console.log(audio);
    $audio.srcObject = null;
    $audio.src = audio;
    $audio.play();
  };
  //녹화시작
  recorder.start();
  console.log(recorder);

  $recordBtn.removeEventListener("click", handleStart);
  $recordBtn.addEventListener("click", handleStop);
};

$recordBtn.addEventListener("click", handleStart);
