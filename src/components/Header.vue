<template>
  <header>
    <div class="header_top">
      <button id="mobile_toggle">
        <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"
                d="M4 7h22M4 15h22M4 23h22"></path>
        </svg>
      </button>
      <div id="site_title">
        <div class="logo1">
          <div>22清陵祭</div>
          <div>横浜国立大学 大学祭</div>
        </div>
        <div class="logo2">花笑み</div>
      </div>
    </div>
    <nav>
      <ul class="header_menu">
        <li>
          <router-link to="/" class="hover-underline-animation">トップ</router-link>
        </li>
        <li>
          <router-link to="/About" class="hover-underline-animation">清陵祭とは</router-link>
        </li>
        <li>
          <router-link to="/EventList" class="hover-underline-animation">企画を見る</router-link>
        </li>
        <li>
          <router-link to="/pamphlet" class="hover-underline-animation">パンフレット</router-link>
        </li>
        <li>
          <router-link to="/qa" class="hover-underline-animation">Q&A</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header"
}
</script>

<style scoped>

</style>