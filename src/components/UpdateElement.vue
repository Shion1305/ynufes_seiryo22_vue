<template>
  <div class="news">
    <div class="date_field">
      <div class="date">{{ this.getDate() }}</div>
      <div class="time">{{ this.getTime() }}</div>
    </div>
    <div class="label">
      <div class="title">{{ update.title }}</div>
      <div class="summary">{{ update.summary }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.news {
  transition: all 0.1s linear;
  box-sizing: border-box;
  display: flex;
  height: 5rem;
  padding: 5px;
  border-radius: 1.5rem;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  width: 100%;
  align-items: center;

  &:hover {
    transform: scale(0.97);
  }

  .date_field {
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;

    .date {
      flex-shrink: 0;
      text-align: center;
      padding-left: 0.2rem;
      width: 7rem;
    }

    .time {
      flex-shrink: 0;
      margin: 0 auto;
      text-align: center;
      width: 5rem;
    }

  }

  .label {
    display: flex;
    flex-direction: column;
    margin-left: 0.2rem;
    line-height: 1;

    .title {
      line-height: 2rem;
      height: 2rem;
      font-size: 1.5rem;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .summary {
      word-break: break-all;
      font-size: 1rem;
      height: 2rem;
      width: 100%;
      line-height: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  @media screen and (max-width: 900px) {
    .date_field {
      flex-direction: column;
      justify-content: center;
      padding-left: 0.3rem;
    }
  }

  @media screen and (max-width: 700px) {
    .date_field {
      flex-direction: row;
      padding-left: 0;
    }
  }
  @media screen and (max-width: 500px) {
    .date_field {
      flex-direction: column;
      padding-left: 0.3rem;
    }
  }
  @media screen and (max-width: 430px) {
    .date_field {
      font-size: 1.1rem;

      .date {
        width: 5rem;
      }
    }
  }
}

</style>

<script>
export default {
  name: "UpdateElement",
  props: {
    update: {
      type: Object,
      required: true
    }
  },
  methods: {
    getDate() {
      const date = new Date(this.update.date);
      return date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
    },
    getTime() {
      const date = new Date(this.update.date);
      return date.getHours() + ":" + (date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes());
    },
  }
}
</script>
<style scoped>

</style>