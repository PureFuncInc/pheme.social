<template>
  <div class="download-block">
    <div class="title">$PHEME</div>
    <div class="subtitle">
      Social App Features in Pheme were designed to playing pet games and introducing token
      economics for adaptive cyclling.
    </div>
    <pheme-coin class="pheme-coin" />
    <qr-block class="qr-block" />
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
  margin-top: 60px;
  padding-top: 60px;
  .title {
    font-weight: 500;
    font-size: 32px;
    height: 46px;
    line-height: 46px;
    color: $font_dark;
  }
  .subtitle {
    margin: 16px auto 0;
    font-weight: 400;
    font-size: 20px;
    width: 697px;
    line-height: 40px;
    color: $font_gray_light;
  }
  .pheme-coin {
    margin: -14px auto 0;
  }
  .qr-block {
    margin: 16px auto 0;
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
