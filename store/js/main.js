document.addEventListener("DOMContentLoaded", () => {
  /*=================================================
    スムーススクロール
    ===================================================*/
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    // ページ内のリンクをクリックした時に動作する
    a.addEventListener("click", (e) => {
      e.preventDefault();

      // リンクを取得
      const href = a.getAttribute("href");

      // ジャンプ先のid名をセット
      const target = document.querySelector(
        href === "#" || href === "" ? "html" : href,
      );

      if (target) {
        // トップからジャンプ先の要素までの距離を取得
        const position = target.offsetTop;

        // scrollToでスムーススクロールを行う
        // ※秒数の指定はできない
        window.scrollTo({
          top: position,
          behavior: "smooth",
        });
      }
    });
  });
});
