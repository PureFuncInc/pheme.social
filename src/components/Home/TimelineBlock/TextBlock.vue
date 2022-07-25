<template>
  <div class="text-block">
    <div class="dot" :class="{ gray }" />
    <div class="bar" :class="{ gray }" />
    <div class="text">
      <div class="title">{{ title }}</div>
      <div class="content">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextBlock',
  props: {
    gray: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    content: {
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
.text-block {
  color: #fff;
  .dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: $primary;
    &.gray {
      background: $dark03;
    }
  }
  .bar {
    position: relative;
    margin-top: -10px;
    margin-left: 9px;
    width: 6px;
    height: 55px;
    border-left: 2px solid $primary;
    border-bottom: 2px solid $primary;
    border-radius: 0 0 0 28px;
    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      right: -13px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid $primary;
    }
    &.gray {
      border-left: 2px solid $dark03;
      border-bottom: 2px solid $dark03;
      &::after {
        border: 2px solid $dark03;
      }
    }
  }
  .text {
    position: relative;
    z-index: 2;
    top: -5px;
    left: 20px;
    .title {
      text-align: left;
      font-weight: 800;
      font-size: 24px;
    }
    .content {
      color: $dark05;
      margin-top: 10px;
      text-align: left;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
    }
  }
}

@include media(sm) {
  .text-block {
    .dot {
      width: 15px;
      height: 15px;
    }
    .bar {
      position: relative;
      margin-top: -8px;
      margin-left: 9px;
      width: 32px;
      height: 2px;
      background: $primary;
      border: none;
      border-radius: 0;
      &::after {
        bottom: -6px;
        width: 9px;
        height: 9px;
      }
      &.gray {
        background: $dark03;
        border: none;
      }
    }
    .text {
      top: -14px;
      left: 0;
      margin-left: 65px;
      width: calc(100% - 70px);
      .title {
        font-size: 20px;
      }
      .content {
        margin-top: 8px;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
}
</style>
