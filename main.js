




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

    audio.play();
      // setTimeout(() => {
      //   audio.play();
      // }, 5000);
  });
}




function checkPassword() {
      const coda = "Talaat";
      const code = "2486";
      const userVa = document.getElementById("user-div").value;
      const userInput = document.getElementById("pass-div").value;

      // const message = "Hello Sir !! Welcome to This App";
      // const utterance = new SpeechSynthesisUtterance(message);
      // utterance.lang = "en-US";
      // window.speechSynthesis.speak(utterance);

      if (userInput === code && userVa === coda) {
          // document.getElementById("out").style.height="100vh"
          document.getElementById("out").style.opacity="1"
          document.getElementById("out").style.width="100vw"
          setTimeout(() => {
            document.getElementById("out").style.borderRadius="0px"
          }, 800);
          setTimeout(() => {
              audio.pause();
          localStorage.removeItem("hasSpoken");
          window.location.href="YORO/index.html"
          }, 900);
        // audio.currentTime = 0;
      }

    }











// let contact_btn = document.getElementById("contact")
// let air_contact = document.getElementById("air-contact")

//     if (contact_btn) {
//     contact_btn.addEventListener("click", function() {
    
//       air_contact.style.cssText=`
//         width: 90vw;
//           padding: 20px;
//             opacity: 1;
//       `
    
//   });
// }








let contact_btn = document.getElementById("contact");
let air_contact = document.getElementById("air-contact");

if (contact_btn) {
  contact_btn.addEventListener("click", function () {
    // لو العنصر ظاهر
    if (air_contact.style.opacity === "1") {
      air_contact.style.cssText = `
        width: 0;
        padding: 0;
        opacity: 0;
      `;
    } 
    else {
      air_contact.style.cssText = `
        width: 95vw;
        padding: 20px;
        opacity: 1;
      `;
    }
  });
}
