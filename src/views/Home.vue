<template>
  <div class="home">
    <header-component />
    <div class="container">
      <banner-block />
      <intro-block />
      <download-block />
      <team-block />
      <roadmap-block />
      <contact-us-block />
      <footer-component />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/Header.vue';
import BannerBlock from '@/components/Home/BannerBlock.vue';
import IntroBlock from '@/components/Home/IntroBlock.vue';
import RoadmapBlock from '@/components/Home/RoadmapBlock.vue';
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
    RoadmapBlock,
    TeamBlock,
    ContactUsBlock,
    FooterComponent,
  },
  setup() {
    return {
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
    background: $white;
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
