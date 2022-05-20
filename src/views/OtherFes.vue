<script setup>

</script>
<template>
  <h1 id="page-title">他大学祭のご紹介</h1>
  <div class="cell-holder">
    <a href="https://ohdaisai.jp" rel="noopener" target="_blank" class="fes-cell">
      <img src="@/assets/other_fes/taisho_univ.webp"/>
      <div class="text-area">
        <div class="info-area">
          <div class="info-upper">
            <h1>鴨台祭</h1>
            <h2>大正大学</h2>
          </div>
          <div class="info-down">
            <hr>
            <h2>6/5,6</h2>
            <h2>対面開催</h2>
          </div>
        </div>
        <div class="jump-area">
          <div>公式サイト<br>を見る</div>
        </div>
      </div>
    </a>
    <a href="https://yokohama-fest.com/2022/" rel="noopener" target="_blank" class="fes-cell">
      <img src="@/assets/other_fes/tokyocity_univ.webp"/>
      <div class="text-area">
        <div class="info-area">
          <div class="info-upper">
            <h1>横浜祭</h1>
            <h2>東京都市大学</h2>
          </div>
          <div class="info-down">
            <hr>
            <h2>6/11,12</h2>
            <h2>ハイブリッド開催</h2>
          </div>
        </div>
        <div class="jump-area">
          <div>公式サイト<br>を見る</div>
        </div>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>

#page-title{
  background: linear-gradient(90deg, #ff7cd3, #ff6498);
  border-radius: 1em;
  padding: 1em;
  color: white;
}
.cell-holder {
  width: unquote("min(100% - 1rem, 80rem)");
  justify-content: center;
  gap: 2em;
  display: flex;
  flex-wrap: wrap;
}

.fes-cell {
  text-decoration: none;
  display: flex;
  overflow: hidden;
  border-radius: 2rem;
  aspect-ratio: 2;
  flex-shrink: 0;
  width: unquote("min(100% - 1rem, 600px)");
  background: white;
  position: relative;
  box-shadow: 0 19.2px 19.8px rgba(0, 0, 0, 0.092),
  0 38.4px 34.8px rgba(0, 0, 0, 0.1);

  img {
    position: absolute;
    height: 100%;
    aspect-ratio: 1.2;
    object-fit: cover;
  }


  &:hover {
    .text-area {
      transform: translateX(0);
    }
  }

  .text-area {
    aspect-ratio: 2;
    height: 100%;
    background: linear-gradient(90deg, #ffd9f2, #ffffff);
    z-index: 50;
    border-radius: 2rem;
    display: flex;
    flex-direction: row;
    transform: translateX(50%);
    transition: all 0.3s ease-in-out;


    .info-area {
      height: 100%;
      aspect-ratio: 1;
      border-radius: 2rem;
      background: linear-gradient(90deg, #ff7cd3, #ff6498);
      box-shadow: 0 19.2px 19.8px rgba(0, 0, 0, 0.092),
      0 38.4px 34.8px rgba(0, 0, 0, 0.1);
      color: white;

      h1 {
        margin: 0;
        text-align: center;
        font-size: 3em;
        font-style: normal;
      }


      .info-upper {
        width: 100%;
        height: 50%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: flex-end;

        h2 {
          margin: 0;
        }
      }

      .info-down {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;

        hr {
          width: calc(100% - 20px);
          color: white;
          border: solid 1px;
          margin: 10px;
        }

        h2 {
          font-style: normal;
          margin: 0;
          font-size: 1.8em;
          width: 100%;
          text-align: center;
        }
      }
    }

    .jump-area {
      justify-content: center;
      height: 100%;
      aspect-ratio: 1;
      color: #ff5ecc;
      display: flex;

      div {
        font-size: 2.5em;
        text-align: center;
        margin: auto;
      }
    }
  }

  @media screen and (max-width: 530px) {
    font-size: 13px;
  }
  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
  @media screen and (max-width: 370px) {
    font-size: 9px;
  }
}
</style>