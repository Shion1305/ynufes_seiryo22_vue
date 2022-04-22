<template>
  <TwitterFeed src="https://twitter.com/ynu_fes?ref_src=twsrc%5Etfw"></TwitterFeed>

</template>

<script>
import TwitterFeed from "vuejs-twitter-feed";

export default {
  name: "TweetTimeline",
  components: {
    TwitterFeed
  }
}
</script>

<style scoped>

</style>