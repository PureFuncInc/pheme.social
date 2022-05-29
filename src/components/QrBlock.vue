<template>
  <div class="qrBlock">
    <ul>
      <li v-for="link in qrLinkList" :key="`${link.title}-${link.qrCodeSrc}`">
        <div class="title">{{ link.title }}</div>
        <img :src="link.qrCodeSrc" alt="" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

interface Link {
  title: string;
  qrCodeSrc: string;
}

export default defineComponent({
  name: 'QrBlock',
  props: {
    linkList: {
      type: Array as PropType<Array<Link>>,
      default: () => [
        {
          title: '',
          qrCodeSrc: '',
        },
      ],
    },
  },
  setup(props) {
    const qrLinkList = computed(() => {
      const { linkList } = props;
      return linkList;
    });
    return {
      qrLinkList,
    };
  },
});
</script>

<style scoped lang="scss">
.qrBlock {
  margin-top: 88px;
  width: 100%;
  padding-bottom: 88px;
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
        padding: 4px 8px;
        border: 1px solid #262626;
        border-radius: 8px;
        font-size: 22px;
      }
      img {
        margin-top: 16px;
        width: 128px;
        height: 128px;
        object-fit: contain;
      }
    }
  }
}
@media all and (max-width: 576px) {
  .qrBlock {
    margin-top: 44px;
    ul {
      display: block;
      li {
        margin: 0 auto;
        padding-bottom: 12px;
      }
    }
  }
}
</style>
