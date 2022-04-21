<template>
  <div class="carouselView">
    <CarouselView id="carousel"/>
  </div>
  <div class="content-frame">
    <div class="ads-area">
      <router-link to="/support_us">
        <div>
          ご協賛について
        </div>
      </router-link>
      <AdsBlock/>

    </div>
    <div id="banner-area">
      <div>
        今年のテーマは<br>花笑み!
      </div>
      <div>
        5/21,22に<br>オンライン開催
      </div>
    </div>
    <div class="events_search_block">
      <div class="section_title">
        <img src="@/assets/home/section_background.png">
        <div>
          企画紹介
        </div>
      </div>
      <div class="content1-home">
        <div class="home_events">
          <div class="button_events_all hover-to-shrink">
            <img src="@/assets/home/event-button-1.png" alt="全ての企画を見る"/>
            <router-link to="/pamphlet">
              <div><p>全ての<br>企画</p></div>
            </router-link>
          </div>
          <div class="button_events_other">
            <div class="button_events_part hover-to-shrink">
              <img src="@/assets/home/event-button-2.png" alt="本部企画"/>
              <a>
                <div>
                  <p>本部企画</p>
                </div>
              </a>
            </div>
            <div class="button_events_part hover-to-shrink">
              <img src="@/assets/home/event-button-3.png" alt="団体企画"/>
              <a>
                <div><p>団体企画</p></div>
              </a>
            </div>
          </div>
        </div>
        <hr class="border_in_events">
        <router-link to="/pamphlet" class="pamphlet_block hover-to-shrink">
          <img src="@/assets/home/pamphlet_here.jpg"/>
          <div>
            <div>デジタル<br>パンフレットは<br>こちらから</div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="button_section_1">
      <div>
        <img/>
        <div>
          <div>ポスター展覧会</div>
        </div>
      </div>
      <div>
        <img/>
        <div>
          <div>浜フェス投票</div>
        </div>
      </div>
    </div>
    <div class="update_block">
      <div class="updates_area">
        <h1>更新情報</h1>
        <div class="updates_frame">
          <div v-for="update in updates" :key="update.id" class="news hover-to-shrink">
            <div class="date_field">
              <div class="date">2022.3.30</div>
              <div class="time">18:00</div>
            </div>
            <div class="label">
              <div class="title">{{ update.title }}</div>
              <div class="summary">{{ update.summary }}</div>
            </div>
          </div>
          <router-link class="more_updates hover-to-shrink" to="/updates">
            <div>更新情報をもっとみる</div>
          </router-link>
        </div>
      </div>
      <div class="twitter_embeds">
        <a class="twitter-timeline" data-lang="ja" data-width="350" data-height="450" href="https://twitter.com/ynu_fes?ref_src=twsrc%5Etfw">Tweets by ynu_fes</a>
      </div>
<!--      <TweetTimeline class="twitter_embeds"/>-->
      <!--                更新情報-->
    </div>
  </div>
</template>
<style lang="scss" scoped>
#banner-area {
  display: flex;
  width: 100%;
  gap: 1rem;
  max-width: 70rem;

  > div {
    color: white;
    flex-basis: 50%;
    margin: auto;
    padding: 1rem;
    height: 6rem;
    text-align: center;
    background: linear-gradient(90deg, #ff7cd3, #ff6498);
    font-size: 2rem;
    border-radius: 1rem;
  }
}


.content-frame {
  width: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ads-area {
  width: fit-content;
  margin: 0.5rem 0;
  background: none;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
    background: #e31bb1;
    border-radius: 1rem;
    line-height: 1;
    font-size: 1.3rem;

    div {
      padding: 0 0.5rem;
      white-space: nowrap;
    }
  }
}

