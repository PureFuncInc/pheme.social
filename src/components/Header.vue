<template>
  <div class="header">
    <ul>
      <li class="logo">
        <img src="@/assets/icon/app.svg" alt=""/>
      </li>
      <li class="menu" @click="trigger" @keydown="trigger">
        <img v-if="!showNavList" src="@/assets/icon/menu.svg" alt=""/>
        <img v-if="showNavList" src="@/assets/icon/clear.svg" alt=""/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'HeaderComponent',
  setup() {
    const store = useStore();
    const showNavList = computed(() => store.state.showNavList);
    function trigger() {
      store.commit('triggerNavList');
    }
    return {
      showNavList,
      trigger,
    };
  },
});
</script>

<style scoped lang="scss">
.header {
  position: absolute;
  z-index: 2;
  top: 78px;
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    box-sizing: border-box;
    padding: 0 64px;
    margin: 0;
    li {
      &.logo {
        width: 90px;
        height: 90px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &.menu {
        cursor: pointer;
        width: 48px;
        height: 48px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

@media all and (max-width: 576px) {
  .header {
    top: 32px;
    ul {
      padding: 0 32px;
    }
  }
}
</style>
