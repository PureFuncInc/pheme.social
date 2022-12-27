<template>
  <div class="phemeCoin" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PhemeCoin',
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.phemeCoin {
  position: relative;
  width: 310px;
  height: 323px;
  background: url("@/assets/home/downloadBlock/Frame.png") no-repeat center;
  background-size: 100% auto;
  &::before {
    content: "";
    position: absolute;
    top: 75px;
    left: 51px;
    width: 196px;
    height: 196px;
    background: url("@/assets/home/downloadBlock/coin.png") no-repeat center;
    background-size: 100% auto;
  }
}

@include media(md) {
  .phemeCoin {
    width: 204px;
    height: 213px;
    &::before {
      top: 49px;
      left: 33px;
      width: 130px;
      height: 130px;
    }
  }
}
</style>
