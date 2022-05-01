<template>
  <div class="content-frame">
    <div id="controller">
      <div id="type_selector" class="fadeUp">
        <div :class="{'active-type':this.mode===1}" @click="setType(1)">全て</div>
        <div :class="{'active-type':this.mode===2}" @click="setType(2)">本部企画</div>
        <div :class="{'active-type':this.mode===3}" @click="setType(3)">団体企画</div>
      </div>
    </div>
    <div id="events_block" class="fadeUp">
      <router-link :key="event.key" v-for="event in eventData"
                   :to="{
          name: 'event_detail',
          params: { id: event.id },
        }">
        <EventTile :event="event"></EventTile>
      </router-link>
    </div>
    <!--      </router-link>-->
  </div>
</template>

<script>
import EventTile from "@/components/EventTile";
import data from "@/assets/data.json";
import {useMeta} from "vue-meta";

export default {
  name: "EventListView",
  components: {EventTile},
  data() {
    return {mode: 0}
  },
  computed: {
    eventData() {
      switch (this.mode) {
        case 3:
          return data.filter(x => x.id < 2000);
        case 2:
          return data.filter(x => x.id > 2000);
        case 1:
        default:
          return data;
      }
    }
  },
  props: {
    type: {
      type: Number,
      required: false
    }
  },
  mounted() {
    if (isNaN(this.type)) {
      this.mode = 1;
    } else {
      this.mode = this.type
    }
    const events_block = document.getElementById("events_block");
    document.getElementById("type_selector").addEventListener("click", function () {
      events_block.classList.remove("fadeUp");
      setTimeout(function () {
        events_block.classList.add("fadeUp");
      });
    })
  },
  methods: {
    setType(t) {
      if (this.mode !== t) {
        this.mode = t;
      }
    },
  },
  setup() {
    useMeta({title: '企画一覧', description: '22清陵祭で開催するオンライン企画を一覧で紹介しています。それぞれの企画を選択するとその詳細を確認できます。'})
  }
}
</script>
<style lang="scss" scoped>
#controller {
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
}

#type_selector {
  animation-delay: 0.2s;
  display: flex;
  flex-direction: row;
  width: fit-content;
  border-radius: 20px;
  background: linear-gradient(90deg,#e810b2,#f25ad4);

  margin: 0 auto;
  padding: 5px;
  color: white;

  > div {
    cursor: pointer;
    padding: 12px;
    font-size: 30px;
    border-radius: 20px;
  }
}

.active-type {
  color: #e810b2;
  background: white;
}

#events_block {
  margin-top: 20px;
  animation-delay: 0.4s;
  box-sizing: border-box;
  justify-content: center;
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 70rem;
  width: 100%;
}

.content-frame {
  display: flex;
  flex-direction: column;
  width: unquote("min(100%, 70rem)");
  margin-inline: auto;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

@media screen and (max-width: 400px) {
  #type_selector {
    > div {
      font-size: 23px;
    }
  }
}
</style>