<script setup>
import {defineProps} from "vue";
import {event} from "vue-gtag";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  updateID: {
    type: Number,
    required: false,
  }
})
if (process.env.NODE_ENV === "production") {
  event("page:updates");
}
</script>
<template>
  <div id="content-frame">
    更新情報
    <div>
      <h1></h1>
    </div>
  </div>
</template>


<style lang="scss" scoped>
#content-frame {
  width: unquote("min(100% - 2rem, 60rem)");
  margin-inline: auto;
  background: white;
}
</style>