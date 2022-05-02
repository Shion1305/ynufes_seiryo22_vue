<template>
  <div class="content-frame fadeUp">
    <div class="fadeUp" style="animation-delay: 0.4s">
      <img src="@/assets/kamome_sempai/ojigi.webp" alt="かもめ先輩のお辞儀"/>
      <div style="font-size: 3rem">404</div>
      <div id="not-found">お探しのページは<br>見つかりませんでした</div>
    </div>
  </div>
</template>

<script>
import {useMeta} from "vue-meta";

export default {
  name: "NotFoundView",
  setup() {
    useMeta({
      title: "404 ページが見つかりませんでした",
      description: "お探しのページは見つかりませんでした"
    })
  },
  mounted() {
    if (process.env.NODE_ENV === "production") {
      this.$gtag.event("page:not_found");
    }
  }
}
</script>

<style scoped>
#not-found {
  font-size: 1.5rem;
}

.content-frame {
  animation-delay: 0.2s;
  white-space: nowrap;
  width: min(100% - 2rem, 60rem);
  margin-inline: auto;
  display: flex;
  position: relative;
  text-align: center;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  background-image: url("/public/image/image2.webp");
  margin-bottom: 1rem;
}

.content-frame img {
  background-size: contain;
  width: 100%;
  max-width: 300px;
}

.content-frame > div {
  width: min(100vw - 200px, 300px);
  margin: 20px;
  background: #cd4fffcc;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 3rem;
}

@media screen and (max-width: 450px) {
  #not-found {
    font-size: 18px;
  }
}
</style>