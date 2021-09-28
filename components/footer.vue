<template>
  <footer class="footer">
    <div class="footer_top">
      日本
    </div>
    <div class="footer_bottom">
      <div class="footer_bottom_left">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://ads.google.com/intl/ja_jp/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2m--ahpm-0000000083-0000000001&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
          >広告
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.google.com/intl/ja_jp/business/"
          >ビジネス </a
        ><a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.google.com/search/howsearchworks/?fg=1"
          >検索の仕組み
        </a>
      </div>
      <div class="footer_bottom_right">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://ads.google.com/intl/ja_jp/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2m--ahpm-0000000083-0000000001&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
          >プライバシー
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.google.com/intl/ja_jp/business/"
          >規約 </a
        ><a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.google.com/search/howsearchworks/?fg=1"
          >設定
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  components: {}
};
</script>
<style scope>
/* <style > */
.footer {
  width: 100%;
  padding: 0 20px;
  background: #f2f2f2;
  position: fixed;
  bottom: 0;
}

.footer_top {
  padding: 15px 30px;
  border-bottom: 1px solid #dadce0;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.54);
}

.footer_bottom {
  color: #70757a;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer_bottom_right,
.footer_bottom_left {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
div.footer_bottom_right > a,
div.footer_bottom_left > a {
  color: #70757a;
  padding: 15px;
}
</style>
