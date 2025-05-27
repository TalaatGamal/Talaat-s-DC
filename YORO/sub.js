


document.addEventListener("DOMContentLoaded", function() {
  let intro = document.getElementById("welcome");
  

  intro.style.cssText=`
  opacity: 0;
  width: 0vw;
  `;

  setTimeout(() => {
    intro.style.cssText=`
  opacity: 1;
  width: 100vw;
  `;
  }, 10);
  
  
});
