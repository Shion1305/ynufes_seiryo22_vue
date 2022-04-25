<template>
  <div class="content-frame">
    <div class="content-block fadeUp">
      <div class="top_area fadeLeft">
        <div class="icon_title_block">
          <div class="icon_area">
            <img
                :src="`/icon/${event.img}`"
                class="icon"
                alt="icon"
            />
          </div>
          <div class="space_between_icon_title"></div>
          <div class="title_block">
            <div class="title">
              {{ event.event_name }}
            </div>
            <hr/>
            <div class="organization_name">{{ event.org_name }}</div>
            <div class="tag_frame">
              <div class="tag"><p>{{ event.type }}</p></div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail_block fadeLeft">
        <h1>企画説明</h1>
        {{ event.event_description }}
      </div>
      <div class="willBeHere">企画コンテンツは<br>5/に公開されます</div>
      <!--      <h3 style="text-align: center">(リンク(WEB展示)の場合についてはプレビュー未対応です。)</h3>-->
      <!--      <h3 style="text-align: center">(↓Youtube(WEB展示)の場合)</h3>-->
      <!--      <div class="youtube_area">-->
      <!--        <iframe width="560" height="315" src="https://www.youtube.com/embed/S-s4LtLFQEo"-->
      <!--                title="YouTube video player"-->
      <!--                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"-->
      <!--                allowfullscreen></iframe>-->
      <!--      </div>-->
      <!--      <h3 style="text-align: center">(↓PDF(Web展示)の場合)</h3>-->
      <!--      <iframe src="/test_pdf.pdf" class="pdf_area"></iframe>-->
    </div>
  </div>
</template>

<script>

import sourceData from "@/assets/data.json"

export default {
  name: "EventDetailView",
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  computed: {
    event() {
      return sourceData.find(
          (data) => data.id === this.id
      );
    }
  }
}
</script>

<style lang="scss" scoped>
.willBeHere{
  margin: auto;
  width: fit-content;
  padding: 13px;
  border-radius: 30px;
  font-size: 1.5rem;
  color: white;
  border: solid white 3px;
  text-align: center;
  background: #ff5ecc;
}
.content-frame {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 2rem;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 140px - 220px);
}

.content-block {
  animation-delay: 0.2s;
  box-sizing: border-box;
  width: 100%;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  background: #f2f2f288;
  padding: 5rem 5rem;
  margin: 1rem;
  border-radius: 0.4rem;
  @media screen and (max-width: 768px) {
    padding: 0.5rem 0.5rem;
  }
}

.icon_title_block {
  display: flex;
  flex-direction: row;

  .icon_area {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }

  .icon {
    width: 15rem;
    height: auto;
    object-fit: contain;
    border-radius: 1rem;
  }

  .space_between_icon_title {
    width: 2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    .space_between_icon_title {
      display: none;
    }
  }
}


.title_block {
  margin-top: 10px;

  .title {
    font-size: 3rem;
    margin: 0;
    padding: 0;
    min-height: 3rem;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
    right: 0;
  }

  .organization_name {
    font-size: 1.5rem;
  }

  .tag_frame {
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
    gap: 5px 5px;
    box-sizing: border-box;

    .tag {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-content: center;
      height: 2rem;
      padding: 0.2rem 0.7rem;
      border-radius: 20px;
      background: #99999999;

      p {
        padding: 0;
        margin: auto;
      }
    }
  }
}

.pdf_area {
  width: 100%;
  height: 500px;
}

.youtube_area {
  position: relative;
  width: 100%; /*横幅いっぱいにwidthを指定*/
  height: 0; /*高さはpaddingで指定するため0*/
  padding-top: 56.25%; /*高さを指定（padding-bottomでも同様)*/
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.detail_block {
  h1 {
    width: 100%;
  }
  animation-delay: 0.6s;
  padding-bottom: 2rem;
  white-space: pre-wrap;
  box-sizing: border-box;
  width: 100%;
  font-size: large;
}

.top_area {
  animation-delay: 0.4s;
}

.content-block {
  box-sizing: border-box;
  width: 100%;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  background: #f2f2f288;
  padding: 5rem 5rem;
  margin: 1rem;
  border-radius: 0.4rem;
  @media screen and (max-width: 768px) {
    padding: 0.5rem 0.5rem;
  }
}

</style>