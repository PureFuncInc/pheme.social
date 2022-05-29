<template>
  <div class="navList">
    <!-- <Background /> -->
    <Header></Header>
    <div class="title">
      <img class="logo" src="../assets/logo.svg" alt=""/>
      <div class="subtitle">Voice Based SocialFi App</div>
    </div>
    <ul>
      <li v-for="link in linkList" :key="`${link.title}-${link.url}`">
        <a :href="link.url" target="_blank" rel="noopener">{{ link.title }}</a>
      </li>
    </ul>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

interface Link {
  title: string;
  url: string;
}

export default defineComponent({
  name: 'NavList',
  components: {
    Header,
    Footer,
  },
  props: {
    linkList: {
      type: Array as PropType<Array<Link>>,
      default: () => [
        {
          title: '',
          url: '',
        },
      ],
    },
  },
});
</script>

<style scoped lang="scss">
.navList {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../assets/bg.png') no-repeat center;
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
      a {
        text-decoration: none;
        font-weight: 500;
        &:visited {
          color: #262626;
        }
      }
    }
  }
}
</style>
