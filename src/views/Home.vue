<template>
  <div class="home">
    <Header></Header>
    <div class="container">
      <BannerBlock></BannerBlock>
      <IntroBlock></IntroBlock>
      <DownloadBlock></DownloadBlock>
      <TimelineBlock></TimelineBlock>
      <TeamBlock></TeamBlock>
      <ContactUsBlock></ContactUsBlock>
      <Footer></Footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import Header from '@/components/Header.vue';
import BannerBlock from '@/components/Home/BannerBlock.vue';
import IntroBlock from '@/components/Home/IntroBlock.vue';
import TimelineBlock from '@/components/Home/TimelineBlock.vue';
import TeamBlock from '@/components/Home/TeamBlock.vue';
import ContactUsBlock from '@/components/Home/ContactUsBlock.vue';
import DownloadBlock from '@/components/Home/DownloadBlock.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    Header,
    BannerBlock,
    IntroBlock,
    DownloadBlock,
    TimelineBlock,
    TeamBlock,
    ContactUsBlock,
    Footer,
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
