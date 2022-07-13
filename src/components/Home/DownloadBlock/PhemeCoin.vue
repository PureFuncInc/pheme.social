<template>
  <div class="phemeCoin">
    <img class="coin" src="@/assets/home/downloadBlock/coin.png" alt="" />
    <img class="blue-star-01" src="@/assets/home/downloadBlock/blueStar.png" alt="" />
    <img class="blue-star-02" src="@/assets/home/downloadBlock/blueStar.png" alt="" />
    <img class="yellow-star-01" src="@/assets/home/downloadBlock/yellowStar.png" alt="" />
    <img class="yellow-star-02" src="@/assets/home/downloadBlock/yellowStar.png" alt="" />
  </div>
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
  width: 250px;
  height: 180px;
  .coin {
    position: absolute;
    top: calc(50% - 60px);
    left: calc(50% - 60px);
    width: 120px;
    height: 120px;
    object-fit: contain;
  }
  .blue-star-01 {
    position: absolute;
    top: 0;
    right: 0;
    width: 21px;
    height: 21px;
    object-fit: contain;
  }
  .blue-star-02 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 23px;
    height: 23px;
    object-fit: contain;
  }
  .yellow-star-01 {
    position: absolute;
    top: 11px;
    left: 16px;
    width: 17px;
    height: 17px;
    object-fit: contain;
  }
  .yellow-star-02 {
    position: absolute;
    bottom: 23px;
    right: 26px;
    width: 17px;
    height: 17px;
    object-fit: contain;
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
