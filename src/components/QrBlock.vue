<template>
  <div class="qrBlock">
    <ul>
      <li v-for="(link, index) in qrLinkList.data" :key="`${link.title}-${link.qrCodeSrc}`">
        <div class="title">{{ link.title }}</div>
        <div :ref="`qrCanvas${index}`"></div>
        <a :href="link.linkUrl" target="_blank" rel="noopener">
          <img :src="link.qrCodeSrc" :alt="link.linkUrl" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, PropType, reactive, onMounted,
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

interface Link {
  title: string;
  linkUrl: string;
}

class QrCodeOption {
  private data: string;

  private image: string;

  constructor(data: string, image = 'https://pheme.social/static/app.png') {
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
  props: {
    linkList: {
      type: Array as PropType<Array<Link>>,
      default: () => [
        {
          title: '',
          linkUrl: '',
        },
      ],
    },
  },
  setup(props) {
    const qrLinkList: {
      data: {
        qrCodeSrc?: string;
        title?: string;
        linkUrl?: string;
      }[];
    } = reactive({ data: [] });

    function blobToDataURL(blob: Blob | null) {
      const fr = new FileReader();
      fr.readAsDataURL(blob as Blob);
      return new Promise((resolve) => {
        fr.onload = (e) => resolve(e.target?.result as string);
      });
    }

    onMounted(async () => {
      const { linkList } = props;
      qrLinkList.data = await Promise.all(
        linkList.map(async (el) => ({
          ...el,
          qrCodeSrc: (await blobToDataURL(
            await new QRCodeStyling(new QrCodeOption(el.linkUrl).serialize()).getRawData('svg'),
          )) as string,
        })),
      );
    });
    return {
      qrLinkList,
      onMounted,
    };
  },
});
</script>

<style scoped lang="scss">
.qrBlock {
  width: 100%;
  padding: 88px 0;
  ul {
    max-width: 896px;
    list-style-type: none;
    margin: 0 auto;
    padding: 0 64px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    li {
      width: 128px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        width: fit-content;
        padding: 2px 16px;
        border: 1px solid #fff;
        color: #fff;
        border-radius: 8px;
        font-size: 22px;
      }
      a {
        img {
          border-radius: 12px;
          margin-top: 16px;
          width: 128px;
          height: 128px;
          object-fit: contain;
        }
      }
    }
  }
}
@include media(sm) {
  .qrBlock {
    padding: 44px 0;
    ul {
      display: block;
      li {
        margin: 0 auto;
        padding-bottom: 24px;
        .title {
          padding: 2px 12px;
        }
        a {
          img {
            border-radius: 12px;
            margin-top: 12px;
            width: 128px;
            height: 128px;
            object-fit: contain;
          }
        }
      }
    }
  }
}
</style>
