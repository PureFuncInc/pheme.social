<template>
  <div class="navigatePage" :class="{ show: showNavPage }">
    <div class="header">
      <button class="close" @click="closeNavPage()" />
      <img class="logo" src="@/assets/logo-text.svg" alt="" />
    </div>
    <ul class="roadmap">
      <li
        v-for="(router, index) in routerList"
        :key="index"
        @click="closeNavPage()"
        @keydown="closeNavPage()"
      >
        <router-link v-if="router.internal" :to="router.path">
          {{ router.label }}
        </router-link>
        <a v-else :href="router.path" target="_blank" rel="noreferrer noopener">
          {{ router.label }}
        </a>
      </li>
    </ul>
    <ul class="link">
      <li @click="closeNavPage()" @keydown="closeNavPage()">
        <a
          class="termsOfUse"
          href="https://pheme.social/terms.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          Terms of use
        </a>
      </li>
      <li @click="closeNavPage()" @keydown="closeNavPage()">
        <a
          class="privacyPolicy"
          href="https://pheme.social/privacy.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          Privacy Policy
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'HeaderComponent',
  setup() {
    const store = useStore();
    const routerList = ref(store.state.globalComponents.navigate.routerList);
    const showNavPage = computed(() => store.state.globalComponents.navigate.openNavPage);
    function closeNavPage() {
      store.commit('globalComponents/closeNavPage');
    }
    return {
      routerList,
      showNavPage,
      closeNavPage,
    };
  },
});
</script>

<style scoped lang="scss">
@include media(md) {
  .navigatePage {
    visibility: hidden;
    opacity: 0;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    transition: all 0.2s;
    &.show {
      visibility: visible;
      opacity: 1;
    }
    .header {
      width: 100%;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      box-sizing: border-box;
      padding: 0 16px;
      .close {
        display: block;
        width: 24px;
        height: 24px;
        background: url("@/assets/icon/close.svg") no-repeat center;
        background-size: 100%;
      }
      .logo {
        display: block;
        margin-left: 16px;
        width: 128px;
        min-width: 128px;
        height: 24px;
        object-fit: cover;
      }
    }
    .roadmap {
      margin-top: 40px;
      line-height: 28px;
      li {
        margin-bottom: 40px;
        &:last-of-type {
          margin-bottom: 0;
        }
        a {
          white-space: nowrap;
          display: block;
          width: 100%;
          height: 100%;
          font-weight: 500;
          font-size: 22px;
          color: $font_gray;
        }
      }
    }
    .link {
      margin: 80px auto 0;
      display: flex;
      width: 204px;
      justify-content: space-between;
      > li {
        height: 18px;
        > a {
          display: block;
          font-weight: 500;
          font-size: 14px;
          height: 100%;
          line-height: 18px;
          color: $font_gray;
        }
      }
    }
  }
}
</style>
