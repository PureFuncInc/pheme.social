<template>
  <div class="timelineBlock">
    <div class="title">未來規劃</div>
    <div class="subtitle">聆聽來自各地的聲音，透過聲音的傳輸，讓你擁有身歷其境的感受</div>
    <timeline class="timeline" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Timeline from '@/components/Home/TimelineBlock/Timeline.vue';

export default defineComponent({
  name: 'TimelineBlockComponent',
  components: {
    Timeline,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.timelineBlock {
  position: relative;
  background: #192038;
  padding-top: 100px;
  box-sizing: border-box;
  .title {
    font-weight: 500;
    font-size: 32px;
    height: 46px;
    line-height: 46px;
    color: #ffffff;
  }
  .subtitle {
    margin: 10px auto 0;
    font-weight: 400;
    font-size: 20px;
    width: 450px;
    line-height: 29px;
    height: 58px;
    color: $dark05;
  }
  .timeline {
    margin-top: -214px;
  }
}

@include media(sm) {
  .timelineBlock {
    padding-top: 50px;
    .title {
      font-size: 20px;
      height: 29px;
      line-height: 29px;
    }
    .subtitle {
      margin: 12px 24px 0;
      font-size: 14px;
      width: auto;
      height: 44px;
      line-height: 22px;
    }
    .timeline {
      margin-top: 50px;
    }
  }
}
</style>
