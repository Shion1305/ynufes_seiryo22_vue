<template>
  <div class="event_widget">
    <img :src="`/icon/${this.eventData.img}`" :alt="`icon for ${this.eventData.event_name} by ${this.eventData.org_name}`"/>
    <div class="type" :style="`background: ${this.eventData.tag_color};`" v-if="Boolean(this.eventData.type)">{{ this.eventData.type }}</div>
    <div class="meta_area">
      <h2>
        {{ eventData.event_name }}
      </h2>
      <hr>
      <div class="org_name">
        {{ eventData.org_name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventTile",
  props: {
    eventData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.event_widget {
  border-radius: 1rem;
  width: 12rem;
  background: #ffffff66;
  position: relative;
  text-overflow: ellipsis;

  .type {
    color: white;
    position: absolute;
    top: 10.8rem;
    margin: 0.3rem;
    border-radius: 1rem;
    padding: 0.2rem;
  }

  > img {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    width: 100%;
  }

  > .meta_area {
    color: black;
    padding-bottom: 10px;
    margin: 1.2rem 1rem;

    h2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      max-height: 2.8rem;
      overflow: hidden;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      font-size: 1.2rem;
      line-height: 1.4rem;
      padding: 0;
      margin: 0;
    }
  }

  > hr {
    margin: 0;
    padding: 0;
  }

  .tag_area {
    margin-top: 0.3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.2rem;

    > div {
      font-size: 0.8rem;
      color: white;
      padding: 0.3rem;
      border-radius: 0.6rem;
      background: #de31aa;
      white-space: nowrap;
    }
  }
}

@media screen and (max-width: 470px) {
  .event_widget {
    width: 160px;

    .type {
      top: 140px;
      font-size: 16px;
    }

    > .meta_area {
      margin: 13px 10px;

      h2 {
        font-size: 16px;
      }
    }

    .org_name {
      font-size: 15px;
    }
  }
}
</style>