<template>
  <div class="howToPlay">
    <Header></Header>
    <div class="md">
      <HowToPlay></HowToPlay>
    </div>
    <Footer></Footer>
    <transition name="fade" mode="out-in">
      <div v-show="showNavList">
        <NavList />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import 'github-markdown-css';
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import Header from '@/components/Header.vue';
import NavList from '@/components/NavList.vue';
import Footer from '@/components/Footer.vue';
import HowToPlay from '@/assets/docs/howtoplay.md';

export default defineComponent({
  name: 'HowToPlayPage',
  components: {
    Header,
    NavList,
    Footer,
    HowToPlay,
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
.howToPlay {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: url("../assets/bg.png") no-repeat center;
  background-color: #fff;
  background-size: cover;
}
.md {
  padding: 240px 64px 0;
  box-sizing: border-box;
  .markdown-body {
    position: relative;
    margin: 0 auto;
    max-width: 960px;
  }
}
</style>
