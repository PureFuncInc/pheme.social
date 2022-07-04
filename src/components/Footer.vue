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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 64px;
  box-sizing: border-box;
  height: 120px;
  background: #192038;
  width: 100%;
  color: #fff;
  font-weight: 300;
  font-weight: 300;
  font-size: 14px;
}

@include media('sm') {
  .footer {
    padding: 0 24px;
  }
}
</style>
