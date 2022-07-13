<template>
  <div class="playWaveCard">
    <img src="@/assets/home/intro/playWave-w.png" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlayWaveCardComponent',
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.playWaveCard {
  width: 285px;
  height: 80px;
  padding: 30px 25px;
  background-color: $primary;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(40, 41, 61, 0.04), 0px 2px 10px rgba(96, 97, 112, 0.16);
  border-radius: 7px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

@include media(sm) {
  .playWaveCard {
    width: 197px;
    height: 40px;
    padding: 12px 16px;
  }
}
</style>
