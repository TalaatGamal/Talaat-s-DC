



// // window
// let in_app = document.getElementById("in-app")





// const elements = document.querySelectorAll('.app');

//   elements.forEach(function(element) {
//     element.addEventListener('click', function() {
      


//        const appElement = document.getElementById("app");

//   // نقرأ قيمة aria-details
//   const appName = appElement.getAttribute("aria-details");

//   // نحطها في العنصر المستهدف
//   const displayElement = document.getElementById("app_name");
//   if (displayElement) {
//     displayElement.textContent = appName;
//   }


//         in_app.style.display="flex"
        
//         setTimeout(() => {
//           in_app.style.opacity="1"
//           in_app.style.width="95vw"
//           in_app.style.height="85vh"
//         }, 1);
      
//     });
//   });
















// النافذة اللي هتفتح
let in_app = document.getElementById("in-app");

// كل العناصر اللي ليها كلاس app
const elements = document.querySelectorAll('.app');

elements.forEach(function(element) {
  element.addEventListener('click', function() {
    
    // نقرأ قيمة aria-details من نفس العنصر اللي اتضغط عليه
    const appName = element.getAttribute("aria-details");

    // نعرض القيمة داخل العنصر اللي id بتاعه app_name
    const displayElement = document.getElementById("app_name");
    if (displayElement) {
      displayElement.textContent = appName;
    }

    // نفتح نافذة in-app مع تأثير
    in_app.style.display = "flex";
    
    setTimeout(() => {
      in_app.style.opacity = "1";
      in_app.style.width = "95vw";
      in_app.style.height = "85vh";
    }, 1);
  });
});



  

let exit_window = document.getElementById("exit-window")

exit_window.addEventListener('click', function(){
    
    in_app.style.opacity = "0";
      in_app.style.width = "0vw";
      in_app.style.height = "0vh";
})