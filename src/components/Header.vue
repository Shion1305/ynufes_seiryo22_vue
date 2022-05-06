<script setup>
// eslint-disable-next-line no-unused-vars
import {ref, watch} from "vue";
// eslint-disable-next-line no-unused-vars
import {useRoute} from "vue-router";

let mToggled = ref(false);

function toggleMenu() {
  mToggled.value = !mToggled.value;
}

function closeMenu() {
  mToggled.value = false;
  console.log(mToggled.value);
}

const route = useRoute();
watch(route, () => {
  closeMenu()
});
</script>
<template>
  <div id="header_wrapper">
    <header>
      <div class="header_top">
        <button id="mobile_toggle" @click="toggleMenu">
          <svg aria-hidden="true" height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7h22M4 15h22M4 23h22" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
                  stroke-width="2"></path>
          </svg>
        </button>
        <router-link id="site_title" to="/" @click="closeMenu">
          <div class="logo1">
            <div>22清陵祭</div>
            <div>横浜国立大学 大学祭</div>
          </div>
          <div class="logo2">花笑み</div>
        </router-link>
      </div>
      <nav>
        <ul class="header_menu">
          <router-link active-class="header_active" to="/">
            <li class="hover-underline-animation">トップ</li>
          </router-link>
          <router-link active-class="header_active" to="/about">
            <li class="hover-underline-animation">清陵祭とは</li>
          </router-link>
          <router-link active-class="header_active" routerLinkActive="" :to="{
            name:'event_list',
            params:{type:1}
          }">
            <li class="hover-underline-animation">企画を見る</li>
          </router-link>
          <router-link active-class="header_active" to="/pamphlet">
            <li class="hover-underline-animation">パンフレット</li>
          </router-link>
          <router-link active-class="header_active" to="/sponsors">
            <li class="hover-underline-animation">ご協賛について</li>
          </router-link>
        </ul>
      </nav>
    </header>
    <transition name="mobileMenu">
      <div id="mobile_menu" v-show="mToggled">
        <router-link active-class="selected" to="/" @click="closeMenu">ホーム</router-link>
        <router-link active-class="selected" to="/about" @click="closeMenu">清陵祭とは</router-link>
        <router-link active-class="selected" to="/update" @click="closeMenu">更新情報</router-link>
        <router-link active-class="selected" :to="{name:'event_list',params:{type:1}}" @click="closeMenu">企画を見る
        </router-link>
        <router-link active-class="selected" to="/pamphlet" @click="closeMenu">パンフレット</router-link>
        <router-link active-class="selected" to="/sponsors" @click="closeMenu">ご協賛について</router-link>
        <router-link active-class="selected" to="/others" @click="closeMenu">他大学祭の紹介</router-link>

        <div class="sns">
          <a href="https://twitter.com/ynu_fes" target="_blank"><img alt="twitter"
                                                                     class="hover-to-shrink"
                                                                     src="@/assets/sns/twitter_logo.webp"/></a>
          <a href="https://www.instagram.com/ynu_fes" target="_blank"><img alt="instagram"
                                                                           class="hover-to-shrink"
                                                                           src="@/assets/sns/instagram_logo.webp"/></a>
          <a href="https://www.facebook.com/ynufes" target="_blank"><img alt="facebook"
                                                                         class="hover-to-shrink"
                                                                         src="@/assets/sns/facebook_logo.png"/></a>
        </div>
      </div>
    </transition>
    <transition name="mobileBack">
      <div class="header-back" v-show="mToggled" @click="closeMenu"/>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.header_active {
  background: #ff3b90;
}

header {
  padding-top: 1rem;
  z-index: 100;
  width: 100%;
  position: fixed;
  color: white;
  background: linear-gradient(120deg, #ff5ecc, #ff75a8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    white-space: nowrap;
  }

  nav {
    width: 100%;
    max-width: 70rem;

    .header_menu {
      display: flex;
      justify-content: space-evenly;
      margin: 0;
      list-style: none;
      padding: 0;
      color: #aba499;

      a {
        line-height: 40px;
        align-items: center;
        height: 40px;
        border-radius: 20px;
        font-size: 20px;
        padding: 5px 10px;
        text-decoration: none;
        transition: background 0.5s ease-in-out;

        li {
          height: 100%;
          margin: 0 auto;
          text-decoration: none;
          color: white;
        }
      }

      a:hover {
        background: #ff3b90;
      }
    }
  }
}

#header_wrapper {
  position: relative;
}

.header-back {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -10;
  background: #0009;
}


.mobileBack-enter-active, .mobileBack-fade-active {
  transition: all .3s ease-in-out;
}

.mobileBack-enter-from, .mobileBack-leave-to {
  opacity: 0;
}

.mobileMenu-enter-active, .mobileMenu-fade-active {
  transition: all .3s ease-in-out;
}

.mobileMenu-enter-from, .mobileMenu-leave-to {
  transform: translateX(-80vw);
}

#mobile_menu {
  z-index: 100;
  transition: all 0.5s 0s ease-in-out;
  padding: 85px 20px;
  width: unquote("min(220px, 80vw)");
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  background: linear-gradient(120deg, #ff85efdd, #ff66d4dd);

  a {
    color: white;
    text-decoration: none;
    font-size: 1.4em;
    padding: 10px;
    text-align: center;
    border-radius: 1em;
  }

  a.selected {
    background: white;
    color: #ff80b0dd;
  }

  .sns {
    display: flex;
    width: 100%;

    a {
      flex-basis: 30%;
      object-fit: contain;
      overflow: hidden;

      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }
}

.header_top {
  display: flex;
  flex-direction: row;
  width: 100%;
}

#mobile_toggle {
  color: white;
  background: none;
  border: none;
  display: none;
  padding: 10px;
}

#site_title {
  text-decoration: none;
  color: white;
  height: 70px;
  font-family: 'Kaisei Decol', serif;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo1 {
    > div:first-of-type {
      padding: 0;
      height: 35px;
      line-height: 1;
      font-size: 35px;
      margin-bottom: 3px;
      @media screen and (max-width: 400px) {
        font-size: 28px;
        height: 28px;
      }
    }

    > div:nth-of-type(2) {
      margin-top: 3px;
      font-size: 15px;
      @media screen and (max-width: 400px) {
        font-size: 12px;
      }
    }
  }

  .logo2 {
    margin-left: 40px;
    font-size: 50px;

    @media screen and (max-width: 400px) {
      font-size: 40px;
    }
  }
}

@media screen and (max-width: 670px) {
  .header-back {
    display: initial;
  }
  #mobile_toggle {
    display: inline;
  }
  #site_title .logo2 {
    margin-left: 8px;
  }
  header {
    padding-top: 0.3rem;
  }
  header nav {
    display: none;
  }
}
</style>