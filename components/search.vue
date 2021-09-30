<template>
  <div class="search_box">
    <div class="search_box_top">
      <input class="input_search" type="search" name="example" />
    </div>

    <div class="search_box_bottom">
      <div class="search_box_bottom_item" type="text" name="example">
        Google検索
      </div>
      <div class="search_box_bottom_item" type="text" name="example">
        {{ posts.name }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const randnum = Math.floor(Math.random() * 10)
console.log(randnum)

export default {
  data() {
    return {
      posts: ''
    }
  },
  mounted() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${randnum}`)
      .then((response) => (this.posts = response.data))
  }
}
</script>

<style scoped>
.search_box {
  width: 100%;
  max-width: 584px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px 0;
}
.search_box_top {
  width: 100%;
  display: inline-block; /* なくても大丈夫だけど、念の為 */
  position: relative; /* 基準値とする */
}

.search_box_bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 12px;
}

.search_box_bottom_item {
  padding: 0 16px;
  background-color: #f8f9fa;
  border: 1px solid #f8f9fa;
  border-radius: 4px;
  color: #3c4043;
  font-family: arial, sans-serif;
  font-size: 14px;
  line-height: 35px;
  height: 36px;
  min-width: 54px;
  text-align: center;
  cursor: pointer;
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

.search_box_bottom_item:hover {
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  background-color: #f8f9fa;
  border: 1px solid #dadce0;
  color: #202124;
}
</style>
