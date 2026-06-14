document.addEventListener("DOMContentLoaded", () => {
  /*=================================================
  ハンバーガーメニュー
  解説は、「中級編：ストアサイト（インテリア）」参照
  ===================================================*/
  document.querySelector(".hamburger").addEventListener("click", () => {
    const header = document.querySelector("#header");
    if (header) {
      header.classList.toggle("open");
    }

    // #maskのエリアをクリックした時にメニューを閉じる
    const mask = document.querySelector("#mask");
    if (mask) {
      mask.addEventListener("click", (e) => {
        e.preventDefault();
        header.classList.remove("open");
      });
    }

    // リンクをクリックした時にメニューを閉じる
    const anchors = document.querySelectorAll("#navi a");
    if (anchors) {
      anchors.forEach((a) => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          header.classList.remove("open");
        });
      });
    }
  });

  /*=================================================
  トップに戻る
  ===================================================*/
  const pageTop = document.querySelector("#to-top");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  pageTop.hidden = true;

  // スクロールイベント（スクロールされた際に実行）
  window.addEventListener("scroll", () => {
    // スクロール位置が700pxを超えた場合
    if (window.scrollY > 700) {
      // トップに戻るボタンを表示する
      // ※フェードインではなくインスタントな切り替え
      pageTop.hidden = false;

      // スクロール位置が700px未満の場合
    } else if (window.scrollY < 700) {
      // トップに戻るボタンを非表示する
      // ※フェードアウトではなくインスタントな切り替え
      pageTop.hidden = true;
    }
  });

  // クリックイベント（ボタンがクリックされた際に実行）
  pageTop.addEventListener("click", (e) => {
    e.preventDefault();
    // ページトップへ移動
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
