<template>
  <div class="content-frame">
    <div id="controller">
      <div id="type_selector">
        <div :class="{'active-type':this.mode===1}" @click="setType(1)">全て</div>
        <div :class="{'active-type':this.mode===2}" @click="setType(2)">本部企画</div>
        <div :class="{'active-type':this.mode===3}" @click="setType(3)">団体企画</div>
      </div>
    </div>
    <div class="events_block fadeUp">
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

export default {
  name: "EventListView",
  components: {EventTile},
  data() {
    return {mode: 0}
  },
  computed: {
    eventData() {
      switch (this.mode) {
        case 2:
          return data.filter(x => x.id < 2000);
        case 3:
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
  },
  methods: {
    setType(t) {
      this.mode = t
    }
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
  display: flex;
  flex-direction: row;
  width: fit-content;
  border-radius: 20px;
  background: #e810b2;
  margin: 0 auto;
  padding: 5px;
  color: white;

  > div {
    padding: 12px;
    font-size: 30px;
    border-radius: 20px;
  }
}

.active-type {
  color: #e810b2;
  background: white;
}

.events_block {
  animation-delay: 0.2s;
  box-sizing: border-box;
  justify-content: center;
  gap: 0.5rem;
  margin: 10px;
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
</style>