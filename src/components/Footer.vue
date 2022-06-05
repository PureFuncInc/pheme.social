<template>
  <div class="footer">
    COPYRIGHT PUREFUNC LTD. 2022 - ALL RIGHTS RESERVED 丨 POWERED BY PUREFUNC LTD.
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterComponent',
});
</script>

<style scoped lang="scss">
.footer {
  box-sizing: border-box;
  padding: 0 24px 16px;
  height: 46px;
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #fff;
  font-weight: normal;
  font-size: 14px;
}
</style>
