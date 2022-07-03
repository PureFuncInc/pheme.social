<template>
  <div class="banner">
    <div class="container">
      <div class="content">
        <div class="title">透過聲音交流</div>
        <div class="description">
          聆聽來自各地的聲音，透過聲音的傳輸，讓你擁有身歷其境的感受
        </div>
        <button class="downloadApp" @click="downloadApp()" @keydown="downloadApp()">立即下載APP</button>
      </div>
      <div class="pic" />
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
  background-image: url("@/assets/home/banner/background-pc-wave.png"),
    url("@/assets/home/banner/background-pc.png");
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
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
    .pic {
      width: 677px;
      height: 100%;
      background: url("@/assets/home/phone_pc.png") no-repeat center;
      background-size: contain;
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
      .pic {
        order: 1;
        width: 100%;
        height: 550px;
        background-size: auto 550px;
      }
    }
  }
}
</style>