.events_search_block {
  width: 100%;
  max-width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff44;
  margin: 40px 0;
  border-radius: 40px;

  .section_title {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 8rem;
    box-sizing: border-box;
    border-radius: 20px;

    > img {
      margin-left: 2rem;
      max-width: 35rem;
      width: 100%;
      height: 8rem;
      z-index: 30;
    }

    > div {
      z-index: 50;
      height: 100%;
      top: 0;
      color: white;
      font-size: 2.3rem;
      line-height: 8rem;
      text-align: center;
      position: absolute;
    }
  }

  .content1-home {
    width: 100%;
    max-width: 70rem;
    color: black;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;

    .home_events {
      display: flex;
      flex-basis: 50%;
      flex-direction: row;
      font-size: 3rem;
      overflow-wrap: break-word;
      word-break: break-word;
      text-align: center;

      a {
        text-decoration: none;
        color: white;
      }

      > * {
        flex-basis: 50%;
        height: 100%;
      }

      p {
        margin: 0;
        padding: 0;
        white-space: nowrap;
      }

      .button_events_all {
        position: relative;

        > img {
          width: 100%;
          position: relative;
        }

        > a {
          box-sizing: border-box;
          position: absolute;
          right: 0;
          top: 0;
          left: 0;
          bottom: 0;

          > div {
            box-sizing: border-box;
            padding: 20% 10% 14% 20%;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }

      .button_events_all:hover {
        transform: scale(0.9);

      }

      .button_events_other {
        display: flex;
        height: 100%;
        flex-direction: column;

        * {
          flex-basis: 50%;
          width: 100%;
        }

        .button_events_part {
          line-height: 2.5rem;
          position: relative;
          box-sizing: border-box;

          > img {
            height: 100%;
            position: relative;
          }

          > a {
            box-sizing: border-box;
            position: absolute;
            right: 0;
            top: 0;
            left: 0;
            bottom: 0;

            > div {
              box-sizing: border-box;
              padding: 11% 10% 10% 15%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }

        a > div {
          margin: auto 0;
        }
      }

      @media screen and (max-width: 1080px) {
        .button_events_all p {
          font-size: 3rem;
          line-height: 1.8;
        }
        .button_events_part p {
          font-size: 2.8rem;
        }
      }
      @media screen and (max-width: 1000px) {
        .button_events_all p {
          font-size: 2.7rem;
          line-height: 1.8;
        }
        .button_events_part p {
          font-size: 2.5rem;
        }
      }

      @media screen and (max-width: 900px) {
        .button_events_all p {
          font-size: 2.5rem;
          line-height: 1.7;
        }
        .button_events_part p {
          font-size: 2.3rem;
        }
      }
      @media screen and (max-width: 820px) {
        .button_events_all p {
          font-size: 2.2rem;
          line-height: 1.7;
        }
        .button_events_part p {
          font-size: 2rem;
        }
      }
      @media screen and (max-width: 820px) {
        .button_events_all p {
          font-size: 2.1rem;
          line-height: 1.7;
        }
        .button_events_part p {
          font-size: 1.9rem;
        }
      }
      @media screen and (max-width: 700px) {
        .button_events_all p {
          font-size: 3.2rem;
          line-height: 1.8;
        }
        .button_events_part p {
          font-size: 2.8rem;
        }
      }
      @media screen and (max-width: 500px) {
        .button_events_all p {
          font-size: 2.7rem;
          line-height: 1.8;
        }
        .button_events_part p {
          font-size: 2.5rem;
        }
      }

      @media screen and (max-width: 460px) {
        .button_events_all p {
          font-size: 2.5rem;
          line-height: 1.8;
        }
        .button_events_part p {
          font-size: 2.3rem;
        }
      }
      @media screen and (max-width: 400px) {
        .button_events_all p {
          font-size: 2.3rem;
          line-height: 1.8;
        }
        .button_events_part p {
          font-size: 2.1rem;
        }
      }

      @media screen and (max-width: 370px) {
        .button_events_all p {
          line-height: 1.6;
          font-size: 2rem;
        }
        .button_events_part p {
          font-size: 1.7rem;
          font-feature-settings: "flat";
        }
      }

      @media screen and (max-width: 330px) {

        .button_events_all p {
          line-height: 1.5;
          font-size: 1.8rem;
        }
        .button_events_part p {
          font-size: 1.5rem;
          font-feature-settings: "flat";
        }
      }
    }

    .pamphlet_block {
      position: relative;
      flex-basis: 50%;
      display: flex;
      box-sizing: border-box;

      > img {
        box-sizing: border-box;
        padding: 0.5rem;
        width: 100%;
        object-fit: cover;
        border-radius: 2rem;
      }

      > div {
        box-sizing: border-box;
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;

        > div {
          line-height: 1;
          text-align: center;
          margin: auto;
          font-size: 3rem;
        }
      }

      @media screen and (max-width: 500px) {
        > div > div {
          font-size: 33px;
        }
      }
    }
  }
}

.button_section_1 {
  display: flex;
  width: 100%;
  max-width: 70rem;

  > div {
    flex-basis: 50%;
    position: relative;

    > img {
      background: #e31bb1;
      height: 10rem;
      width: 100%;
    }

    > div {
      top: 0;
      bottom: 0;
      position: absolute;
      width: 100%;
      display: flex;
      font-size: 3rem;

      > div {
        margin: auto;
        text-align: center;
      }
    }
  }
}


.update_block {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 70rem;
  box-sizing: border-box;
  gap: 1rem;

  .twitter_embeds {
    flex-basis: 40%;
  }

  .updates_area {
    min-height: 10rem;
    height: fit-content;
    border-radius: 30px;
    flex-basis: 60%;
    background: linear-gradient(90deg, #F06D87, #EF60A3);
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 2rem;
      width: 100%;
      margin: 0;
      padding: 0;
      color: white;
      text-align: center;
    }

    .updates_frame {
      box-sizing: border-box;
      color: white;
      border-radius: 30px;
      margin: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      .news {
        box-sizing: border-box;
        display: flex;
        height: 5rem;
        padding: 5px;
        border-radius: 1.5rem;
        border-style: solid;
        border-width: 2px;
        border-color: white;
        width: 100%;
        align-items: center;

        .date_field {
          display: flex;
          flex-direction: row;
          font-size: 1.5rem;

          .date {
            flex-shrink: 0;
            text-align: center;
            padding-left: 0.2rem;
            width: 7rem;
          }

          .time {
            flex-shrink: 0;
            margin: 0 auto;
            text-align: center;
            width: 5rem;
          }

        }

        .label {
          display: flex;
          flex-direction: column;
          margin-left: 0.2rem;
          line-height: 1;

          .title {
            line-height: 2rem;
            height: 2rem;
            font-size: 1.5rem;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }

          .summary {
            word-break: break-all;
            font-size: 1rem;
            height: 2rem;
            width: 100%;
            line-height: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }

        @media screen and (max-width: 900px) {
          .date_field {
            flex-direction: column;
            justify-content: center;
            padding-left: 0.3rem;
          }
        }

        @media screen and (max-width: 700px) {
          .date_field {
            flex-direction: row;
            padding-left: 0;
          }
        }
        @media screen and (max-width: 500px) {
          .date_field {
            flex-direction: column;
            padding-left: 0.3rem;
          }
        }
        @media screen and (max-width: 430px) {
          .date_field {
            font-size: 1.1rem;

            .date {
              width: 5rem;
            }
          }
        }
      }

      .more_updates {
        margin: 0.6rem auto 0 auto;
        border-radius: 1.5rem;
        height: 3rem;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #EF60A3;
        text-decoration: none;
        font-size: 1.6rem;

        > div {
          padding: 0 1.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 710px) {
    .twitter_embeds {
      display: none;
    }
    .updates_area {
      flex-basis: auto;
      width: 100%;
    }
  }
}

.border_in_events {
  border-left: 2px dashed #8c8b8b;
}

@media screen and (max-width: 700px) {
  .events_search_block .content1-home {
    flex-direction: column;
  }
  .border_in_events {
    display: none;
  }
  .home_events {
    flex-basis: auto;
  }
}
</style>
<script>

import CarouselView from "@/components/CarouselView";
import {createClient} from 'microcms-js-sdk';
import AdsBlock from "@/components/AdsBlock"; //ES6
// Initialize Client SDK.
const client = createClient({
  serviceDomain: "ynufes-seiryo22", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "26191c4b25ad49f1a00e982735c5831e5ab5",
});

export default {
  name: 'HomeView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    AdsBlock,
    CarouselView,
  },
  data() {
    return {updates: []}
  },
  methods: {
    getLatestUpdate() {
      client.get({
        endpoint: 'updates',
      }).then((data) => {
        console.log(data.contents);
        this.updates = data.contents.slice(0, 3);
      });
    },
  },
  mounted() {
    this.getLatestUpdate();
  }
}
</script>
<style lang="scss" scoped>

.carouselView {
  display: flex;
  margin-bottom: 1rem;

  CarouselView {
    margin: 0 auto;
  }
}
</style>