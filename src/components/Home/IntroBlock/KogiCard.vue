<template>
  <div class="kogiCard">
    <img class="pic" :src="kogiPic" alt="" />
    <div class="card" :style="{ 'background-color': backgroundColor }">
      <div class="kogiName">{{ kogiName }}</div>
      <div class="rank" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlayCardComponent',
  props: {
    backgroundColor: {
      type: String,
      default: '#ffffff',
    },
    kogiPic: {
      type: String,
      default: '',
    },
    kogiName: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.kogiCard {
  position: relative;
  width: 268.1px;
  height: 267.43px;
  .pic {
    position: relative;
    z-index: 2;
    width: 158px;
    height: 174.26px;
    object-fit: contain;
  }
  .card {
    position: absolute;
    bottom: 0;
    width: 268.1px;
    height: 201.07px;
    box-shadow:
    0px 0px 12px -3px rgba(61, 82, 120, 0.12),
    0px 0px 24px -2px rgba(61, 82, 120, 0.08);
    border-radius: 4px;
    .kogiName {
      margin-top: 118px;
      font-weight: 500;
      font-size: 24px;
      line-height: 35px;
      letter-spacing: 0.03em;
      color: #000000;
    }
    .rank {
      margin: 5px auto 0;
      width: 143px;
      height: 27px;
      background: url('@/assets/home/introBlock/rank.svg') no-repeat center;
      background-size: 100% auto;
    }
  }
}

@include media(sm) {
}
</style>
