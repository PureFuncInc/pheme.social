<template>
  <div class="qrBlock">
    <div class="download-btn">
      <a class="google-play" :href="androidLink" target="_blank" rel="noreferrer noopener">
        <img src="@/assets/home/downloadBlock/googlePlay.png" alt="google-play"/>
      </a>
      <a class="apple-play" :href="iosLink" target="_blank" rel="noreferrer noopener">
        <img src="@/assets/home/downloadBlock/appleStore.png" alt="apple-play"/>
      </a>
    </div>
    <img class="qr" :src="qrCodeSrc" alt="link.linkUrl" loading="lazy" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, onMounted,
} from 'vue';
import QRCodeStyling, {
  DrawType,
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
} from 'qr-code-styling';
import getDevice from '@/utils/getDevice';

class QrCodeOption {
  private data: string;

  private image: string;

  constructor(data: string, image: string) {
    this.data = data;
    this.image = image;
  }

  serialize() {
    return {
      width: 256,
      height: 256,
      type: 'svg' as DrawType,
      data: this.data,
      image: this.image,
      margin: 10,
      qrOptions: {
        typeNumber: 0 as TypeNumber,
        mode: 'Byte' as Mode,
        errorCorrectionLevel: 'M' as ErrorCorrectionLevel,
      },
      imageOptions: {
        hideBackgroundDots: true,
        crossOrigin: 'anonymous',
        margin: 3,
      },
      dotsOptions: {
        color: '#35495E',
        type: 'dots' as DotType,
      },
      backgroundOptions: {
        color: '#ffffff',
      },
      cornersSquareOptions: {
        color: '#35495E',
        type: 'extra-rounded' as CornerSquareType,
      },
      cornersDotOptions: {
        color: '#35495E',
        type: 'dot' as CornerDotType,
      },
    };
  }
}

export default defineComponent({
  name: 'QrBlock',
  setup() {
    const device = getDevice();
    const qrLink = device === 'ios'
      ? process.env.VUE_APP_IOS_APP_URL
      : process.env.VUE_APP_ANDROID_APP_URL;
    const androidLink = process.env.VUE_APP_ANDROID_APP_URL;
    const iosLink = process.env.VUE_APP_IOS_APP_URL;
    const qrCodeSrc = ref('');

    function blobToDataURL(blob: Blob | null) {
      const fr = new FileReader();
      fr.readAsDataURL(blob as Blob);
      return new Promise((resolve) => {
        fr.onload = (e) => resolve(e.target?.result as string);
      });
    }

    onMounted(async () => {
      const img = (await import('@/assets/app.png')).default;
      qrCodeSrc.value = (await blobToDataURL(
        await new QRCodeStyling(new QrCodeOption(qrLink, img).serialize()).getRawData('svg'),
      )) as string;
    });
    return {
      androidLink,
      iosLink,
      qrCodeSrc,
      onMounted,
    };
  },
});
</script>

<style scoped lang="scss">
.qrBlock {
  display: flex;
  width: 450px;
  height: 170px;
  justify-content: space-between;
  align-items: center;
  .download-btn {
    width: 202px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    a {
      display: block;
      width: 100%;
      height: 60px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .qr {
    width: 145px;
    height: 145px;
  }
}
@include media(sm) {
  .qrBlock {
    width: 153px;
    height: 120px;
    .qr {
      display: none;
    }
  }
}
</style>
