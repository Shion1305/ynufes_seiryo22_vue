<script setup>

</script>
<template>
  <div class="main-container">
    <div class="head-area">
      <h1>はまキャラグランプリ</h1>
      <div>
        「はまフェス」とは、横浜にキャンパスを持つ神奈川大学、慶應義塾大学、フェリス女学院大学、横浜市立大学、横浜国立大学の大学祭実行委員会で構成された団体です。

        約3年間活動ができなかった「はまフェス」の新たな幕開けとして、公式キャラクターを作成することになりました！

        各大学からノミネートされたキャラクターのなかから、投票で公式キャラクターが決定します。
        皆さんの投票お待ちしております！！
      </div>
    </div>
    <div id="head-frame">
      <img src="/image/hamafes/character1.webp"/>
      <img src="/image/hamafes/character2.webp"/>
      <img src="/image/hamafes/character3.webp"/>
      <img src="/image/hamafes/character4.webp"/>
    </div>
    <div class="characters-detail-holder">
      <div class="character-detail">
        <div class="character-icon">
          エントリー①
          <img src="/image/hamafes/character1.webp"/>
        </div>
        <div class="description-area">
          <div>
            <ul>
              <li>歴史ある横浜の文化や魅力をさらに多くの人へ届けたいという願いを込め、市の花『薔薇』をモチーフにしたキャラクター</li>
              <li>手旗信号で、YokohamaのＹを表している</li>
              <li>横浜の街を散歩するのが趣味という設定</li>
            </ul>
          </div>
          <div class="vote-button">投票期間は5/21～です。</div>
        </div>
      </div>
      <div class="character-detail">
        <div class="character-icon">
          エントリー②
          <img src="/image/hamafes/character2-2.webp"/>
        </div>
        <div class="description-area">
          <div>
            <ul>
              <li>神奈川県のシンボルである「カモメ」の男の子</li>
              <li>泳ぐのが苦手なのでお母さんがくれた浮き輪をつけてる</li>
              <li>しっぽははまフェスのロゴになっている</li>
              <li>チャームポイントは笑顔</li>
            </ul>
          </div>
          <div class="vote-button">投票期間は5/21～です。</div>
        </div>
      </div>
      <div class="character-detail">
        <div class="character-icon">
          エントリー③
          <img src="/image/hamafes/character3.webp"/>
        </div>
        <div class="description-area">
          <div>
            <ul>
              <li>広くて優しい心をもったカモメの男の子</li>
              <li>大きな羽でどこへでも行けちゃいます</li>
              <li>胸ポケットに現れるコラボ大学のマスコット人形は手作り（実は手先が器用なんです）</li>
            </ul>
          </div>
          <div class="vote-button">投票期間は5/21～です。</div>
        </div>
      </div>
      <div class="character-detail">
        <div class="character-icon">
          エントリー④
          <img src="/image/hamafes/character4.webp"/>
        </div>
        <div class="description-area">
          <div>
            <ul>
              <li>横浜になじみのある水兵さんをモチーフにしたキャラクター</li>
              <li>はまフェスのロゴである青とオレンジを基調としている</li>
              <li>横浜に住む人たちと海を守ってくれています！</li>
            </ul>
          </div>
          <div class="vote-button">投票期間は5/21～です。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  width: unquote("min(100% - 2rem, 70rem)");
  font-size: 12px;


  .characters-detail-holder {
    display: flex;
    flex-direction: column;
  }

  .head-area {
    background: #fff5;
    box-sizing: border-box;
    border-radius: 3rem;
    overflow: hidden;
    color: black;
    margin-bottom: 1rem;

    h1 {
      color: white;
      background: linear-gradient(120deg, #ff5ecc, #ff75a8);
      padding: 0.5em 0 0 0;
      text-align: center;
      margin: 0;
      font-size: 3.4em;
    }

    > div {
      padding: 1em;
      font-size: 2em;
    }
  }

  #head-frame {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;

    img {
      width: 25%;
      object-fit: contain;
    }
  }

  .character-detail {
    flex-shrink: 0;
    width: 100%;
    display: flex;
    margin: 0;
    box-sizing: border-box;
    padding: 1.5rem 1rem;
    color: white;
    font-size: 1.2em;

    ul {
      padding-left: 20px;
    }

    .character-icon {
      font-size: 3em;
      text-align: center;
      width: 30%;
      margin: auto 0;
      flex-shrink: 0;

      img {
        width: 100%;
        border-radius: 1rem;
      }
    }

    .description-area {
      width: 70%;
      margin: auto 1rem;
      font-size: 1.6em;
    }

    .vote-button {
      color: #ff5ecc;
      padding: 0.5rem;
      border-radius: 0.5rem;
      white-space: nowrap;
      width: fit-content;
      margin: 0 auto;
      text-align: center;
      background: white;
    }

    &:nth-child(2n) {
      background: linear-gradient(120deg, #ff5ecc, #ff75a8);
    }

    &:nth-child(2n+1) {
      background: linear-gradient(120deg, #ff7cd3, #f57ddd);
    }
  }
}

@media screen and (max-width: 800px) {
  .main-container {
    font-size: 10px;

    .character-detail {
      flex-direction: column;
      align-items: center;

      .character-icon {
        width: 250px;
      }

      .description-area {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .main-container {
    font-size: 9px;
  }
  .character-detail {
    .description-area {
      margin: 0;
    }
  }
}

@media screen and (max-width: 400px) {
  .main-container {
    font-size: 8px;

    #head-frame img {
      width: 50%;
    }
  }
}
</style>