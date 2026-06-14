document.addEventListener("DOMContentLoaded", () => {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  document.querySelector(".toggle_btn").addEventListener("click", (e) => {
    e.preventDefault();

    const header = document.querySelector("#header");
    if (!header) return;
    // #headerにopenクラスが存在する場合
    if (header.classList.contains("open")) {
      // openクラスを削除
      // openクラスを削除すると、openクラスのCSSがはずれるため、
      // メニューが非表示になる
      header.classList.remove("open");

      // #headerにopenクラスが存在しない場合
    } else {
      // openクラスを追加
      // openクラスを追加すると、openクラスのCSSが適応されるため、
      // メニューが表示される
      header.classList.add("open");
    }

    // メニューが表示されている時に画面をクリックした場合
    document.querySelector("#mask").addEventListener("click", () => {
      // openクラスを削除して、メニューを閉じる
      header.classList.remove("open");
    });
  });
});
