<script setup>
import {useMeta} from "vue-meta";
import {event} from "vue-gtag";

if (process.env.NODE_ENV === "production") {
  event("pamphlet");
}
useMeta({title: 'デジタルパンフレット', description: '22清陵祭のデジタルパンフレットを掲載しています。'})
const iframeLoaded = function () {
  console.log("iframe loaded")
}

const iframeError = function () {
  console.log("error in iframe")
}
</script>
<template>
  <div style="background: #fff6; padding: 1rem; border-radius: 3rem">
    <div id="section-title">
      <img id="section-back" src="@/assets/home/section_min.webp"/>
      <h1>パンフレット</h1>
    </div>
    <div id="download-area">
      <a class="hover-to-shrink1">
        <div>軽量版<br>x.xMB</div>
      </a>
      <a class="hover-to-shrink1" href="https://www-next.ynu-fes.yokohama/wp-content/uploads/2021/12/21%E5%B8%B8%E7%9B%A4%E7%A5%AD%E3%83%91%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%88.pdf" target="_blank" rel="noreferrer noopener">
        <div>標準版<br>x.xMB</div>
      </a>
      <a href="#pamphlet-jump" class="hover-to-shrink1">
        <div>画像<br>でみる</div>
      </a>
    </div>
  </div>

  <object id="pdf-area"
          data="https://www-next.ynu-fes.yokohama/wp-content/uploads/2021/12/21%E5%B8%B8%E7%9B%A4%E7%A5%AD%E3%83%91%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%88.pdf"
          type="application/pdf" @load="iframeLoaded" @error="iframeError">
    <p>Oops! Your browser doesn't support PDFs!</p>
    <p><a
        href="https://www-next.ynu-fes.yokohama/wp-content/uploads/2021/12/21%E5%B8%B8%E7%9B%A4%E7%A5%AD%E3%83%91%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%88.pdf">Download
      Instead</a></p>
  </object>
  <a class="anchor" id="pamphlet-jump"></a>
  <div id="main">
    <div class="page-holder">
      <div class="page">
        <img src="/image/pamphlet/test_page.jpg"/>
      </div>
      <div class="page">
        <img src="/image/pamphlet/test_page.jpg"/>
      </div>
      <div class="page">
        <img src="/image/pamphlet/test_page.jpg"/>
      </div>
      <div class="page">
        <img src="/image/pamphlet/test_page.jpg"/>
      </div>
      <div class="page">
        <img src="/image/pamphlet/test_page.jpg"/>
      </div>
      <div class="page">
        <img src="/image/pamphlet/test_page.jpg"/>
      </div>
      <div class="page">
        <img src="/image/pamphlet/test_page.jpg"/>
      </div>
      <div class="page">
        <img src="/image/pamphlet/test_page.jpg"/>
      </div>
      <div class="page">
        <img src="/image/pamphlet/test_page.jpg"/>
      </div>
      <div class="page">
        <img src="/image/pamphlet/test_page.jpg"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.anchor{
  display: block;
  position: relative;
  top: -200px;
  visibility: hidden;
}
#download-area {
  margin: auto;
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: unquote("min(100% - 2rem,600px)");

  > a {
    text-decoration: none;
    font-size: 1.5em;
    color: white;
    width: 30%;

    > div {
      box-shadow: 0 1.9px 2.5px rgba(0, 0, 0, 0.057),
      0 5px 6.1px rgba(0, 0, 0, 0.076);
      display: flex;
      border-radius: 1em;
      width: 100%;
      height: 5em;
      justify-content: center;
      align-items: center;
      background: linear-gradient(120deg, #ff5ecc, #ff75a8);
    }
  }
}

#section-back {
  width: unquote("min(100% - 1rem, 25em)");
}

#main {
  animation-delay: 0.2s;
  width: 100%;
  margin-inline: auto;
  position: relative;
}

#section-title {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    margin: auto;
    position: absolute;
    color: white;
    font-size: 2.2em;
  }
}

.page-holder {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.page {
  box-sizing: border-box;
  padding: 1rem;
  width: 50%;

  img {
    width: 100%;
    object-fit: cover;
  }
}

#pdf-area {
  margin-top: 40px;
  width: unquote("min(100vw - 4em, 1200px)");
  height: 60vh;
}

@media screen and (max-width: 1000px) {
  .page {
    box-sizing: border-box;
    padding: 0.25rem 0.5rem;
    width: unquote("min(100%,50rem)");

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}

@media screen and (max-width: 380px) {
  #section-title {
    font-size: 15px;
  }
}
</style>