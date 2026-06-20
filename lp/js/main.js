document.addEventListener("DOMContentLoaded", () => {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  document.querySelector(".hamburger").addEventListener("click", (e) => {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });
  // メニューのリンクをクリックした時
  document.querySelectorAll("#navi a").forEach((a) => {
    a.addEventListener("click", (e) => {
      // ハンバーガーメニューの共通処理を呼び出す
      hamburger();
    });
  });
});

/*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
// BBBが選ばれる理由（スライド左）
const leftSlide = document.querySelector(".inview-slide-left");
const leftSlideObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 要素が表示されたらslide-leftクラスを追加
      leftSlide.classList.add("slide-left");
      leftSlideObserver.unobserve(entry.target);
    }
  });
});
leftSlideObserver.observe(leftSlide);

// BBBが選ばれる理由（スライド右）
const rightSlide = document.querySelector(".inview-slide-right");
const rightSlideObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 要素が表示されたらslide-leftクラスを追加
      rightSlide.classList.add("slide-right");
      rightSlideObserver.unobserve(entry.target);
    }
  });
});
rightSlideObserver.observe(rightSlide);

// 受講生の声（ふきだし）
document.querySelectorAll(".inview-balloon").forEach((balloon) => {
  const balloonObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        balloon.classList.add("balloon");
        balloonObserver.unobserve(entry.target);
      }
    });
  });
  balloonObserver.observe(balloon);
});

/*=================================================
ハンバーガ―メニュー共通処理
===================================================*/
// ハンバーガーメニューをクリックした時とメニュー内のリンクをクリックした時の
// 処理が同じなので処理を共通化する
function hamburger() {
  // toggleを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
  // 存在しない場合を追加する処理を自動で行ってくれる
  const hamburger = document.querySelector(".hamburger");
  hamburger.classList.toggle("active");

  const navi = document.querySelector("#navi");
  if (hamburger.classList.contains("active")) {
    // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
    navi.classList.add("active");
  } else {
    // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
    navi.classList.remove("active");
  }
}
