<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup>
import {useMeta} from "vue-meta";
import {event} from "vue-gtag";

useMeta({title: '清陵祭とは', description: "「22清陵祭」を開催するにあたりご協賛くださった企業の一覧を掲載しています。数多くの企業の皆様に多大なご協力を賜りました。心より感謝申し上げます。"})
if (process.env.NODE_ENV === "production") {
  event("page:about");
}
</script>