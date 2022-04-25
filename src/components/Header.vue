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
          <router-link active-class="header_active" :to="{
            name:'event_list'
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
    <div>
      <div id="mobile_menu" v-show="mToggled">
        <div>
          <router-link active-class="mLink-active" @click="closeMenu" to="/">
            <div>ホーム</div>
          </router-link>
          <router-link active-class="mLink-active" @click="closeMenu" to="/about">
            <div>清陵祭とは</div>
          </router-link>
          <router-link active-class="mLink-active" @click="closeMenu" to="/events">
            <div>企画を探す</div>
          </router-link>
          <router-link active-class="mLink-active" @click="closeMenu" to="/pamphlet">
            <div>パンフレット</div>
          </router-link>
          <router-link active-class="mLink-active" @click="closeMenu" to="/sponsors">
            <div>ご協賛について</div>
          </router-link>
          <router-link active-class="mLink-active" @click="toggleMenu" to="/others">
            <div>他大学リンク</div>
          </router-link>
        </div>
        <div class="sns">
          <a href="https://twitter.com/ynu_fes" target="_blank"><img alt="twitter"
                                                                     class="hover-to-shrink"
                                                                     src="@/assets/sns/twitter_logo.png"/></a>
          <a href="https://www.instagram.com/ynu_fes" target="_blank"><img alt="instagram"
                                                                           class="hover-to-shrink"
                                                                           src="@/assets/sns/instagram_logo.png"/></a>
          <a href="https://www.facebook.com/ynufes" target="_blank"><img alt="facebook"
                                                                         class="hover-to-shrink"
                                                                         src="@/assets/sns/facebook_logo.png"/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  methods: {
    toggleMenu() {
      console.log("toggled");
      this.mToggled = !this.mToggled;
    },
    closeMenu() {
      this.mToggled = false;
    }
  },
  data() {
    return {mToggled: false};
  },
}
</script>

<style lang="scss" scoped>

#header_wrapper {
  z-index: 100;
  width: 100vw;
  position: fixed;
}

#mobile_menu {
  display: none;
  flex-direction: column;
  z-index: -10;
  padding-bottom: 30px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: linear-gradient(120deg, #ff5eccee, #ff75a8ee);
  position: absolute;
  padding-top: 80px;
  width: 100vw;
  top: 0;
  animation-name: headerAnimation;
  animation-duration: 0.4s;
  @keyframes headerAnimation {
    from {
      opacity: 0;
      transform: translateY(-300px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  > div {
    display: flex;
    font-size: 20px;
    margin: 0 auto;
    width: unquote("min(100vw - 2rem,500px)");
    justify-content: space-around;
    flex-wrap: wrap;

    > a {
      border-radius: 25px;
      color: white;
      text-decoration: white;
      white-space: nowrap;
      height: 50px;
      width: 150px;
      display: flex;
      justify-content: center;
      align-items: center;

      > div {
        text-align: center;
      }
    }
  }

  .sns {
    padding-top: 20px;
    width: 300px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: auto;
    justify-content: center;

    img {
      width: 60px;
    }
  }
}

.mLink-active {
  background: white;

  > div {
    color: #ff5ecc;
  }
}

@media screen and (max-width: 670px) {
  #mobile_menu {
    display: flex;
  }
}

.header_active {
  background: #ff3b90;
}

header {
  z-index: 100;
  padding-top: 1rem;
  width: 100%;
  color: white;
  //background: #e31bb1;
  //background: linear-gradient(120deg, #e31bb1, #e810b2);
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