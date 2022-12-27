<template>
  <div class="download-block">
    <div class="title">$PHEME</div>
    <div class="subtitle">
      Social App Features in Pheme were designed to playing pet games and introducing token
      economics for adaptive cyclling.
    </div>
    <pheme-coin class="pheme-coin" />
    <download-btn class="download-btn" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PhemeCoin from '@/components/Home/DownloadBlock/PhemeCoin.vue';
import DownloadBtn from '@/components/Home/DownloadBlock/DownloadBtn.vue';

export default defineComponent({
  name: 'DownloadBlock',
  components: {
    PhemeCoin,
    DownloadBtn,
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
  .download-btn {
    margin: 16px auto 0;
    width: 442.67px;
    height: 64px;
  }
}
@include media(md) {
  .download-block {
    margin-top: 50px;
    padding-top: 50px;
    .title {
      font-size: 22px;
      height: auto;
      line-height: 32px;
    }
    .subtitle {
      font-size: 16px;
      width: calc(100% - 48px);
      max-width: 476px;
      line-height: 22px;
    }
    .pheme-coin {
      margin: 28px auto 0;
    }
    .download-btn {
      margin: 40px auto 0;
      width: 229.33px;
      height: 32px;
    }
  }
}
</style>
