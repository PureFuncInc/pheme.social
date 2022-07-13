<template>
  <div class="download-block">
    <div class="title">獲得 PHEME 幣</div>
    <div class="subtitle">聆聽來自各地的聲音，透過聲音的傳輸，讓你擁有身歷其境的感受</div>
    <pheme-coin class="pheme-coin" />
    <qr-block class="qr-block" />
    <div class="download-slogan">立即下載PHEME，一起聆聽來自各地的聲音，有任何想法、觀點都可以直接交流。</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PhemeCoin from '@/components/Home/DownloadBlock/PhemeCoin.vue';
import QrBlock from '@/components/Home/DownloadBlock/QrBlock.vue';

export default defineComponent({
  name: 'DownloadBlock',
  components: {
    PhemeCoin,
    QrBlock,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.download-block {
  height: 1013px;
  padding-top: 120px;
  box-sizing: border-box;
  .title {
    font-weight: 500;
    font-size: 32px;
    height: 46px;
    line-height: 46px;
  }
  .subtitle {
    margin: 10px auto 0;
    font-weight: 400;
    font-size: 20px;
    width: 450px;
    line-height: 29px;
    color: $dark03;
  }
  .pheme-coin {
    margin: 50px auto 0;
  }
  .qr-block {
    margin: 88px auto 0;
  }
  .download-slogan {
    margin: 60px 25px 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: $dark03;
  }
}
@include media(sm) {
  .download-block {
    height: 619px;
    padding-top: 70px;
    .title {
      font-size: 20px;
      height: 29px;
      line-height: 29px;
    }
    .subtitle {
      margin: 12px 24px 0;
      font-size: 14px;
      width: auto;
      line-height: 22px;
    }
    .pheme-coin {
      margin: 35px auto 0;
    }
    .qr-block {
      margin: 50px auto 0;
    }
    .download-slogan {
      margin: 40px 25px 0;
      font-size: 14px;
      line-height: 22px;
    }
  }
}
</style>
