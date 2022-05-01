<template>
  <div class="about-head-wrapper">
    <div class="about-head">
      <div class="about-head-text">
        <div>
          <h1>22清陵祭</h1>
          <h2>『花笑み』</h2>
          <div class="flower-background">
            <FlowerFrame/>
          </div>
        </div>
      </div>
      <div class="about-head-detail">
        <div class="item">
          <div class="property">日時</div>
          <div class="value">5月21日(土)・22日(日)</div>
        </div>
        <div class="item">
          <div class="property">形式</div>
          <div class="value">オンライン</div>
        </div>
        <div class="item">
          <div class="property">配信<br>期間</div>
          <div class="value">5/21(土)・5/22(日)<br>～6/12(日)24:00まで</div>
        </div>
        <div style="color: black">※企画ごとに公開開始時刻が異なります。<br> 詳細な公開スケジュールは清陵祭パンフレットのp.3「〇〇」をご覧ください。</div>
      </div>
    </div>
  </div>


  <div class="about-content">
    【日 程】<br>2021年5月21日(土)・22日(日)<br>
    【開催形態】<br>清陵祭ホームページ上での参加団体の企画展示ならびに動画配信によるオンライン開催<br>
    【企画の配信・公開期間】<br>
    5/21(土)または5/22(日)～6/○(日)24:00まで<br>
    ※企画ごとに公開開始時刻が異なります。詳細な公開スケジュールは清陵祭パンフレットのp.3「〇〇」をご覧ください。
    <p>横浜国立大学の大学祭は、例年は一年間に2回開催されます。
      春に行われるものが『清陵祭(せいりょうさい)』、秋に行われるものが『常盤祭(ときわさい)』です。
      今回の清陵祭は新型コロナウイルス感染拡大状況に鑑み、オンライン上で開催いたします。</p>


    <ul class="departments-structure">
      <li>
        <ul>
          <li>機械・材料・海洋系学科
            <ul>
              <li>機械工学EP</li>
              <li>材料工学EP</li>
              <li>海洋空間のシステムデザインEP</li>
            </ul>
          </li>
          <li>化学・生命系学科
            <ul>
              <li>化学EP</li>
              <li>化学応用EP</li>
              <li>バイオEP</li>
            </ul>
          </li>
          <li>
            数物・電子情報系学科
            <ul>
              <li>
                数理科学EP
              </li>
              <li>
                物理工学EP
              </li>
              <li>
                電子情報システムEP
              </li>
              <li>
                情報工学EP
              </li>
            </ul>
          </li>
        </ul>
        <div>理工学部</div>
      </li>
      <li>
        <ul>


        </ul>


      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
