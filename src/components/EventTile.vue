<template>
  <div class="event_widget">
    <img :src="`/icon/${this.event.id}.jpeg`"  :alt="`icon for ${this.event.event_name} by ${this.event.org_name}`"/>
    <div class="type" v-if="Boolean(this.event.type)">{{this.event.type}}</div>
    <div class="meta_area">
      <h2>
        {{ event.event_name }}
      </h2>
      <hr>
      <div class="org_name">
        {{ event.org_name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventTile",
  props: {
    event: {
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
    background: #de31aa;
    border-radius: 1rem;
    padding: 0.2rem;
  }

  > img {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    width: 100%;
  }

  > .meta_area {
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
</style>