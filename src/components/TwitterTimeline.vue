<template>
  <a class="twitter-timeline" data-height="450" data-lang="ja" data-width="350"
     href="https://twitter.com/ynu_fes?ref_src=twsrc%5Etfw">Tweets by ynu_fes</a>
</template>

<script>
export default {
  name: "TwitterTimeline",
  created: function () {
    let twitterScript = document.createElement('script');
    twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    document.head.appendChild(twitterScript);
  }
}
</script>

<style scoped>

</style>