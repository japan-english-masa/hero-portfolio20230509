'use strict';

// let once = false;
// 	window.addEventListener('scroll', function () {
	
// 		// ターゲットの画面トップからの距離
// 		let target = document.querySelector('.fadeIn2sSelector1');
// 		let target_position = target.getBoundingClientRect().top;
		
// 		// 画面トップからの距離から画面の高さより小さければ実行する
// 			if (target_position <= window.innerHeight && once !== true) {
// 				once = true;
//             // target.classList.remove("NONE");
//             // target.classList.add("fadeIn2s");
//             target.classList.add("neonBlue");
// 			}
// 	});

const welcome = document.getElementById("welcome");
const clickHere = document.getElementById("click-here");
const portfolio = document.getElementById("portfolio-list-box");
const resetBtn = document.getElementById("reset-local-strage-btn");

clickHere.addEventListener("mouseenter",()=>{
   clickHere.classList.toggle("neon-orange");
})
clickHere.addEventListener("mouseleave",()=>{
   clickHere.classList.toggle("neon-orange");
})


let clickOnce = 0;  // 一度でもclick here...を押していれば最初から表示される.
if(localStorage.getItem("clickOnce") === null || 0){
   clickHere.addEventListener("click",()=>{
      clickOnce++;
      localStorage.setItem("clickOnce", clickOnce);
      clickHere.classList.add("disappear-animation");

      setTimeout(()=>{
         clickHere.classList.add("display-none");
      }, 1750)  // 1500+250ms  250は緩衝

      setTimeout(()=>{
         welcome.classList.add("welcome-underbar");
         portfolio.classList.remove("opacity0")
         portfolio.classList.add("fadeIn2s");
         portfolio.classList.add("neon-orange-small");
      },2000)  // 1500+250+250ms
})
}else{
   clickHere.classList.add("display-none");
   welcome.classList.add("welcome-underbar");
   portfolio.classList.remove("opacity0")
   portfolio.classList.add("fadeIn2s");
   portfolio.classList.add("neon-orange-small");  //どっちの色がいいか数人に聞く！
   // portfolio.classList.add("neon-blue-small");  

   // resetBtn.classList.remove("displayNone");  //resetBtnの表示
   // resetBtn.addEventListener("click", ()=>{
   // localStorage.removeItem("clickOnce");
   // })
   
}

window.onload = function(){
if(clickOnce === 1){
      window.location.hash = "welcome"; //画面の開始位置の設定
   }
};






