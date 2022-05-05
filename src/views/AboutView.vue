<script setup>
import {useMeta} from "vue-meta";
import FlowerFrame from "@/components/FlowerFrame";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import AdsBlock from "@/components/AdsBlock";
import {event} from 'vue-gtag';

function getShuffledImages() {
  const target = [
    {url: "/image/about1.webp", alt: "2019年度清陵祭の画像(1)"},
    {url: "/image/about2.webp", alt: "2019年度清陵祭の画像(2)"},
    {url: "/image/about3.webp", alt: "2019年度清陵祭の画像(3)"},
    {url: "/image/about4.webp", alt: "2019年度清陵祭の画像(4)"},
    {url: "/image/about5.webp", alt: "2019年度清陵祭の画像(5)"},
    {url: "/image/about6.webp", alt: "2019年度清陵祭の画像(6)"},
    {url: "/image/about7.webp", alt: "2019年度清陵祭の画像(7)"},
    {url: "/image/about8.webp", alt: "2019年度清陵祭の画像(8)"},
    {url: "/image/about9.webp", alt: "2019年度清陵祭の画像(9)"},
  ]
  return target.map(value => ({value, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({value}) => value);
}
if (process.env.NODE_ENV === "production") {
  event("page:about");
}

useMeta({title: '清陵祭とは', description: "「22清陵祭」を開催するにあたりご協賛くださった企業の一覧を掲載しています。数多くの企業の皆様に多大なご協力を賜りました。心より感謝申し上げます。"})
</script>

<template>
  <div class="ads fadeUp">
    <AdsBlock/>
  </div>
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
        <div class="note">※企画ごとに公開開始時刻が異なります。 詳細な公開スケジュールは清陵祭パンフレットのp.3をご覧ください。</div>
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
    <h1 class="section-title">清陵祭ってなに?</h1>
    <p style="text-align: left">&emsp;横浜国立大学の大学祭は、例年は一年間に2回開催されます。
      春に行われるものが『清陵祭(せいりょうさい)』、秋に行われるものが『常盤祭(ときわさい)』です。
      今回の清陵祭は新型コロナウイルス感染拡大状況に鑑み、オンライン上で開催いたします。</p>
    <h1>過去の大学祭の様子</h1>
    <p>2019年の清陵祭の様子です。</p>
    <div style="position: relative">
      <Swiper :autoplay="{delay: 5000,disableOnInteraction: false}"
              :loop="true"
              :modules="[Navigation,Autoplay]"
              :navigation="true" class="picSwiper">
        <SwiperSlide v-for="image in getShuffledImages()" :key="image.index"><img :alt="image.alt" :src="image.url"/>
        </SwiperSlide>
        <!--              <SwiperSlide><img src="/image/about1.webp"></SwiperSlide>-->
      </Swiper>
    </div>
    <h1>横国についてもっと知りたい!!</h1>
    <p>横浜国立大学に関するサイトを紹介します。<br>
      <a href="https://www.whystudyat.ynu.ac.jp">Why study at YNU? 高校生向け大学案内</a><br>
      <a href="https://www.ynu.ac.jp">横浜国立大学ホームページ</a><br>
      <a href="https://www.ynu.ac.jp/about/public/publish/guide/">大学案内「横浜国立大学2022」</a>
    </p>
  </div>
</template>
<style lang="scss" scoped>
.ads {
  animation-delay: 2.1s;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.picSwiper {
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}


:root {
  display: flex;
  flex-direction: column;
  justify-content: center;
}


@keyframes head-extract {
  from {
    aspect-ratio: 1;
  }
  to {
    aspect-ratio: 2;
  }
}

.about-head-wrapper {
  margin: 2em 0 0 0;
  color: white;
  font-size: 20px;
  box-sizing: border-box;
  height: unquote("min(50vw - 2.5em, 25rem)");
  display: flex;
  z-index: 10;
  padding: 0;

  .about-head {
    animation: 0.5s ease-in-out 0.9s forwards running head-extract, 0.5s ease-in-out forwards 0.3s fadeUpAnime;
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
        animation: 0.4s ease-out 1.57s forwards running itemSlideIn;
      }

      .item:nth-child(3) {
        animation: 0.4s ease-out 1.69s forwards running itemSlideIn;
      }

      .note {
        opacity: 0;
        font-size: 0.8em;
        color: black;
        animation: 0.4s ease-out 1.81s forwards running itemSlideIn;
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
    height: auto;
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


.about-content {
  margin-bottom: 5em;
  animation-delay: 1.9s;
  font-size: 1.2rem;
  box-sizing: border-box;
  border-radius: 5rem;
  margin-top: -100px;
  width: unquote("min(100% - 2rem, 70rem)");
  background: white;
  padding: 110px 0 5em 0;
  box-shadow: 0 1.9px 2.5px rgba(0, 0, 0, 0.057),
  0 5px 6.1px rgba(0, 0, 0, 0.076),
  0 10.1px 11.4px rgba(0, 0, 0, 0.086),
  0 19.2px 19.8px rgba(0, 0, 0, 0.092),
  0 38.4px 34.8px rgba(0, 0, 0, 0.1);

  p {
    text-align: center;
    margin: 0 auto;
    max-width: 50em;
    padding: 0 2em 2em 2em;
  }

  h1 {
    width: fit-content;
    font-size: 1.5em;
    padding: 0.3em 0.5em;
    margin: 1em auto 0.5em auto;
    background: linear-gradient(90deg, #ff7cd3, #ff6498);
    text-align: center;
    color: white;
    border-radius: 2em;
  }
}
</style>