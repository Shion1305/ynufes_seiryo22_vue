<template>
  <div class="content-frame">
    <div>
      <img src="@/assets/kamome_sempai/ojigi.webp" alt="かもめ先輩のお辞儀"/>
      <div style="font-size: 3rem">404</div>
      <div style="font-size: 1.5rem">お探しのページは<br>見つかりませんでした</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundView"
}
</script>

<style scoped>
.content-frame {
  width: min(100% - 2rem, 60rem);
  margin-inline: auto;
  display: flex;
  position: relative;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  background-image: url("/public/image2.webp");
  margin-bottom: 1rem;
}

.content-frame img {
background-size: contain;
  max-width: 300px;
}

.content-frame > div {
  margin: 1rem;
  text-align: center;
  background: #fffc;
  border-radius: 3rem;
  padding: 1rem;
}
</style>