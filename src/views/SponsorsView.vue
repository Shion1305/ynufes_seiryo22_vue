<template>
  <div class="content-frame fadeUp">
    <img src="@/assets/imgs/image3.webp"/>
    <h1 class="title">ご協賛企業一覧</h1>
    <div class="section_holder">
      <section class="section fadeLeft delay04" style="width:min(100% - 1rem, 27rem)">
        <div class="section_head"/>
        <div class="section_content">
          <h2>パンフレット協賛</h2>
          <hr>
          <ul>
            <li>株式会社有隣堂</li>
            <li>横浜弁当</li>
            <li>寺田倉庫株式会社</li>
            <li>ユニゾン英語学院</li>
            <li>杉本歯科医院</li>
            <li>ねぎしフードサービス</li>
            <li>ソフィア英数セミナー</li>
            <li>株式会社ロフトシステムズ</li>
            <li>カレッジ・オンライン</li>
            <li>株式会社カレッジヤード</li>
            <li>鶴ヶ峰自動車学校</li>
            <li>LocaliST株式会社</li>
          </ul>
        </div>
      </section>
      <div style="width:min(100% - 1rem, 27rem)">
        <section class="section fadeLeft delay06" style="margin-bottom: 20px">
          <div class="section_head"/>
          <div class="section_content">
            <h2>バナー協賛</h2>
            <hr>
            <ul>
              <li>横浜モアーズ</li>
              <li>株式会社中萬学院</li>
              <li>Uni coffee roastery</li>
              <li>LocaliST株式会社①</li>
              <li>LocaliST株式会社②</li>
              <li>株式会社アットヨコハマ</li>
            </ul>
          </div>
        </section>
        <section class="section fadeLeft delay08">
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
export default {
  name: "SponsorsView"
}
</script>
<style lang="scss" scoped>
.title {
  box-sizing: border-box;
  padding: 2rem 0 1rem;
  text-align: center;
  margin-block: 0;
  margin: 0;
  width: 100%;
  font-size: 3rem;
  background: linear-gradient(120deg, #ff5eccdd, #ff75a8dd);
  color: white;
}

.section_holder {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-bottom: 3rem;
}

.section {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  height: min-content;
  border-radius: 0.5rem;
  overflow: hidden;
  z-index: 10;
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
    }
  }
}

.content-frame {
  animation-delay: 0.2s;
  margin-bottom: 3rem;
  color: white;
  text-align: center;
  box-sizing: border-box;
  width: unquote("min(100% - 2rem, 70rem)");
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

.delay04{
  animation-delay: 0.4s;
}

.delay06{
  animation-delay: 0.6s;
}
.delay08{
  animation-delay: 0.8s;
}



@media screen and (max-width: 600px) {
  .content-frame {
    .title {
      font-size: 30px;
    }

    .section_title {
      font-size: 25px;
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
        list-style: none;
      }

      ul {
        padding-left: 1rem;
      }
    }
  }
}
</style>