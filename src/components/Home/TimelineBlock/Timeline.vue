<template>
  <div class="timeline">
    <div class="line-01" />
    <div class="horizon-01">
      <div class="curve-01" />
      <div class="line-horizon-01" />
      <div class="text-group-01">
        <text-block
          class="text-01"
          title="2022 Q1"
          content="貓法金秋連十向節珠雨植神鴨洋包從活。坐長會兄才收，怪土秋雲皮放；
          香過放央每視子會村兌松雲壯課喜吉。水入錯了童香松十着。"
        />
        <text-block
          class="text-02"
          title="2022 Q2"
          content="
          貓法金秋連十向節珠雨植神鴨洋包從活。坐長會兄才收，怪土秋雲皮放；香過放央每視子會村兌松雲壯課喜吉。水入錯了童香松十着。
          夕鳥功相回動候知嗎圓九。"
        />
      </div>
      <div class="curve-02" />
    </div>
    <div class="horizon-02">
      <div class="curve-03" />
      <div class="text-group-02">
        <text-block
          class="text-03"
          title="2022 Q3"
          content="
          貓法金秋連十向節珠雨植神鴨洋包從活。坐長會兄才收，怪土秋雲皮放；香過放央每視子會村兌松雲壯課喜吉。水入錯了童香松十着。
          夕鳥功相回動候知嗎圓九、再話爸穿停植國出民弓孝口光字、活會牠明幼封根東足用或尼象京元。"
          gray
        />
        <text-block
          class="text-04"
          title="2022 Q4"
          content="
          貓法金秋連十向節珠雨植神鴨洋包從活。坐長會兄才收，怪土秋雲皮放；香過放央每視子會村兌松雲壯課喜吉。水入錯了童香松十着。
          夕鳥功相回動候知嗎圓九。"
          gray
        />
      </div>
      <div class="line-horizon-02" />
      <div class="curve-04" />
    </div>
    <div class="horizon-03">
      <div class="curve-04" />
      <div class="line-horizon-03" />
      <div class="arrow" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextBlock from './TextBlock.vue';

export default defineComponent({
  name: 'TimelineBlock',
  components: {
    TextBlock,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.timeline {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  .line-01 {
    margin-left: 60px;
    height: 224px;
    border-left: 5px solid $primary;
  }
  .horizon-01 {
    position: relative;
    margin: 0 120px 0 60px;
    display: flex;
    align-items: flex-start;
    .curve-01 {
      width: 94px;
      min-width: 94px;
      height: 94px;
      border-radius: 0 0 0 94px;
      border-left: 5px solid $primary;
      border-bottom: 5px solid $primary;
    }
    .line-horizon-01 {
      margin-top: 94px;
      width: 100%;
      border-bottom: 5px solid $primary;
    }
    .text-group-01 {
      width: 100%;
      position: absolute;
      top: 87px;
      display: flex;
      justify-content: center;
      .text-01 {
        flex: 6;
        margin-left: 94px;
        max-width: 330px;
      }
      .text-02 {
        flex: 6;
        margin-left: 10%;
        margin-right: 50px;
        max-width: 330px;
      }
    }
    .curve-02 {
      margin-top: 94px;
      min-width: 184px;
      width: 184px;
      height: 184px;
      border-radius: 0 184px 0 0;
      border-top: 5px solid $primary;
      border-right: 5px solid $primary;
    }
  }
  .horizon-02 {
    position: relative;
    margin: 0 120px;
    display: flex;
    align-items: flex-start;
    .curve-03 {
      margin-top: 184px;
      width: 184px;
      min-width: 184px;
      height: 184px;
      border-radius: 184px 0 0 0;
      border-left: 5px solid $dark03;
      border-top: 5px solid $dark03;
    }
    .line-horizon-02 {
      margin-top: 184px;
      width: 100%;
      border-bottom: 5px solid $dark03;
    }
    .text-group-02 {
      width: 100%;
      position: absolute;
      top: 177px;
      display: flex;
      justify-content: center;
      .text-03 {
        flex: 6;
        order: 2;
        max-width: 330px;
      }
      .text-04 {
        flex: 6;
        max-width: 330px;
        margin-left: 174px;
        margin-right: 10%;
      }
    }
    .curve-04 {
      min-width: 184px;
      width: 184px;
      height: 184px;
      border-radius: 0 0 184px 0;
      border-bottom: 5px solid $dark03;
      border-right: 5px solid $dark03;
    }
  }
  .horizon-03 {
    position: relative;
    margin: 0 60px 0 120px;
    display: flex;
    align-items: flex-start;
    .curve-04 {
      width: 184px;
      min-width: 184px;
      height: 184px;
      border-radius: 0 0 0 184px;
      border-left: 5px solid $dark03;
      border-bottom: 5px solid $dark03;
    }
    .line-horizon-03 {
      position: relative;
      margin-top: 184px;
      width: 100%;
      border-bottom: 5px solid $dark03;
    }
    .arrow {
      position: absolute;
      bottom: -13px;
      right: 3px;
      width: 25px;
      height: 25px;
      border-top: 5px solid $dark03;
      border-right: 5px solid $dark03;
      transform: rotate(45deg);
    }
  }
}

@include media(sm) {
  .timeline {
    .line-01 {
      display: none;
    }
    .horizon-01 {
      margin: 0 30px;
      display: block;
      width: calc(100% - 60px);
      height: 296px;
      border-left: 3px solid $primary;
      .curve-01,
      .line-horizon-01,
      .curve-02 {
        display: none;
      }
      .text-group-01 {
        position: relative;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        .text-01,
        .text-02 {
          position: absolute;
          display: block;
          width: 100%;
          max-width: none;
        }
        .text-01 {
          top: -10px;
          margin-left: -9px;
        }
        .text-02 {
          top: 173px;
          margin-left: -9px;
        }
      }
    }
    .horizon-02 {
      margin: 0 30px;
      display: block;
      width: calc(100% - 60px);
      height: 544px;
      border-left: 3px solid $dark03;
      .curve-03,
      .curve-04,
      .line-horizon-02 {
        display: none;
      }
      .text-group-02 {
        position: relative;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        .text-03,
        .text-04 {
          position: absolute;
          display: block;
          width: 100%;
          max-width: none;
        }
        .text-03 {
          top: 109px;
          margin-left: -9px;
        }
        .text-04 {
          top: 348px;
          margin-left: -9px;
        }
      }
    }
    .horizon-03 {
      margin: 0;
      .curve-04, .line-horizon-03 {
        display: none;
      }
      .arrow {
        width: 13px;
        height: 13px;
        left: 23.5px;
        top: -18px;
        border-top: 3px solid $dark03;
        border-right: 3px solid $dark03;
        transform: rotate(135deg);
      }
    }
  }
}
</style>
