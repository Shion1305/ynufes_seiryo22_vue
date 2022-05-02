<template>
  <div class="about-head-wrapper">
    <div class="about-head fadeUp">
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
          <div class="value">5/21(土)・22(日)</div>
        </div>
        <div class="item">
          <div class="property">形式</div>
          <div class="value">オンライン</div>
        </div>
        <div class="item">
          <div class="property">配信<br>期間</div>
          <div class="value">5/21(土)・5/22(日)<br>～6/12(日)24:00まで</div>
        </div>
        <div class="note">※企画ごとに公開開始時刻が異なります。 詳細な公開スケジュールは清陵祭パンフレットのp.3「〇〇」をご覧ください。</div>
        <div class="follow-down">
          <div class="arrow">
            <div/>
            <div/>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="about-content fadeUp">
    <h1 class="section-title">清陵祭とは?</h1>
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
    <img src="/image/twitter_ogp.jpg" style="height: 300px; width: 300px; background: black" class="test"/>
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
  font-size: 20px;
  box-sizing: border-box;
  height: unquote("min(50vw - 2.5em, 25rem)");
  aspect-ratio: 2;
  display: flex;
  z-index: 10;
  padding: 0;
  margin: 0;

  .about-head {
    animation: 0.5s ease-in-out 1s forwards running head-extract, 0.5s ease-in-out forwards 0.3s fadeUpAnime;
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
    0 38.4px 34.8px rgba(0, 0, 0, 0.1);
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
      0 38.4px 34.8px rgba(0, 0, 0, 0.1);

      div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }

      h1 {
        font-size: 4em;
        margin: 0.5rem;
        white-space: nowrap;
        font-weight: normal;
      }

      h2 {
        white-space: nowrap;
        font-weight: normal;
        font-size: 3.5em;
        margin: 0;
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
      gap: 0.5em;
      height: 100%;
      aspect-ratio: 1;
      background: none;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .item {
        opacity: 0;
        display: flex;
        flex-wrap: nowrap;
        border-radius: 1em;
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
          border-radius: 1em;
          width: 3.5em;
          font-size: 1.5em;
          padding: 0.1em;
          background: linear-gradient(90deg, #ff7cd3, #ff6498);
          text-align: center;
        }

        .value {
          margin: auto 0 auto 1em;
          white-space: nowrap;
          font-size: 1em;
          color: black;
          width: 10em;
        }
      }

      .item:nth-child(1) {
        animation: 0.4s ease-out 1.45s forwards running itemSlideIn;
      }

      .item:nth-child(2) {
        animation: 0.4s ease-out 1.6s forwards running itemSlideIn;
      }

      .item:nth-child(3) {
        animation: 0.4s ease-out 1.75s forwards running itemSlideIn;
      }

      .note {
        opacity: 0;
        font-size: 0.8em;
        color: black;
        animation: 0.4s ease-out 1.9s forwards running itemSlideIn;
      }

      .follow-down {
        display: none;
      }

    }

  }

  @media screen and (max-width: 900px) {
    font-size: 17px;
  }
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
  @media screen and (max-width: 615px) {
    font-size: 20px;

    @keyframes head-extract {
      from {
        aspect-ratio: 1;
      }
      to {
        aspect-ratio: 0.5;
      }
    }
    .about-head {
      flex-direction: column;
      height: auto;
      min-width: 300px;
      width: 65vw;
      background: linear-gradient(180deg, #ffd9f2, #ffffff);

      .about-head-text {
        width: 100%;
        height: auto;
        box-shadow: 0 1.9px 2.5px rgba(0, 0, 0, 0.057),
        0 5px 6.1px rgba(0, 0, 0, 0.076),
        0 10.1px 11.4px rgba(0, 0, 0, 0.086);
      }

      .about-head-detail {
        gap: 0.5em;
        padding: 1rem 1rem 0 1rem;

        .follow-down {
          margin-bottom: 1em;
          color: black;
          font-size: 0.8em;
          display: flex;
          width: 100%;
          justify-content: center;
          opacity: 0;
          animation: 0.4s ease-out 2.15s forwards running itemSlideIn;
          flex-direction: row;
          gap: 1em;
          .arrow {
            width: 1.05em;
            position: relative;
            $base: 0.3rem;

            > div {
              position: absolute;
              width: $base * 3.5;
              height: $base * 0.8;
              opacity: 0;
              transform: scale(0.3);
            }

            > div:first-child {
              animation: move-chevron 2s ease-out infinite;
            }

            > div:nth-child(2) {
              animation: move-chevron 2s ease-out 1s infinite;
            }

            > div:before,
            > div:after {
              content: '';
              position: absolute;
              top: 0;
              height: 100%;
              width: 50%;
              background: #2c3e50;
            }

            > div:before {
              left: 0;
              transform: skewY(30deg);
            }

            > div:after {
              right: 0;
              width: 50%;
              transform: skewY(-30deg);
            }

            @keyframes move-chevron {
              25% {
                opacity: 1;
              }
              33.3% {
                opacity: 1;
                transform: translateY($base * 2);
              }
              66.6% {
                opacity: 1;
                transform: translateY($base * 4);
              }
              100% {
                opacity: 0;
                transform: translateY($base * 5) scale(0.5);
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 530px) {
    font-size: 15px;
  }
}

@keyframes bouncing {
  from {
    transform: translateY(-30%);
  }
  to {
    transform: translateY(30%);
  }
}

@keyframes itemSlideIn {
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}


@keyframes content-fadeUp {
  from {
    opacity: 0;
    transform: translateY(0px);
  }

  to {
    opacity: 1;
    transform: translateY(-150px);
  }
}
@media screen and (max-width: 615px) {
  @keyframes content-fadeUp {
    from {
      opacity: 0;
      transform: translateY(500px);
    }

    to {
      opacity: 1;
      transform: translateY(330px);
    }
  }
}

.about-content {
  margin-bottom: 400px;
  animation: 0.5s ease-in-out 2s forwards content-fadeUp;
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
  0 38.4px 34.8px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
  }
}
</style>


<script>
import {useMeta} from "vue-meta";
import FlowerFrame from "@/components/FlowerFrame";
// typical import
import gsap from "gsap";

// get other plugins:
// import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {FlowerFrame},
  setup() {

    useMeta({title: '清陵祭とは', description: "「22清陵祭」を開催するにあたりご協賛くださった企業の一覧を掲載しています。数多くの企業の皆様に多大なご協力を賜りました。心より感謝申し上げます。"})
    gsap.to(".test", {
      scrollTrigger: ".test", // ".box"がビューポートに入ったらアニメーション開始 (一度だけ)
      x: 500
    });
  }
}
</script>
