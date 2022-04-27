<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import {useMeta} from "vue-meta";

export default {
  setup() {
    useMeta({title: '清陵祭とは',description:'横浜国立大学祭「22清陵祭」の公式ホームページのトップ画面です。今年のテーマは『花笑み』。'})
  }
}
</script>