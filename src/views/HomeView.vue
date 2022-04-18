<template>
  <div class="content-frame">
    <div class="carouselView">
      <CarouselView id="carousel"/>
    </div>
    <div style="width: 50%; height: 1rem;padding:1rem; text-align: center; background: linear-gradient(90deg,#ff7cd3,#ff6498)">
      test
    </div>
    <div class="events_search_block">
      <div class="section_title">
        <img src="@/assets/home/section_background.png">
        <div>
          企画説明
        </div>
      </div>
      <div class="content1-home">
        <div class="home_events">
          <div class="button_events_all hover-to-shrink">
            <img src="@/assets/home/event-button-1.png" alt="全ての企画を見る"/>
            <a href="https://shion1305.com">
              <div><p>全ての<br>企画</p></div>
            </a>
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
        <div class="events_by_category">
          <div>Web展示</div>
        </div>

      </div>
    </div>

    <div class="pamphlet_block">
      <div class="home_pamphlet"><img class="hover-to-shrink" src="@/assets/home/pamphlet_here.png" alt="パンフレット"/></div>
      <div class="home_poster"><img class="hover-to-shrink" src="@/assets/home/pamphlet_here.png" alt="パンフレット"/>
        <div>ポスター展覧会</div>
      </div>
    </div>
    <div class="update_block">
      <div class="twitter_embeds">
        <a class="twitter-timeline" data-lang="ja" data-width="500" data-height="600"
           href="https://twitter.com/ynu_fes?ref_src=twsrc%5Etfw">Tweets by ynu_fes</a>
      </div>
      <div class="updates_area">
        <h1 class="hover-underline-animation">更新情報</h1>
        <div class="updates_frame">
          <div class="news">
            <h3>2022.3.30</h3>
            <div>2022.3.30</div>
          </div>
          <div class="news">
            <div>2022.3.30</div>
          </div>
          <div class="news">
            <div>2022.3.30</div>
          </div>
          <div class="news">
            <div>2022.3.30</div>
          </div>
        </div>
      </div>
      <!--                更新情報-->
    </div>
  </div>
</template>
<style lang="scss" scoped>

.content-slider {
  width: 100%;
}

.pamphlet_block {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 70rem;

.home_pamphlet, .home_poster {
  position: relative;
  flex-basis: 50%;
  padding: 10px;
  box-sizing: border-box;

> img {
  box-sizing: border-box;
  width: 100%;
}

> div {
  margin: auto 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #de31aa;
  position: absolute;
  z-index: 50;
}
}

.home_poster {
  background: #de31aa;
  padding: 10px;
  text-align: center;
  font-size: 3rem;
}
}

.events_search_block {
  width: 100%;
  max-width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff88;
  margin: 20px 0;
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

.events_by_category {
  flex-basis: 50%;
  display: flex;
  flex-wrap: wrap;

div {
  flex-basis: 50%;
  background: black;
  height: 100px;
}
}
}
}


.update_block {
  margin-top: 30px;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  max-width: 70rem;
  color: black;
  box-sizing: border-box;
  padding: 10px;

.twitter_embeds {
  flex-basis: 40%;
  height: 40rem;
}

.updates_area {
  border-radius: 30px;
  bottom: 0;
  margin: 0 10px;
  flex-basis: 60%;
  background: linear-gradient(90deg, #F06D87, #EF60A3);
  left: 0;
  right: 0;
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
  border-radius: 30px;
  height: auto;
  top: 0;
  bottom: 0;
  margin: 20px;
}

.news {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 5px;
  border-radius: 1.5rem;
//border: black 2px;
  border-style: solid;
  border-width: 2px;
  border-color: white;

h3 {
  height: 100%;
  width: 100px;;
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
  .home_events {
    flex-basis: auto;
  }
}
</style>
<script>

import CarouselView from "@/components/CarouselView";

export default {
  name: 'HomeView',
  components: {
    CarouselView,
  }
}
</script>
<style lang="scss" scoped>

.carouselView {
  height: 30rem;
  display: flex;

  CarouselView {
    margin: 0 auto;
  }

}
</style>