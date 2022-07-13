<template>
  <div class="home">
    <header-component />
    <div class="container">
      <banner-block />
      <intro-block />
      <download-block />
      <timeline-block />
      <team-block />
      <contact-us-block />
      <footer-component />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import HeaderComponent from '@/components/Header.vue';
import BannerBlock from '@/components/Home/BannerBlock.vue';
import IntroBlock from '@/components/Home/IntroBlock.vue';
import TimelineBlock from '@/components/Home/TimelineBlock.vue';
import TeamBlock from '@/components/Home/TeamBlock.vue';
import ContactUsBlock from '@/components/Home/ContactUsBlock.vue';
import DownloadBlock from '@/components/Home/DownloadBlock.vue';
import FooterComponent from '@/components/Footer.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    HeaderComponent,
    BannerBlock,
    IntroBlock,
    DownloadBlock,
    TimelineBlock,
    TeamBlock,
    ContactUsBlock,
    FooterComponent,
  },
  setup() {
    const store = useStore();
    const showNavList = computed(() => store.state.showNavList);
    return {
      showNavList,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  .container {
    background: #F6F8FB;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
