<script setup>
import sourceData from "@/assets/data.json"
import {defineProps, ref} from "vue";
import {useMeta} from "vue-meta";
import {event} from 'vue-gtag';

const props = defineProps({
  eventId: {type: Number, required: true},
});
const eventData = sourceData.find((data) => data.id === props.eventId);
useMeta({
  title: eventData.event_name + "(" + eventData.org_name + ")の企画詳細",
  description: "22清陵祭オンライン企画『" + eventData.event_name + "』(" + eventData.org_name + ") の企画詳細ページです。" + eventData.event_description
});
if (process.env.NODE_ENV === "production") {
  event("page:event_detail", {
    event_id: props.eventId,
  });
}
let previewPDF = ref(true)

function pdfLoaded(){
  console.log("PDFLOADED")
}

function pdfError() {
  console.log("error")
  previewPDF.value = false;
}
</script>
<template>
  <div class="content-frame">
    <div class="content-block fadeUp">
      <div class="top_area fadeLeft">
        <div class="icon_title_block">
          <div class="icon_area">
            <img
                :src="`/icon/${eventData.img}`"
                alt="icon"
                class="icon"
            />
          </div>
          <div class="space_between_icon_title"></div>
          <div class="title_block">
            <div class="title">
              {{ eventData.event_name }}
            </div>
            <hr/>
            <div class="organization_name">{{ eventData.org_name }}</div>
            <div class="tag_frame">
              <div :style="`background: ${eventData.tag_color}`" class="tag"><p>{{ eventData.type }}</p></div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail_block fadeLeft">
        <div>
          <h1>企画説明</h1>
          {{ eventData.event_description }}
        </div>
        <div id="contents-area-pdf">
          <a href="/data/test.pdf" class="download-button hover-to-shrink1" target="_blank" rel="noopener noreferer">
            <div>企画コンテンツ<br>(PDF)をみる!</div>
          </a>
          <object id="pdf-preview" v-if="previewPDF" @load="pdfLoaded" @error="pdfError" type="application/pdf" data="/data/test.pdf" width="100%" height="500">
            <p></p>
          </object>
        </div>
        <div>
          <h1>団体紹介</h1>
          {{ eventData.org_description }}
        </div>
      </div>
      <div class="willBeHere">企画コンテンツは<br>順次公開されます</div>
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

<style lang="scss" scoped>
.willBeHere {
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
      color: white;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-content: center;
      height: 2rem;
      padding: 0.2rem 0.7rem;
      border-radius: 20px;

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
    width: fit-content;
    margin: 1em auto 0.5em auto;
  }

  animation-delay: 0.6s;
  padding-bottom: 2rem;
  white-space: pre-wrap;
  box-sizing: border-box;
  width: 100%;
  font-size: large;


}

#contents-area-pdf {
  margin: 2em 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  #preview {
    width: 100%;
    height: 500px;
  }

  .download-button {
    margin: 1em auto;
    text-decoration: none;

    > div {
      border-radius: 1em;
      text-align: center;
      padding: 1em;
      font-size: 1.2em;
      color: white;
      background: linear-gradient(120deg, #ff5ecc, #ff75a8);
      box-shadow: 0 1.9px 2.5px rgba(0, 0, 0, 0.057),
      0 5px 6.1px rgba(0, 0, 0, 0.076),
      0 10.1px 11.4px rgba(0, 0, 0, 0.086);
    }
  }
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