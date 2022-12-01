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
  background: url('@/assets/home/downloadBlock/Frame.png') no-repeat center;
  background-size: 100% auto;
  &::before {
    content: '';
    position: absolute;
    top: 75px;
    left: 51px;
    width: 196px;
    height: 196px;
    background: url('@/assets/home/downloadBlock/coin.png') no-repeat center;
    background-size: 100% auto;
  }
}

@include media(sm) {
  .phemeCoin {
    width: 145px;
    height: 105px;
    .coin {
      width: 64px;
      height: 64px;
      top: calc(50% - 32px);
      left: calc(50% - 32px);
    }
    .blue-star-01 {
      width: 12px;
      height: 12px;
    }
    .blue-star-02 {
      width: 14px;
      height: 14px;
    }
    .yellow-star-01 {
      top: 6px;
      left: 9px;
      width: 10px;
      height: 10px;
    }
    .yellow-star-02 {
      bottom: 17px;
      right: 16px;
      width: 8px;
      height: 8px;
    }
  }
}
</style>
