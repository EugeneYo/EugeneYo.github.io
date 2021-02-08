const love_btns = document.querySelectorAll(".love");

love_btns.forEach((love_btn) => {
  love_btn.addEventListener("mousedown", (e) => {
    love_btn.style.background = "#fff";
    love_btn.style.color = "#E7273F";
    love_btn.querySelector(".text").innerHTML = '<span class="grey-text">Sent to:</span> ~ Elaine ~';

    createHearts(love_btn.querySelector(".icon-container"));
  });

  love_btn.addEventListener("mouseup", (e) => {
    var num = randomNum();
    setTimeout(() => {
      love_btn.style.background = "#E7273F";
      love_btn.style.color = "#fff";
      document.querySelector("img").src = generatePic(num);
      love_btn.querySelector(".text").innerHTML = generateWords(num);
    }, 1200);
  });
});

function generateWords(num) {
  switch (num) {
    case 0:
      return '爱你么么哒 <i class="fas fa-redo"></i>';
    case 1:
      return '不离不弃 <i class="fas fa-redo"></i>';
    case 2:
      return '亲~~ <i class="fas fa-redo"></i>';
    case 3:
      return '再来一次！~ <i class="fas fa-redo"></i>';
    case 4:
      return '亲一下~ <i class="fas fa-redo"></i>';
    case 5:
      return '想你了~ <i class="fas fa-redo"></i>';
    case 6:
      return '抱抱~ <i class="fas fa-redo"></i>';
    case 7:
      return '嘿嘿~ <i class="fas fa-redo"></i>';
  }
}

function generatePic(num) {
  switch (num) {
    case 0:
      return "love/01.gif";
    case 1:
      return "love/02.gif";
    case 2:
      return "love/03.gif";
    case 3:
      return "love/04.gif";
    case 4:
      return "love/05.gif";
    case 5:
      return "love/06.gif";
    case 6:
      return "love/07.gif";
    case 7:
      return "love/08.gif";
  }
}
function randomNum() {
  return Math.floor(Math.random() * 8);
}

function createHearts(container) {
  // create 5 hearts
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const heart = document.createElement("span");
      heart.classList.add("heart");
      heart.innerHTML = '<i class="fas fa-heart"></i>';
      heart.style.left = Math.random() * 100 + "%";
      heart.style.top = Math.random() * 100 + "%";
      heart.style.fontSize = Math.random() * 20 + 5 + "px";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";
      container.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 3000);
    }, i * 100);
  }
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(".social-panel-container");

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});
