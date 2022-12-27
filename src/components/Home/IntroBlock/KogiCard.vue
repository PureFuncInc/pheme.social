<template>
  <div class="kogiCard">
    <img class="pic" :src="kogiPic" alt="" />
    <div class="card" :style="{ 'background-color': backgroundColor }">
      <div class="kogiName">{{ kogiName }}</div>
      <div :class="kogiRank" />
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
    kogiRank: {
      type: String,
      default: 'rank1',
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
  .pic {
    position: relative;
    z-index: 2;
    width: 59%;
    height: 65%;
    object-fit: contain;
  }
  .card {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 75%;
    box-shadow:
      0px 0px 12px -3px rgba(61, 82, 120, 0.12), 0px 0px 24px -2px rgba(61, 82, 120, 0.08);
    border-radius: 4px;
    .kogiName {
      margin-top: 44%;
      font-weight: 500;
      font-size: 24px;
      line-height: 35px;
      letter-spacing: 0.03em;
      color: #000000;
    }
    .rank1 {
      margin: 5px auto 0;
      width: 53%;
      height: 10%;
      background: url("@/assets/home/introBlock/rank1.svg") no-repeat center;
      background-size: 100% auto;
    }
    .rank2 {
      margin: 5px auto 0;
      width: 53%;
      height: 10%;
      background: url("@/assets/home/introBlock/rank2.svg") no-repeat center;
      background-size: 100% auto;
    }
    .rank3 {
      margin: 5px auto 0;
      width: 53%;
      height: 10%;
      background: url("@/assets/home/introBlock/rank3.svg") no-repeat center;
      background-size: 100% auto;
    }
    .rank5 {
      margin: 5px auto 0;
      width: 53%;
      height: 10%;
      background: url("@/assets/home/introBlock/rank5.svg") no-repeat center;
      background-size: 100% auto;
    }
  }
}

@include media(md) {
  .kogiCard {
    .card {
      .kogiName {
        font-size: 14px;
        line-height: 20px;
      }
      .rank {
        margin: 2px auto 0;
      }
    }
  }
}
</style>
