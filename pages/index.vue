<template>
  <div class="container">
    <div class="logo_box">
      <nuxt-img
        src="/logo.png"
        sizes="sm:100vw md:272px lg:272px"
        fit="cover"
      />
    </div>

    <div class="search_box">
      <div class="search_box_top">
        <input class="input_search" type="search" name="example" />
      </div>

      <div class="search_box_bottom">
        <div class="search_box_bottom_item" type="text" name="example">
          ひだり
        </div>
        <div class="search_box_bottom_item" type="text" name="example">
          みぎ
        </div>
      </div>
    </div>

    <p class="messeage">
      サンティアゴ巡礼の旅に出よう。すべてのハイカーに贈るバーチャル ハイクです
    </p>
  </div>
</template>
<style scoped>
.container {
  background-color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  /* flex-direction: column; */
}

.logobox {
  display: block;
  min-height: 92px;
  margin: auto;
}

img .logobox {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  object-position: center bottom;
  width: auto;
}

.search_box_top {
  width: 100%;
}
.search_box {
  width: 100%;
  max-width: 584px;
}
.search_box_top {
  display: inline-block; /* なくても大丈夫だけど、念の為 */
  position: relative; /* 基準値とする */
}

.search_box_bottom {
  display: flex;
}

input[type='search'] {
  width: 100%;
  height: 44px;
  margin: 1em 0; /* 前後の余白 */
  padding: 5px 48px 6px 47px; /* テキスト周りの余白 */
  border: 1px solid #dfe1e5;
  box-sizing: border-box;
  border-radius: 24px;
}

input[type='search']:hover {
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  border-color: rgba(223, 225, 229, 0);
}
/* フォーカス時のスタイル */
input[type='search']:focus {
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  border-color: rgba(223, 225, 229, 0);
  outline: 0;
}

/* 検索フィールド４：キャンセルボタン変更+キャンセルボタンポインター付き */
.input_search::-webkit-search-cancel-button {
  /* デフォルトのサーチキャンセルボタンを非表示にする場合 */
  -webkit-appearance: none;
  cursor: pointer;
  background-image: url(../static/icon_cleare.svg); /* 背景にアイコン画像を配置 */
  background-repeat: no-repeat;
  width: 24px; /* アイコンの横幅 */
  height: 24px; /* アイコンの高さ */
}

.search_box_top::before {
  content: ''; /* 疑似要素に必須 */
  width: 16px; /* アイコンの横幅 */
  height: 16px; /* アイコンの高さ */
  background: url(../static/icon_search.svg) no-repeat center center / auto 100%; /* 背景にアイコン画像を配置 */
  display: inline-block; /* 高さを持たせるためにインラインブロック要素にする */
  position: absolute; /* 相対位置に指定 */
  top: 28px; /* アイコンの位置。微調整してね */
  left: 20px; /* アイコンの位置。微調整してね */
}
.search_box_top::after {
  content: ''; /* 疑似要素に必須 */
  width: 24px; /* アイコンの横幅 */
  height: 24px; /* アイコンの高さ */
  background: url(../static/icon_mike.svg) no-repeat center center / auto 100%; /* 背景にアイコン画像を配置 */
  display: inline-block; /* 高さを持たせるためにインラインブロック要素にする */
  position: absolute; /* 相対位置に指定 */
  top: 24px; /* アイコンの位置。微調整してね */
  right: 20px; /* アイコンの位置。微調整してね */
}
</style>
