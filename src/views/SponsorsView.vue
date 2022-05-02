<template>
  <div class="content-frame fadeUp">
    <img src="@/assets/imgs/image3.webp" alt="背景画像"/>
    <div id="page_top">
      <h1 class="title">ご協賛企業一覧</h1>
      <div>「22清陵祭」を開催するにあたり、多くの企業の皆様より多大なご協力を賜りました。この場をお借りいたしまして、心より感謝申し上げます。ご協賛いただきました企業を以下に掲載させていただきます。
      </div>
    </div>
    <div class="section_holder">
      <section class="section fadeLeft delay04" style="width:min(100% - 1rem, 27rem)">
        <div class="section_head"/>
        <div class="section_content">
          <h2>物品協賛</h2>
          <hr>
          <ul>
            <li>エスエスケイフーズ株式会社</li>
            <li>カツウラ化粧品株式会社</li>
            <li>株式会社アートプリントジャパン</li>
            <li>株式会社伊豆シャボテン公園</li>
            <li>株式会社ザ・キッス</li>
            <li>株式会社セザンヌ化粧品</li>
            <li>株式会社タスカジ</li>
            <li>株式会社ねぎしフードサービス</li>
            <li>株式会社マザー牧場</li>
            <li>株式会社マンナンライフ</li>
            <li>株式会社らしんばん</li>
            <li>鎌倉まめや</li>
            <li>ケンミン食品株式会社</li>
            <li>スカイスパYOKOHAMA</li>
            <li>セイコーモータースクール</li>
            <li>そごう美術館</li>
            <li>体感型動物園iZoo</li>
            <li>箱根ラリック美術館</li>
            <li>はまぎん こども美術館</li>
            <li>マクセル株式会社</li>
            <li>みたけ食品工業株式会社</li>
            <li>三菱みなとみらい技術館</li>
            <li>郵政博物館</li>
            <li>UNI COFFEE ROASTERY</li>
            <li>横浜F・マリノス</li>
            <li>横浜にぎわい座</li>
            <li>横浜ロイヤルパークホテル</li>
          </ul>
        </div>
      </section>
      <div style="width:min(100% - 1rem, 27rem)">
        <section class="section fadeLeft delay06">
          <div class="section_head"/>
          <div class="section_content">
            <h2>パンフレット協賛</h2>
            <hr>
            <ul>
              <li>株式会社カレッジヤード</li>
              <li>株式会社ロフトシステムズ</li>
              <li>株式会社有隣堂</li>
              <li>カレッジ・オンライン</li>
              <li>杉本歯科医院</li>
              <li>ソフィア英数セミナー</li>
              <li>鶴ヶ峰自動車学校</li>
              <li>寺田倉庫株式会社</li>
              <li>ねぎしフードサービス</li>
              <li>ユニゾン英語学院</li>
              <li>横浜弁当</li>
            </ul>
          </div>
        </section>
        <section class="section fadeLeft delay08">
          <div class="section_head"/>
          <div class="section_content">
            <h2>バナー協賛</h2>
            <hr>
            <ul>
              <li>株式会社アットヨコハマ</li>
              <li>株式会社中萬学院</li>
              <li>JOINUS</li>
              <li>Uni coffee roastery</li>
              <li>横浜モアーズ</li>
              <li>LocaliST株式会社</li>
            </ul>
          </div>
        </section>
        <section class="section fadeLeft delay10">
          <div class="section_head"/>
          <div class="section_content">
            <h2>寄付</h2>
            <hr>
            <ul>
              <li>現代不動産</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import {useMeta} from "vue-meta";

export default {
  name: "SponsorsView",
  setup() {
    useMeta({
      title: "ご協賛について",
      description: "「22清陵祭」を開催するにあたりご協賛くださった企業の一覧を掲載しています。数多くの企業の皆様に多大なご協力を賜りました。心より感謝申し上げます。"
    })
  },
  mounted() {

    if (process.env.NODE_ENV === "production") {
      this.$gtag.event("page:sponsors");
    }
  }
}
</script>
<style lang="scss" scoped>
#page_top {
  background: linear-gradient(120deg, #ff5eccdd, #ff75a8dd);
  padding: 2rem 2rem 1rem;

  .title {
    box-sizing: border-box;
    text-align: center;
    margin-block: 0;
    margin: 0;
    width: 100%;
    font-size: 3rem;
    color: white;
  }

  > div {
    text-indent: 2rem;
    margin: 1rem 0;
    width: unquote("min(100% - 2rem, 40rem)");
    font-size: 1.4rem;
    text-align: left;
    margin-inline: auto;
  }
}

.section_holder {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1rem 10px;
  gap: 0 10px;
}

.section {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  height: min-content;
  border-radius: 0.5rem;
  overflow: hidden;
  z-index: 10;
  margin-bottom: 1rem;
  background: #fffe;

  .section_head {
    left: 0;
    bottom: 0;
    top: 0;
    z-index: 40;
    align-self: stretch;
    width: 1.5rem;
    background: #ff5ecc;
    margin-right: 2rem;
  }

  .section_content {
    color: black;
    text-align: left;

    h2 {
      margin: 1rem 0 0 0;
      color: #ff5ecc;
      font-size: 2.5rem;
    }

    ul {
      padding-left: 10px;
    }

    li {
      font-size: 1.5rem;
      list-style: none;
    }
  }
}

.content-frame {
  animation-delay: 0.2s;
  margin-bottom: 3rem;
  color: white;
  text-align: center;
  box-sizing: border-box;
  width: unquote("min(100% - 1rem, 70rem)");
  margin-inline: auto;
  position: relative;
  overflow: clip;
  border-radius: 3rem;

  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -10;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}

.main-frame {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem 2rem;

  div {
    flex-basis: calc(50% - 2rem);
  }
}

.delay04 {
  animation-delay: 0.4s;
}

.delay06 {
  animation-delay: 0.6s;
}

.delay08 {
  animation-delay: 0.8s;
}

.delay10 {
  animation-delay: 1.0s;
}


@media screen and (max-width: 1000px) {
  .content-frame {
    #page_top .title {
      font-size: 43px;
    }

    .section_head {
      margin-right: 10px;
    }

    .section_content {
      h2 {
        font-size: 30px;
      }

      li {
        font-size: 23px;
      }

      ul {
        padding-left: 1rem;
      }
    }
  }
  .section_holder {
    padding-bottom: 1rem;
  }
}

@media screen and (max-width: 600px) {
  .content-frame {
    #page_top .title {
      font-size: 35px;
    }

    .section_head {
      margin-right: 10px;
    }

    .section_content {
      h2 {
        font-size: 30px;
      }

      li {
        font-size: 23px;
      }

      ul {
        padding-left: 1rem;
      }
    }
  }
  .section_holder {
    padding-bottom: 1rem;
  }
}

@media screen and (max-width: 450px) {
  .content-frame {
    #page_top .title {
      font-size: 27px;
    }

    .section_head {
      margin-right: 8px;
    }

    .section_content {
      h2 {
        font-size: 25px;
      }

      li {
        font-size: 18px;
      }

      ul {
        padding-left: 1rem;
      }
    }
  }
}
</style>