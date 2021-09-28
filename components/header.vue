<template>
  <header class="header">
    <!-- left -->
    <div class="header_left">
      <p class="header_left_item">
        <!-- target="_blank"で別タブで開く、rel="noopener noreferrer"はセキュリティ対策 -->
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://about.google/?fg=1&utm_source=google-JP&utm_medium=referral&utm_campaign=hp-header"
        >
          Googleについて</a
        >
      </p>
      <p class="header_left_item">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://store.google.com/JP?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=ja-JP"
        >
          ストア</a
        >
      </p>
    </div>

    <!-- right -->
    <div class="header_right">
      <!-- rightのright -->
      <div class="header_right_common">
        <p class="header_right_item">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href=" https://www.shonenjump.com/j/rensai/naruto.html"
          >
            Gmail</a
          >
        </p>
        <p class="header_right_item">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.co.jp/imghp?hl=ja&authuser=0&ogbl"
          >
            画像</a
          >
        </p>
      </div>

      <!-- rightのleft -->
      <div class="header_right_personal">
        <p class="header_right_item">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href=" https://3lion.younganimal.com/"
          >
            <!-- マテリアルアイコン -->
            <span class="material-icons">
              apps
            </span></a
          >
        </p>

        <p class="header_right_item">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.amazon.co.jp/%E6%B9%AF%E7%A5%9E%E3%81%8F%E3%82%93%E3%81%AB%E3%81%AF%E5%8F%8B%E9%81%94%E3%81%8C%E3%81%84%E3%81%AA%E3%81%84-1-%E5%B0%91%E5%B9%B4%E3%82%B5%E3%83%B3%E3%83%87%E3%83%BC%E3%82%B3%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9-%E4%BD%90%E5%80%89-%E6%BA%96/dp/4091240208"
          >
            <!-- マテリアルアイコン -->
            <span class="material-icons">
              sentiment_satisfied_alt
            </span></a
          >
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
.header {
  width: 100%;
  /* 背景色 */
  background-color: rgb(255, 177, 160);
  padding: 6px;
  height: 60px;
  /* 横並び */
  display: flex;
  align-items: center;
  /* 要素を左右に配置 */
  justify-content: space-between;
  /* 位置を固定する */
  position: fixed;
  top: 0;
}

.header_right,
.header_left {
  display: flex;
  align-items: center;
  /* marginが10px、paddingが10pxなので縦の余白は20px */
  gap: 0 20px;
}

/* leftの最初の要素だけ左側のpadding */
.header_left_item:first-child {
  margin-left: 15px;
}

.header_right_common {
  display: flex;
  align-items: center;
  gap: 0 15px;
}

.header_right_personal {
  display: flex;
  align-items: center;
  gap: 0 20px;
}
/* rightの最後の要素だけ左側のpadding */

.header_right_personal:last-child {
  margin-right: 20px;
}
</style>
