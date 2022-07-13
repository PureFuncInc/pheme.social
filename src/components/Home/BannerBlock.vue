<template>
  <div class="banner">
    <div class="container">
      <div class="content">
        <div class="title">聆聽彼此的聲音<br>分享屬於我們的故事</div>
        <div class="description">
          透過聲音的交流，來了解彼此想法。使用感官來聆聽聲音的美學，聽見彼此內心的聲音。
        </div>
        <button class="downloadApp" @click="downloadApp()" @keydown="downloadApp()">立即下載APP</button>
      </div>
      <picture class="phone">
        <source />
        <img src="@/assets/home/phone_pc.png" alt="" loading="lazy"/>
      </picture>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import toDownloadApp from '@/utils/toDownloadApp';

export default defineComponent({
  name: 'BannerComponent',
  setup() {
    const downloadApp = () => toDownloadApp();
    return {
      downloadApp,
    };
  },
});
</script>

<style scoped lang="scss">
.banner {
  height: 1024px;
  background:
    url("@/assets/home/banner/background-pc-wave.png") no-repeat center,
    linear-gradient(316.04deg, #0086FF 35.9%, #07BAFE 106.37%);
  background-size: cover;
  padding: 0 64px;
  box-sizing: border-box;
  .container {
    margin: 0 auto;
    max-width: 1280px;
    height: 100%;
    display: flex;
    align-items: center;
    .content {
      width: 566px;
      color: #FFFFFF;
      text-align: left;
      .title {
        font-weight: 700;
        font-size: 48px;
      }
      .description {
        margin-top: 32px;
        font-size: 24px;
        font-weight: 500;
      }
      .downloadApp {
        margin-top: 50px;
        width: 180px;
        height: 55px;
        background: #FFFFFF;
        border-radius: 35px;
        font-weight: 500;
        font-size: 16px;
        color: $primary;
      }
    }
    .phone {
      width: 677px;
      height: 100%;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}

@include media(sm) {
  .banner {
    height: auto;
    padding: 92px 0 50px;
    .container {
      flex-direction: column;
      .content {
        padding: 0 24px;
        order: 2;
        width: auto;
        text-align: center;
        .title {
          font-size: 24px;
        }
        .description {
          margin-top: 16px;
          font-size: 18px;
        }
      }
      .phone {
        order: 1;
        width: 100%;
        height: 550px;
      }
    }
  }
}
</style>
