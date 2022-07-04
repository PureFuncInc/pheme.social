<template>
  <div class="header">
    <ul>
      <li class="logo">
        <router-link to="/">
          <img src="@/assets/logo-text.svg" alt="" />
        </router-link>
      </li>
      <li class="downloadApp">
        <button @click="downloadApp()" @keydown="downloadApp()">下載 App</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import toDownloadApp from '@/utils/toDownloadApp';

export default defineComponent({
  name: 'HeaderComponent',
  setup() {
    const store = useStore();
    const showNavList = computed(() => store.state.showNavList);
    const downloadApp = () => toDownloadApp();
    return {
      showNavList,
      downloadApp,
    };
  },
});
</script>

<style scoped lang="scss">
.header {
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 92px;
  background: $white;
  ul {
    margin: 0 auto;
    list-style-type: none;
    padding: 0 64px;
    width: 100%;
    max-width: 1280px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    li {
      &.logo {
        width: 204px;
        height: 52px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &.downloadApp {
        button {
          color: $dark;
          font-size: 16px;
          position: relative;
          padding: 4px 20px;
          background-color: transparent;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: currentColor;
            opacity: 0;
            transition: all .3s;
            border-radius: 20px;
          }
          &:hover::before {
            opacity: .12;
          }
        }
      }
    }
  }
}

@include media(sm) {
  .header {
    ul {
      padding: 0 24px;
    }
  }
}
</style>
