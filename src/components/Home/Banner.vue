<template>
  <div class="banner">
    <div class="container">
      <div class="content">
        <div class="title">透過聲音交流</div>
        <div class="description">
          聆聽來自各地的聲音，透過聲音的傳輸，讓你擁有身歷其境的感受
        </div>
        <button class="downloadApp">立即下載APP</button>
      </div>
      <div class="pic" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
// import { useStore } from '@/store';
// import getDevice from '@/utils/getDevice';

export default defineComponent({
  name: 'HeaderComponent',
  setup() {
    return {};
    // const store = useStore();
    // const showNavList = computed(() => store.state.showNavList);
    // function downloadApp() {
    //   const device = getDevice();
    //   const url = device === 'ios'
    //     ? process.env.VUE_APP_IOS_APP_URL
    //     : process.env.VUE_APP_ANDROID_APP_URL;
    //   window.open(url, '', 'noopener=yes,noreferrer=yes');
    // }
    // return {
    //   showNavList,
    //   downloadApp,
    // };
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
      // min-width: 500px;
      height: 100%;
      background: url("@/assets/home/phone_pc.png") no-repeat center;
      background-size: contain;
    }
  }
}

@include media(sm) {
  .banner {
    height: auto;
    padding: 92px 24px 50px;
    .container {
      flex-direction: column;
      .content {
        order: 2;
        width: auto;
        text-align: center;
      }
      .pic {
        order: 1;
        height: 550px;
      }
    }
  }
}
</style>
