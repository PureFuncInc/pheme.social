<template>
  <div class="footer">
    COPYRIGHT PUREFUNC LTD. 2022 - ALL RIGHTS RESERVED 丨 POWERED BY PUREFUNC LTD.
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
  // setup() {
  //   const store = useStore();
  //   const showNavList = computed(() => store.state.showNavList);
  //   return {
  //     showNavList,
  //   };
  // },
});
</script>

<style scoped lang="scss">
.footer {
  height: 30px;
  padding-bottom: 16px;
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #fff;
  font-weight: normal;
  font-size: 14px;
}
</style>
