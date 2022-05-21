<template>
  <footer>
    <div class="footer_wrapper">
      <nav class="sitemap">
        <ul>
          <li>
            <router-link to="/about">清陵祭について</router-link>
          </li>
          <li>
            <router-link to="/update">更新情報</router-link>
          </li>
          <li>
            <router-link to="/events">企画を探す</router-link>
          </li>
          <li>
            <router-link to="/sponsors">ご協賛について</router-link>
          </li>
          <li>
            <router-link to="/others">他大学祭の紹介</router-link>
          </li>
        </ul>
      </nav>
      <div class="footer_org">
        <div class="logos_area">
          <img alt="YNUFES logo"
               src="https://ynu-fes.yokohama/wp-content/uploads/2020/02/cropped-YNUFES-%E3%83%AD%E3%82%B4.jpg"/>
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
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer"
}
</script>

<style lang="scss" scoped>
footer {
  position: absolute;
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
      list-style: none;

      > li > a {
        color: white;
        text-decoration: none;
      }
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
        }
      }

      @media screen and (max-width: 470px) {
        flex-direction: column;
        margin-left: 0;
        .sns {
          flex-direction: row;

          img {
            height: 2rem;
          }
        }
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