<template>
  <div class="carouselView">
    <CarouselView id="carousel" style="animation-delay: 0.5s" class="fadeUp"/>
  </div>
  <div class="content-frame">
    <!--    <div class="ads-area fadeUp">-->
    <!--      <AdsBlock/>-->
    <!--    </div>-->
    <div class="fadeUp events_search_block">
      <div class="section_title">
        <img src="@/assets/home/section_min.webp" alt="企画紹介"/>
        <h1>
          企画紹介
        </h1>
      </div>
      <div class="content1-home">
        <div class="home_events">
          <router-link class="button_events_all hover-to-shrink1" :to="{
          name: 'event_list',
          params: { type: 1 },
        }">
            <img alt="全ての企画を見る" src="@/assets/home/event-button-1-min.png"/>
            <div>
              <div><p>全ての<br>企画</p></div>
            </div>
          </router-link>
          <div class="button_events_other">
            <router-link class="button_events_part hover-to-shrink1" :to="{
          name: 'event_list',
          params: { type: 2 },
        }">
              <img alt="本部企画" src="@/assets/home/event-button-2-min.png"/>
              <div>
                <div>
                  <p>本部企画</p>
                </div>
              </div>
            </router-link>
            <router-link class="button_events_part hover-to-shrink1" :to="{
          name: 'event_list',
          params: { type: 3 },
        }">
              <img alt="団体企画" src="@/assets/home/event-button-3-min.png"/>
              <div
              >
                <div><p>団体企画</p></div>
              </div>
            </router-link>
          </div>
        </div>
        <hr class="border_in_events">
        <router-link class="pamphlet_block hover-to-shrink" to="/pamphlet">
          <img src="@/assets/home/pamphlet_here.webp" alt="デジタルパンフレット"/>
          <div>
            <div>デジタル<br>パンフレットは<br>こちらから</div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="button_section_1">
      <div id="poster_button" class="hover-to-shrink">
        <img src="@/assets/home/poster.webp" alt="ポスター展覧会"/>
        <router-link to="/poster">
          <!--          <div style="height: 50%"></div>-->
          <div>ポスター展覧会</div>
        </router-link>
      </div>
      <div id="hama_fes" class="hover-to-shrink">
        <img src="@/assets/home/hama_fes.jpg" alt="ポスター展覧会"/>
        <router-link to="/hama_fes">
          <!--          <div style="height: 50%"></div>-->
          <div>はまフェス投票</div>
        </router-link>
      </div>
    </div>
    <div class="update_block">
      <div class="updates_area">
        <h1>更新情報</h1>
        <div class="updates_frame">
          <UpdateElement v-for="update in getNewestUpdate()" :key="update.id" :update="update"/>
          <router-link class="more_updates hover-to-shrink" to="/updates">
            <div v-show="this.$store.state.updates.length>=3">更新情報をもっとみる</div>
          </router-link>
        </div>
      </div>
      <div class="twitter_embeds">
        <TwitterTimeline/>
      </div>
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
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  animation-delay: 1.0s;

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
  margin: 20px 0;
  border-radius: 40px;
  animation-delay: 1.2s;

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

    > h1 {
      margin: 0;
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

        > div {
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

          > div {
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
      color: #940168;

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
          white-space: nowrap;
          line-height: 1;
          text-align: center;
          margin: auto;
          font-size: 3rem;
        }
      }

      @media screen and (max-width: 800px) {
        > div > div {
          font-size: 2.5rem;
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
}

#poster_button {
  flex-basis: 50%;
  position: relative;
  padding-right: 3px;
  box-sizing: border-box;
  font-size: 3rem;

  > img {
    object-fit: cover;
    width: 100%;
    position: relative;
  }

  > a {
    color: white;
    text-decoration: none;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;

    > div {
      padding-top: 23%;
      box-sizing: border-box;
      text-align: center;
    }
  }


  @media screen and (max-width: 900px) {
    font-size: 40px;
  }
  @media screen and (max-width: 700px) {
    font-size: 30px;
  }
  @media screen and (max-width: 550px) {
    font-size: 20px;
  }
}

#hama_fes {
  flex-basis: 50%;
  position: relative;
  padding-right: 3px;
  box-sizing: border-box;
  font-size: 3rem;

  > img {
    object-fit: cover;
    width: 100%;
    position: relative;
  }

  > a {
    color: white;
    text-decoration: none;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;

    > div {
      padding-top: 15%;
      box-sizing: border-box;
      text-align: center;
    }
  }


  @media screen and (max-width: 900px) {
    font-size: 40px;
  }
  @media screen and (max-width: 700px) {
    font-size: 30px;
  }
  @media screen and (max-width: 550px) {
    font-size: 20px;
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

.hover-to-shrink1 {
  & > * {
    transition: all 0.1s linear;
  }

  &:hover > * {
    transform: scale(0.95);
  }
}
</style>
<script>

import CarouselView from "@/components/CarouselView";
import AdsBlock from "@/components/AdsBlock";
import TwitterTimeline from "@/components/TwitterTimeline";
import UpdateElement from "@/components/UpdateElement";
import {useMeta} from "vue-meta";

export default {
  name: 'HomeView',
  components: {
    TwitterTimeline,
    // eslint-disable-next-line vue/no-unused-components
    AdsBlock,
    // eslint-disable-next-line vue/no-unused-components
    CarouselView,
    UpdateElement
  },
  data() {
    return {}
  },
  methods: {
    getNewestUpdate() {
      return this.$store.state.updates.slice(0, 3);
    },
    async scrollTop() {
      window.scrollTo(0, 0);
    }
  },
  props: {},
  mounted() {
    this.scrollTop();
    // document.addEventListener('backbutton', this.scrollTop, false);
  },
  beforeRouteLeave() {
    this.scrollTop();
  },
  setup() {
    useMeta({title: '', description: '横浜国立大学オンライン大学祭「22清陵祭」公式HPです。今年のテーマは『花笑み』! 楽しいオンライン企画が満載！'})
  }
}
</script>
<style lang="scss" scoped>

.carouselView {
  display: flex;
  margin-bottom: 1rem;
}
</style>