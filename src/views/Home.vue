<template>
  <div class="home">
    <Header></Header>
    <div class="container">
      <Banner></Banner>
      <DownloadBlock></DownloadBlock>
      <Footer></Footer>
    </div>
    <transition name="fade" mode="out-in">
      <div v-show="showNavList">
        <NavList />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import Header from '@/components/Header.vue';
import Banner from '@/components/Home/Banner.vue';
import DownloadBlock from '@/components/Home/DownloadBlock.vue';
import NavList from '@/components/NavList.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    Header,
    Banner,
    DownloadBlock,
    NavList,
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
