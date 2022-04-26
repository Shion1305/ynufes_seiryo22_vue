<template>
  <div id="main" class="fadeUp">
    <img src="@/assets/imgs/image1.webp" alt="背景画像"/>
    <div>
      <div>Coming<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soon...
      </div>
      <div style="padding-top: 30px">
        5/13 公開予定
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PamphletView",
  mounted() {
    window.scrollTo(0,0);
  }
}
</script>

<style scoped>
#main {
  animation-delay: 0.2s;
  width: min(100%, 80rem);
  margin-inline: auto;
  position: relative;
}

#main img {
  width: 100%;
  height: calc(100vh - 200px);
  object-fit: cover;
  border-radius: 2rem;
}

#main > div {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  color: white;
  padding-top: 60px;
  font-size: 5rem;
  position: absolute;
  top: 0;
  bottom: 0;
}

@media screen and (max-width: 550px) {
  #main>div{
    font-size: 55px;
  }
}
</style>