:root {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.departments-structure {
  list-style: none;

  ul {
    list-style: none;
  }
}

//.departments-structure {
//  box-sizing: border-box;
//
//  > li {
//    box-sizing: border-box;
//  }
//
//  > li > div {
//    height: 100%;
//    position: absolute;
//    transform: translateY(-50%);
//  }
//}
@keyframes head-extract {
  from {
    aspect-ratio: 1;
  }
  to {
    aspect-ratio: 2;
  }
}


.about-head-wrapper {
  color: white;
  box-sizing: border-box;
  height: unquote("min(50vw - 3rem, 25rem)");
  aspect-ratio: 2;
  display: flex;
  z-index: 10;
  padding: 0;
  margin: 0;

  .about-head {
    animation: 0.5s ease-in-out 0.5s forwards running head-extract;
    flex-shrink: 0;
    border-radius: 2.5rem;
    aspect-ratio: 1;
    height: 100%;
    background: linear-gradient(90deg, #ffd9f2, #ffffff);
    overflow: hidden;
    box-shadow: 0 1.9px 2.5px rgba(0, 0, 0, 0.057),
    0 5px 6.1px rgba(0, 0, 0, 0.076),
    0 10.1px 11.4px rgba(0, 0, 0, 0.086),
    0 19.2px 19.8px rgba(0, 0, 0, 0.092),
    0 38.4px 34.8px rgba(0, 0, 0, 0.1),
    0 101px 74px rgba(0, 0, 0, 0.13);
    display: flex;
    margin: auto;

    .about-head-text {
      z-index: 200;
      height: 100%;
      border-radius: 2.5rem;
      overflow: hidden;
      position: relative;
      font-family: 'Kaisei Decol', serif;
      flex-shrink: 0;
      aspect-ratio: 1;
      text-align: center;
      box-shadow: 0 1.9px 2.5px rgba(0, 0, 0, 0.057),
      0 5px 6.1px rgba(0, 0, 0, 0.076),
      0 10.1px 11.4px rgba(0, 0, 0, 0.086),
      0 19.2px 19.8px rgba(0, 0, 0, 0.092),
      0 38.4px 34.8px rgba(0, 0, 0, 0.1),
      0 101px 74px rgba(0, 0, 0, 0.13);

      div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }

      h1 {
        font-size: 4.5rem;
        margin: 0.5rem;
        white-space: nowrap;
        font-weight: normal;
      }

      h2 {
        font-weight: normal;
        font-size: 3.5rem;
        margin: 1rem 0 0 0;
      }

      .flower-background {
        aspect-ratio: 1;
        z-index: -10;
        margin: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
      }
    }

    .about-head-detail {
      box-sizing: border-box;
      padding: 1rem;
      gap: 1rem;
      height: 100%;
      aspect-ratio: 1;
      background: none;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .item {
        display: flex;
        flex-wrap: nowrap;
        border-radius: 1rem;
        overflow: hidden;
        border: solid 0.3px rgba(0, 0, 0, 0.057);
        box-shadow: 0 1.9px 2.5px rgba(0, 0, 0, 0.057),
        0 5px 6.1px rgba(0, 0, 0, 0.076);

        .property {
          box-shadow: 0 1.9px 2.5px rgba(0, 0, 0, 0.057),
          0 5px 6.1px rgba(0, 0, 0, 0.076),
          0 10.1px 11.4px rgba(0, 0, 0, 0.086),
          0 19.2px 19.8px rgba(0, 0, 0, 0.092),
          0 38.4px 34.8px rgba(0, 0, 0, 0.1),
          0 101px 74px rgba(0, 0, 0, 0.13);
          border-radius: 1rem;
          width: 4rem;
          font-size: 1.5rem;
          padding: 0.3rem;
          background: linear-gradient(90deg, #ff7cd3, #ff6498);
          text-align: center;
        }

        .value {
          margin: auto 0 auto 1rem;
          white-space: nowrap;
          font-size: 1rem;
          color: black;
          width: 10rem;
        }
      }
    }
  }
}

@keyframes itemFadeIn {
  before {
  }
}

.about-content {
  box-sizing: border-box;
  border-radius: 5rem;
  transform: translateY(-100px);
  width: unquote("min(100% - 2rem, 70rem)");
  background: white;
  padding: 150px 3rem 3rem 3rem;
  box-shadow: 0 1.9px 2.5px rgba(0, 0, 0, 0.057),
  0 5px 6.1px rgba(0, 0, 0, 0.076),
  0 10.1px 11.4px rgba(0, 0, 0, 0.086),
  0 19.2px 19.8px rgba(0, 0, 0, 0.092),
  0 38.4px 34.8px rgba(0, 0, 0, 0.1),
  0 101px 74px rgba(0, 0, 0, 0.13);
}
</style>


<script>
import {useMeta} from "vue-meta";
import FlowerFrame from "@/components/FlowerFrame";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {FlowerFrame},
  setup() {
    useMeta({title: '清陵祭とは', description: "「22清陵祭」を開催するにあたりご協賛くださった企業の一覧を掲載しています。数多くの企業の皆様に多大なご協力を賜りました。心より感謝申し上げます。"})
  }
}
</script>
