




let input = document.getElementById("pass-div")
let audio = document.getElementById("my-audio")
let btn = document.getElementById("btn")

if (input) {
    input.addEventListener("click", function() {

      

      const hasSpoken = sessionStorage.getItem("hasSpoken");

  if (!hasSpoken) {
    const message = "Hello Sir !! Welcome to The Data Center App";
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);

    sessionStorage.setItem("hasSpoken", "true");
  }

      setTimeout(() => {
        audio.play();
      }, 5000);
  });
}




function checkPassword() {
      const code = "2486";
      const userInput = document.getElementById("pass-div").value;

      // const message = "Hello Sir !! Welcome to This App";
      // const utterance = new SpeechSynthesisUtterance(message);
      // utterance.lang = "en-US";
      // window.speechSynthesis.speak(utterance);

      if (userInput === code) {
          audio.pause();
          localStorage.removeItem("hasSpoken");

        // audio.currentTime = 0;
      }
    }