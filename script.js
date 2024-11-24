// 対象が画面に入った時にアニメーションする
let scrollAnimation = function () {
  let scrollAnimationElm = document.querySelectorAll(".scroll-up");
  let triggerMargin = 200;
  scrollAnimationElm.forEach(function (elm) {
    if (window.innerHeight > elm.getBoundingClientRect().top + triggerMargin) {
      elm.classList.add("on");
    }
  });

  // chart用アニメーション
  let scrollChartAnimationElm = document.querySelectorAll(".skill__chart-bar");
  scrollChartAnimationElm.forEach(function (elm) {
    if (window.innerHeight > elm.getBoundingClientRect().top) {
      elm.classList.add("skill__chart-animate");
    }
  });
};
window.addEventListener("scroll", scrollAnimation);

// メニューリンクをクリック時にナビゲーションを閉じる
function hideNav() {
  document.getElementById("menu-btn").checked = false;
}
