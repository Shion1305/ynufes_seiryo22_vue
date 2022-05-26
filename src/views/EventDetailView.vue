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

function pdfLoaded() {
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
        <div v-if="eventData.event_type===1" id="contents-area-pdf">
          <a :href="`/data/${eventData.pdf}`" class="standard-button hover-to-shrink1" rel="noopener noreferer"
             target="_blank">
            <div>企画コンテンツ<br>(PDF)をみる!</div>
          </a>
          <object v-if="previewPDF" id="pdf-preview" :data="`/data/${eventData.pdf}`" height="500" type="application/pdf"
                  width="100%" @error="pdfError" @load="pdfLoaded">
            <p></p>
          </object>
        </div>
        <div v-if="eventData.event_type===2" id="contents-area-youtube">
          <iframe id="youtube-iframe" :src="`https://www.youtube.com/embed/${eventData.youtube}`" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  height="auto"
                  title="YouTube video player"
                  width="100%"></iframe>
          <div>一部動画は公開まで非公開の状態となっております。<br>動画の公開期間は6/12(日)24:00までです。</div>
        </div>
        <div v-if="eventData.event_type===3" id="contents-area-link">
          <a :href="`${eventData.link}`" class="standard-button hover-to-shrink1" rel="noopener noreferer"
             target="_blank">
            <div>企画ページを<br>みる!(外部サイト)</div>
          </a>
        </div>
        <div v-if="eventData.org_name!=='清陵祭実行委員会'">
          <div id="org_title"><p>団体紹介</p>
            <div>{{ eventData.org_name }}</div>
          </div>
          {{ eventData.org_description }}
          <div id="sns-area">
            <a v-if="eventData.twitter!==''" :href="`https://twitter.com/${eventData.twitter.replace('@','')}`"
               class="sns_block hover-to-shrink1"
               target="_blank">
              <img alt="twitter_logo" src="@/assets/sns/twitter_logo.webp"/>
            </a>
            <a v-if="eventData.instagram!==''" :href="`https://instagram.com/${eventData.instagram.replace('@','')}`"
               class="sns_block hover-to-shrink1"
               target="_blank">
              <img alt="twitter_logo" src="@/assets/sns/instagram_logo.webp"/>
            </a>
            <a v-if="eventData.website!==''" :href="`${eventData.website}`" class="sns_block hover-to-shrink1"
               target="_blank">
              <img alt="twitter_logo" src="/icon/icon_link.png"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-frame {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 140px - 220px);
  font-size: 14px;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
  @media screen and (max-width: 400px) {
    font-size: 10px;
  }
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
    font-size: 3em;
    margin: 0;
    padding: 0;
    min-height: 3em;
    font-weight: bold;
    @media screen and (max-width: 768px) {
      font-size: 2em;
      min-height: 0;
    }
    right: 0;
  }

  .organization_name {
    font-size: 1.5em;
  }

  .tag_frame {
    display: flex;
    flex-wrap: wrap;
    font-size: 1em;
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
  animation-delay: 0.6s;
  padding-bottom: 2rem;
  white-space: pre-wrap;
  box-sizing: border-box;
  width: 100%;
  font-size: 1.5em;

  h1 {
    background: #EF60A3;
    color: white;
    padding: 0.3em 1em;
    border-radius: 0.3em;
    width: fit-content;
    margin: 1em auto 0.5em auto;
  }
}

#org_title {
  font-size: 2em;
  background: #EF60A3;
  color: white;
  width: fit-content;
  padding: 0.3em;
  border-radius: 0.3em;
  margin: 1em auto 0.5em auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0 0.3em;
  align-items: center;

  p {
    margin: 0 auto;
  }

  > div {
    margin: 0 auto;
    border-radius: 0.3em;
    color: #EF60A3;
    font-size: 0.8em;
    background: white;
    padding: 0.1em;
  }
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
}

.standard-button {
  margin: 1em auto;
  text-decoration: none;

  > div {
    width: fit-content;
    border-radius: 1em;
    text-align: center;
    padding: 1em;
    color: white;
    font-size: 1.5em;
    background: linear-gradient(120deg, #ff5ecc, #ff75a8);
    box-shadow: 0 1.9px 2.5px rgba(0, 0, 0, 0.057),
    0 5px 6.1px rgba(0, 0, 0, 0.076),
    0 10.1px 11.4px rgba(0, 0, 0, 0.086);
  }
}

#contents-area-youtube {
  text-align: center;
  margin: 3em 0;

  #youtube-iframe {
    aspect-ratio: 1.78;
  }
}

#contents-area-link {
  margin: 2em 0;
  width: 100%;
  display: flex;
  flex-direction: column;
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

#sns-area {
  display: flex;
  justify-content: center;
  font-size: unquote("min(1vw,15px)");

  .sns_block {
    padding: 1em;
    display: flex;
    flex-direction: column;
    font-size: 10px;

    img {
      margin: auto;
      width: unquote("min(80px,25vw)");
      object-fit: cover;
    }

  }
}
</style>