// const nav = document.querySelector(".js-nav");

// nav.addEventListener("click", handleNavClick);

// function handleNavClick(event) {
//   event.preventDefault();
  
//   const target = event.target;
// //   console.log("event target: ", target); // посмотрите что тут

//   // Проверяем тип узла, если не ссылка выходим из функции
//   if (target.nodeName !== "A") return;

//   setActiveLink(target);
// }

// function setActiveLink(nextActiveLink) {
//   const currentActiveLink = nav.querySelector("a.active");

//   if (currentActiveLink) {
//     currentActiveLink.classList.remove("active");
//   }

//   nextActiveLink.classList.add("active");
// }

// const correctAnswer = document.querySelector('#correctanswer');

// correctAnswer.addEventListener('click', counter)

// let count = 0;

// function counter(){
//     count += 1
//     console.log(count)
// }

// function doCount() {
//     let count = document.getElementById('count');
//     count.innerHTML = +count.innerHTML + 1;
// }

// const person = {
//     count
// }

// window.localStorage.setItem('user', JSON.stringify(person));

let clicks = 0;

function initiateClicks() {
    var clickStr = localStorage.getItem("clicks");
    if(clickStr == undefined){
        localStorage.setItem("clicks", 0);
        clicks = 0;
    }else{
        clicks = parseInt(clickStr);   
    }
    document.getElementById("clicks").innerHTML = clicks;
}

function doClick() {
    clicks += 1;
    localStorage.setItem("clicks", clicks);
    document.getElementById("clicks").innerHTML = clicks;
}

document.getElementById("clickButton").onclick = doClick;
initiateClicks();