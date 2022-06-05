<template>
  <div class="litePaper">
    <Header></Header>
    <div class="md">
      <LitePaper></LitePaper>
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
import LitePaper from '@/assets/docs/litepaper.md';

export default defineComponent({
  name: 'LitePaperPage',
  components: {
    Header,
    NavList,
    Footer,
    LitePaper,
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
.litePaper {
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
