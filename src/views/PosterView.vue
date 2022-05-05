<script setup>
import {useMeta} from "vue-meta";
import {event} from "vue-gtag";

useMeta({
  title: "ポスター展覧会",
  description: "2月頃に22清陵祭のポスター案を募集致しました。たくさんのご応募、誠にありがとうございました。このページでは応募作品全3点を紹介します!"
});
if (process.env.NODE_ENV === "production") {
  event("page:poster");
}
</script>
<template>
  <div></div>
</template>


<style scoped>

</style>