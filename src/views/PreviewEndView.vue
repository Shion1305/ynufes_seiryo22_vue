<script setup>
import {useMeta} from "vue-meta";
import {event} from "vue-gtag";
useMeta({title: 'プレビュー', description: '企画団体用のプレビューサイトです。プレビューサイトの公開は終了しました。'})
if (process.env.NODE_ENV === "production") {
  event("page:preview_end");
}
</script>
<template>
  <div>
    <h1>企画担当者の皆様へ</h1>
    <h2>プレビューサイトの運営は終了いたしました。<br>企画情報の変更は22清陵祭実行委員会総務までよろしくお願いします。</h2>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  width: 60rem;
  border-radius: 5rem;
}
</style>