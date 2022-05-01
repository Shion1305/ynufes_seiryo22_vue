<template>
  <div class="about-head">
    <div class="about-head-text">
      <div>
        <h1>22清陵祭</h1>
        <h2>『花笑み』</h2>
      </div>
      <div class="flower-background">
        <FlowerFrame/>
      </div>
    </div>
    <img src="/image/twitter_ogp.jpg"/>
  </div>
  <div class="about-content">

  </div>


  <div>
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
    </ul>
  </div>
</template>
<style lang="scss" scoped>
//:root {
//  display: flex;
//  flex-direction: column;
//  justify-content: center;
//}

.departments-structure {
  list-style: none;

  ul {
    list-style: none;
  }
}


.departments-structure {
  box-sizing: border-box;

  > li {
    box-sizing: border-box;
  }

  > li > div {
    height: 100%;
    position: absolute;
    transform: translateY(-50%);
  }
}

.about-head {
  border-radius: 2.5rem;
  overflow: hidden;
  color: white;
  box-sizing: border-box;
  width: unquote("min(100% - 6rem, 50rem)");
  display: flex;
  flex-direction: row;
  z-index: 10;
  margin: 0;
  box-shadow:
      0 1.9px 2.5px rgba(0, 0, 0, 0.057),
      0 5px 6.1px rgba(0, 0, 0, 0.076),
      0 10.1px 11.4px rgba(0, 0, 0, 0.086),
      0 19.2px 19.8px rgba(0, 0, 0, 0.092),
      0 38.4px 34.8px rgba(0, 0, 0, 0.1),
      0 101px 74px rgba(0, 0, 0, 0.13);
  .about-head-text {
    position: relative;
    font-family: 'Kaisei Decol', serif;
    flex-basis: 50%;
    flex-shrink: 0;
    aspect-ratio: 1;

    div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    h1 {
      font-size: 4.5rem;
      margin: 0;
      font-weight: normal;
    }

    h2 {
      font-weight: normal;
      text-align: right;
      font-size: 3.5rem;
      margin: 1rem 0 0 0;
    }

  }

  img {
    width: 100%;
    aspect-ratio: 1;
    height: auto;
    object-fit: cover;
    overflow: hidden;
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

.about-content{
  border-radius: 5rem;
  transform: translateY(-100px);
  width: unquote("min(100% - 2rem, 70rem)");
  height: 300px;
  background: white;

  box-shadow:
      0 1.9px 2.5px rgba(0, 0, 0, 0.057),
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
  components: {FlowerFrame},
  setup() {
    useMeta({title: '清陵祭とは', description: "「22清陵祭」を開催するにあたりご協賛くださった企業の一覧を掲載しています。数多くの企業の皆様に多大なご協力を賜りました。心より感謝申し上げます。"})
  }
}
</script>
