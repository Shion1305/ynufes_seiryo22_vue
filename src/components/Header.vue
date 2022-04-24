<template>
  <header>
    <div class="header_top">
      <button id="mobile_toggle">
        <svg aria-hidden="true" height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7h22M4 15h22M4 23h22" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
                stroke-width="2"></path>
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
        <router-link active-class="header_active" to="/">
          <li class="hover-underline-animation">トップ</li>
        </router-link>
        <router-link active-class="header_active" to="/about">
          <li class="hover-underline-animation">清陵祭とは</li>
        </router-link>
        <router-link active-class="header_active" routerLinkActive="" :to="{
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
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header"
}
</script>

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