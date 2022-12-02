<template>
  <div class="footer">
    <div class="container">
      <div class="copyright">Copyright © 2022 Purefunc ltd. All rights reserved.</div>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    .copyright {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: $font_gray_light;
    }
    .link {
      display: flex;
      width: 228px;
      justify-content: space-between;
      >li {
        height: 20px;
        >a {
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
  // justify-content: center;
  // padding: 0 64px;
  // box-sizing: border-box;
  // background: #192038;
  // width: 100%;
  // color: #fff;
  // font-weight: 300;
  // font-weight: 300;
  // font-size: 14px;
}

@include media("sm") {
  .footer {
    padding: 0 24px;
  }
}
</style>
