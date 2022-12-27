<template>
  <div class="roadmapBlock" id="roadmap">
    <div class="title">Roadmap</div>
    <div class="detail">
      <div v-for="(roadmap, index) in roadmapList" :key="index">
        <div class="icon" />
        <div class="content" v-html="roadmap.content" />
        <div class="timeLabel">{{ roadmap.timeLabel }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'RoadmapBlockComponent',
  components: {
    // Timeline,
  },
  setup() {
    const roadmapList = ref([
      {
        timeLabel: '2022 Q3',
        content: 'App functionality development, On-chain tests and development',
      },
      {
        timeLabel: '2022 Q4',
        content: 'New feature for boosting adoption and earnings <br>#Public Alpha',
      },
      { timeLabel: '2023 Q1', content: 'IEO and initial listings on exchanges <br>#Public Beta' },
    ]);
    return {
      roadmapList,
    };
  },
});
</script>

<style scoped lang="scss">
.roadmapBlock {
  position: relative;
  margin-top: 78px;
  padding: 78px 32px 100px;
  .title {
    font-weight: 500;
    font-size: 32px;
    height: 46px;
    line-height: 46px;
    color: $font_dark;
  }
  .detail {
    margin-top: 60px;
    > div {
      display: flex;
      justify-content: space-between;
      max-width: 880px;
      margin: 112px auto 0;
      &:nth-of-type(2n) {
        flex-direction: row-reverse;
        .icon {
          margin-left: 8px;
          background: url("@/assets/home/roadmapBlock/pheme02.svg") no-repeat center;
          background-size: 100% auto;
        }
      }
      .icon {
        width: 70px;
        min-width: 70px;
        height: 77px;
        background: url("@/assets/home/roadmapBlock/pheme01.svg") no-repeat center;
        background-size: 100% auto;
      }
      .content {
        position: relative;
        margin-left: 24px;
        background: #f6f7f9;
        padding: 30px 40px 30px 105px;
        box-sizing: border-box;
        flex-grow: 1;
        border-radius: 40px 80px 80px 0;
        font-weight: 700;
        text-align: left;
        font-size: 24px;
        line-height: 35px;
        letter-spacing: 0.05em;
        color: $font_gray;
        &::before {
          content: "";
          position: absolute;
          width: 47px;
          height: 48px;
          left: 32px;
          top: 24px;
          background: url("@/assets/home/roadmapBlock/arrow.svg") no-repeat center;
          background-size: 100% auto;
        }
      }
      .timeLabel {
        align-self: flex-end;
        position: relative;
        bottom: -5px;
        font-weight: 700;
        font-size: 30px;
        height: 100%;
        line-height: 43px;
        color: $font_gray_light;
        white-space: nowrap;
      }
    }
  }
}

@include media(sm) {
  .roadmapBlock {
    margin-top: 55px;
    padding: 55px 32px;
    .title {
      font-size: 22px;
      height: 32px;
      line-height: 32px;
    }
    .detail {
      margin-top: 44px;
      > div {
        margin: 40px auto 0;
        &:nth-of-type(2n) {
          flex-direction: row-reverse;
        }
        .icon {
          width: 29px;
          min-width: 29px;
          height: 32px;
        }
        .content {
          margin-left: 8px;
          padding: 12px 14px 12px 48px;
          border-radius: 20px 20px 20px 0;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          color: $font_gray;
          &::before {
            width: 24px;
            height: 24px;
            left: 16px;
            top: 8px;
          }
        }
        .timeLabel {
          bottom: 0;
          font-weight: 700;
          font-size: 11px;
          line-height: 10px;
        }
      }
    }
  }
}
</style>
