<template>
  <h1>event page</h1>
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

<style scoped>

</style>