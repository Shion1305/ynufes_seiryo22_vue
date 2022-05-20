<script setup>
import {useMeta} from "vue-meta";
import {event} from "vue-gtag";

useMeta({
  title: "はまキャラグランプリ",
  description: "はまフェスの公式キャラクターを計4点のエントリーから投票によって決定します! 皆さんの投票お待ちしております!!"
})

if (process.env.NODE_ENV === "production") {
  event("page:sponsors");
}

function moveGForm() {
  const el = document.getElementById("gform_iframe");
  el.scrollIntoView({behavior: "smooth"})
}

</script>
<template>
  <div class="main-container fadeUp">
    <div class="head-area">
      <h1>はまキャラグランプリ</h1>
      <div>
        <div id="head-frame">
          <img alt="キャラクター候補1" src="/image/hamafes/character1.webp"/>
          <img alt="キャラクター候補2" src="/image/hamafes/character2.webp"/>
          <img alt="キャラクター候補3" src="/image/hamafes/character3.webp"/>
          <img alt="キャラクター候補4" src="/image/hamafes/character4.webp"/>
        </div>
        横浜市内の大学祭の集まり「はまフェス」のキャラクターを決めることになりました！各大学からノミネートされたキャラクターのなかから、投票で公式キャラクターが決定します。<br>
        あなたのお好きなキャラクターに一票を！皆さんの投票お待ちしております！！<br>
        投票締め切り：2022年5月28日 23時59分<br>
      </div>
      <div>
        <h2>【結果発表について】</h2>
        清陵祭HP内特設ページ、はまフェス公式SNSにて行います！<br>
        日時：2022年6月2日(予定)<br>
        <div class="sns_area">
          <a class="sns_block hover-to-shrink1" href="https://twitter.com/hamafes_univ" target="_blank">
            <img src="@/assets/sns/twitter_logo.webp" alt="twitter_logo"/>
            @hamafes_univ
          </a>
          <a class="sns_block hover-to-shrink1" href="https://www.instagram.com/hamafes_univ/" target="_blank">
            <img src="@/assets/sns/instagram_logo.webp" alt="instagram_logo"/>
            @hamafes_univ
          </a>
        </div>
      </div>
      <div>
        <h2>【はまフェスとは？】</h2>
        「はまフェス」とは、横浜にキャンパスを持つ神奈川大学、慶應義塾大学、フェリス女学院大学、横浜市立大学、横浜国立大学の大学祭実行委員会で構成された団体です。これから様々な企画を各大学祭で開催する予定です。ぜひご注目ください！<br>
        &emsp;[横国] 清陵祭/常盤祭<br>
        &emsp;[神大] 神大フェスタ<br>
        &emsp;[フェリス] Ferris Festival<br>
        &emsp;[横市] 浜大祭<br>
        &emsp;[慶應] 矢上祭
      </div>
      <div style="text-align: center">
        <h2>【お問い合わせ】</h2>
        メール(hamafes.univ@gmail.com)<br>または、はまフェス公式SNSから!
      </div>
    </div>
    <div class="characters-detail-holder">
      <div class="character-detail">
        <div class="character-icon">
          エントリー①
          <img src="/image/hamafes/character1.webp" alt="キャラクター候補1"/>
        </div>
        <div class="description-area">
          <div>
            <ul>
              <li>歴史ある横浜の文化や魅力をさらに多くの人へ届けたいという願いを込め、市の花『薔薇』をモチーフにしたキャラクター</li>
              <li>手旗信号で、YokohamaのＹを表している</li>
              <li>横浜の街を散歩するのが趣味という設定</li>
            </ul>
          </div>
          <div class="vote-button" @click="moveGForm">投票する!</div>
        </div>
      </div>
      <div class="character-detail">
        <div class="character-icon">
          エントリー②
          <img src="/image/hamafes/character2-2.webp" alt="キャラクター候補2"/>
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
          <div class="vote-button" @click="moveGForm">投票する!</div>
        </div>
      </div>
      <div class="character-detail">
        <div class="character-icon">
          エントリー③
          <img src="/image/hamafes/character3.webp" alt="キャラクター候補3"/>
        </div>
        <div class="description-area">
          <div>
            <ul>
              <li>広くて優しい心をもったカモメの男の子</li>
              <li>大きな羽でどこへでも行けちゃいます</li>
              <li>胸ポケットに現れるコラボ大学のマスコット人形は手作り（実は手先が器用なんです）</li>
            </ul>
          </div>
          <div class="vote-button" @click="moveGForm">投票する!</div>
        </div>
      </div>
      <div class="character-detail">
        <div class="character-icon">
          エントリー④
          <img src="/image/hamafes/character4.webp" alt="キャラクター候補4"/>
        </div>
        <div class="description-area">
          <div>
            <ul>
              <li>横浜になじみのある水兵さんをモチーフにしたキャラクター</li>
              <li>はまフェスのロゴである青とオレンジを基調としている</li>
              <li>横浜に住む人たちと海を守ってくれています！</li>
            </ul>
          </div>
          <div class="vote-button" @click="moveGForm">投票する!</div>
        </div>
      </div>
    </div>
    <iframe
        id="gform_iframe"
        src="https://docs.google.com/forms/d/e/1FAIpQLSe-48A5DAbCP9HtUCbQYIELyAZFUZE55GyKLQ-OUfrX6Tuzow/viewform?embedded=true"
        width="100%" height="600">Loading…
    </iframe>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  width: unquote("min(100% - 2rem, 70rem)");
  font-size: 12px;
  animation-delay: 0.5s;

  .characters-detail-holder {
    display: flex;
    flex-direction: column;
  }

  .head-area {
    box-shadow: 0 1.9px 2.5px rgba(0, 0, 0, 0.057),
    0 5px 6.1px rgba(0, 0, 0, 0.076),
    0 10.1px 11.4px rgba(0, 0, 0, 0.086);
    background: #fff5;
    border-radius: 3rem;
    overflow: hidden;
    color: black;
    margin-bottom: 1rem;
    background: linear-gradient(120deg, #ff5ecc, #ff75a8);

    h1 {
      color: white;
      padding: 0.5em 0 0 0;
      text-align: center;
      margin: 0;
      font-size: 3.4em;
    }

    > div {
      background: #fffe;
      margin: 1em;
      padding: 1em;
      border-radius: 1em;
      font-size: 2em;

      .sns_area {
        width: fit-content;
        margin: auto;
        display: flex;
        gap: 5px;

        .sns_block {
          border: solid 4px #ff7cd3;
          padding: 1em;
          border-radius: 1em;
          display: flex;
          flex-direction: column;
          font-size: unquote("min(3vw,15px)");

          img {
            margin: auto;
            width: 80px;
            object-fit: cover;
          }
        }
      }

      h2 {
        margin: 0 auto;
        width: fit-content;
        color: #ff5ecc;
        white-space: nowrap;
      }
    }
  }

  #head-frame {
    background: white;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    box-sizing: border-box;

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
      cursor: pointer;
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