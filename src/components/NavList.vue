<template>
  <div class="navList">
    <Header></Header>
    <div class="title">
      <img class="logo" src="../assets/logo.svg" alt="" />
      <div class="subtitle">Voice Based SocialFi App</div>
    </div>
    <ul>
      <li
        v-for="link in linkList"
        :key="`${link.title}-${link.url}`"
        @click="redirectTo(link.url)"
        @keydown.enter="redirectTo(link.url)"
      >
        {{ link.title }}
        <!-- <router-link :to="link.url">{{ link.title }}</router-link> -->
        <!-- <a :href="link.url" target="_blank" rel="noopener">{{ link.title }}</a> -->
      </li>
    </ul>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'NavList',
  components: {
    Header,
    Footer,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const linkList = ref([
      { title: 'How to Play', url: '/HowToPlay' },
      { title: 'Lite Paper', url: '/LitePaper' },
      { title: 'White Paper', url: '/WhitePaper' },
    ]);
    function redirectTo(url: string) {
      store.commit('triggerNavList');
      router.push({
        path: url,
      });
    }
    return {
      linkList, redirectTo,
    };
  },
});
</script>

<style scoped lang="scss">
.navList {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../assets/bg.png") no-repeat center;
  background-size: cover;
  background-color: #fff;
  top: 0;
  z-index: 2;
  transition: all;
  .title {
    .logo {
      margin-top: 240px;
      width: 240px;
      height: 60px;
      object-fit: contain;
    }
    .subtitle {
      margin-top: 24px;
      color: #0072d8;
      font-weight: bold;
      font-size: 18px;
      letter-spacing: -0.41px;
    }
  }
  ul {
    list-style-type: none;
    margin: 48px auto 0;
    padding: 0;
    li {
      width: fit-content;
      margin: 0 auto 32px;
      padding: 4px 8px;
      border: 1px solid #262626;
      border-radius: 8px;
      cursor: pointer;
    }
  }
}
</style>
