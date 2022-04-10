<template>
  <div class="wrapper">
    <img class="background_img" src="@/assets/background_img.png" alt=""/>
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
    <div class="body-frame">
      <router-view/>
      <footer>
        <div class="footer_wrapper">
          <nav class="sitemap">
            <ul>
              <li><a>清陵祭について</a></li>
              <li><a>更新情報</a></li>
              <li><a>企画を探す</a></li>
              <li><a>ご協賛について</a></li>
              <li><a>Q&A</a></li>
              <li><a>相互リンク</a></li>
            </ul>
          </nav>
          <div class="footer_org">
            <div class="logos_area">
              <img src="https://ynu-fes.yokohama/wp-content/uploads/2020/02/cropped-YNUFES-%E3%83%AD%E3%82%B4.jpg"
                   alt="YNUFES logo"/>
              <div class="sns">
                <a><img class="hover-to-shrink" src="@/assets/sns/twitter_logo.png" alt="twitter"/></a>
                <a><img class="hover-to-shrink" src="@/assets/sns/instagram_logo.png" alt="instagram"/></a>
                <a><img class="hover-to-shrink" src="@/assets/sns/facebook_logo.png" alt="facebook"/></a>
              </div>
            </div>
            <div class="organ_area">
              <div>
                <h3>横浜国立大学<br>大学祭実行委員会</h3>
                〒240-0067<br>神奈川県横浜市保土ヶ谷区常盤台79-1
                <br>文化サークル棟1F
                <br>大学祭実行委員会室
                <br> ynu.fes.c☆gmail.com
                <br> ※☆を＠に変えてメールをお送りください。
              </div>
            </div>
          </div>
        </div>
        <div style="font-size: 0.8rem; padding-top:1rem">Copyright &#169;2022 横浜国立大学 大学祭実行委員会</div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

header {
  padding-top: 1rem;
  z-index: 50;
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

      li {
        line-height: 40px;
        align-items: center;
        height: 40px;
        border-radius: 20px;
        font-size: 20px;
        padding: 5px 10px;
        transition: background 0.5s ease-in-out;

        a {
          height: 100%;
          margin: 0 auto;
          text-decoration: none;
          color: white;
        }
      }

      li:hover {
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

.background_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  z-index: -10;
}

.hover-to-shrink {
  //animation-delay: 0.02s;
  transition: all 0.1s linear;
}

.hover-to-shrink:hover {
  transform: scale(0.9);
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 20%;
  left: 0;
  background-color: white;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.body-frame {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: clip;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 140px;
  padding-bottom: 220px;

  * {
    z-index: 10;
  }

  .content-frame {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}


footer {
  position: absolute; /*←絶対位置*/
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  color: white;
  background: #131516;
  width: 100%;
  z-index: 50;

  .footer_wrapper {
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .sitemap {
    flex-basis: 30%;
    font-size: 1.2rem;
    margin: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > ul {
      margin: auto;
    }
  }

  .footer_org {
    flex-basis: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


    .logos_area {
      margin: 1rem 0 0 2rem;
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;

      > img {
        margin-left: 0.3rem;
        width: 10rem;
        border-radius: 10px;
      }

      .sns {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;

        img {
          height: 3rem;
          @media screen and (max-width: 470px) {
            height: 2rem;
          }
        }
      }


      @media screen and (max-width: 470px) {
        flex-direction: column;
        margin-left: 0;
        .sns {
          flex-direction: row;
        }
        > img {
          width: 9rem;
        }
      }
      @media screen and (max-width: 470px) {
        > img {
          margin-bottom: 1rem;
          width: 7rem;
        }
      }
    }

    .organ_area {
      margin-top: 10px;
      font-size: 0.9rem;
      margin-left: 3rem;

      h3 {
        padding: 0;
        margin: 0;
        font-size: 1.2rem;
        line-height: 1.1;
      }

      @media screen and (max-width: 70rem) {
        margin-left: 1rem;
        font-size: 0.7rem;
      }
      @media screen and (max-width: 400px) {

        h3 {
          font-size: 18px;
        }
        margin-left: 0.5rem;
        font-size: 10px;
        line-height: 1.2;
      }
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
  .body-frame {
    padding-top: 80px;
  }
  .footer_org {
    flex-basis: auto;
  }

  nav.sitemap {
    display: none;
  }

  footer .footer_org {
    flex-basis: auto;
  }
}
</style>
