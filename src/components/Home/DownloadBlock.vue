<template>
  <div class="downloadBlock">
    <QrBlock :link-list="qrLink" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import QrBlock from '@/components/QrBlock.vue';

export default defineComponent({
  name: 'DownloadBlock',
  components: {
    QrBlock,
  },
  setup() {
    const store = useStore();
    const qrLink = [
      { title: 'iOS', linkUrl: 'https://testflight.apple.com/join/kY8nJacg' },
      { title: 'Android', linkUrl: 'https://play.google.com/apps/testing/net.purefunc.voice' },
      { title: 'Discord', linkUrl: 'https://discord.gg/ZUQy68HtHC' },
    ];
    const showNavList = computed(() => store.state.showNavList);
    return {
      showNavList,
      qrLink,
    };
  },
});
</script>

<style scoped lang="scss">
.downloadBlock {
  background: #192038
}
</style>
