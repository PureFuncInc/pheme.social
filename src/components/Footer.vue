<template>
  <div class="footer">
    <div class="container">
      <ul class="link">
        <li>
          <a
            class="termsOfUse"
            href="https://pheme.social/terms.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            Terms of use
          </a>
        </li>
        <li>
          <a
            class="privacyPolicy"
            href="https://pheme.social/privacy.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            Privacy Policy
          </a>
        </li>
      </ul>
      <div class="copyright">Copyright © 2022 Purefunc ltd. All rights reserved.</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterComponent',
});
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: 100px;
  .container {
    max-width: 840px;
    height: 100%;
    margin: 0 auto;
    padding: 0 32px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .copyright {
      display: flex;
      order: 1;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: $font_gray_light;
    }
    .link {
      order: 2;
      display: flex;
      width: 228px;
      justify-content: space-between;
      > li {
        height: 20px;
        > a {
          display: block;
          font-weight: 500;
          font-size: 16px;
          height: 100%;
          line-height: 20px;
          color: $font_gray;
        }
      }
    }
  }
}

@include media("md") {
  .footer {
    height: auto;
    padding-bottom: 30px;
    .container {
      display: block;
      .copyright {
        margin-top: 40px;
        display: block;
        width: 100%;
        text-align: center;
        font-size: 12px;
        line-height: 15px;
      }
      .link {
        width: 204px;
        margin: 0 auto;
        > li {
          height: 18px;
          > a {
            font-size: 14px;
            line-height: 18px;
          }
        }
      }
    }
  }
}
</style>
