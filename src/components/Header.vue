<template>
  <div class="header">
    <button class="hamburger" @click="openNavPage()"/>
    <router-link class="logo" to="/">
      <img src="@/assets/logo-text.svg" alt="" />
    </router-link>
    <ul>
      <li v-for="(router, index) in routerList" :key="index">
        <router-link v-if="router.internal" :to="router.path">
          {{ router.label }}
        </router-link>
        <a v-else :href="router.path" target="_blank" rel="noreferrer noopener">
          {{ router.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'HeaderComponent',
  setup() {
    const store = useStore();
    const routerList = ref(store.state.globalComponents.navigate.routerList);
    function openNavPage() {
      store.commit('globalComponents/openNavPage');
    }
    return {
      routerList,
      openNavPage,
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
  height: 104px;
  background: $white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 64px;
  .hamburger {
    display: none;
  }
  .logo {
    display: block;
    width: 170px;
    min-width: 170px;
    height: 32px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  ul {
    margin-left: 64px;
    width: 100%;
    max-width: 656px;
    height: 100%;
    display: flex;
    align-items: center;
    li {
      display: block;
      margin-right: 40px;
      &:last-of-type {
        margin-right: 0;
      }
      a {
        white-space: nowrap;
        display: block;
        width: 100%;
        height: 100%;
        color: $font_gray;
        font-size: 16px;
      }
    }
  }
}

@include media(md) {
  .header {
    padding: 0 16px;
    height: 64px;
    justify-content: flex-start;
    .hamburger {
      display: block;
      width: 24px;
      height: 24px;
      background: url('@/assets/icon/menu.svg') no-repeat center;
      background-size: 100%;
    }
    .logo {
      margin-left: 16px;
      width: 128px;
      min-width: 128px;
      height: 24px;
    }
    ul {
      display: none;
    }
  }
}
</style>
