<template>
  <div class="introBlock" id="about">
    <div class="title">Pheme also a pet game. Everyone owns his unique Pheme pets.</div>
    <div class="subtitle">
      Each Pheme has physiological attributes (Height, Weight, etc.), basic attribute (STR, INT,
      etc.) and other attributes (Rarity, Level, etc.).
    </div>
    <div class="kogi-center" />
    <div class="kogi-group">
      <div class="card-container">
        <kogi-card
          class="kogi-card"
          :kogi-pic="require('@/assets/home/introBlock/kogi01.png')"
          background-color="#F7F4FB"
          kogi-name="Molly Dawson"
          kogi-rank="rank1"
        />
      </div>
      <div class="card-container">
        <kogi-card
          class="kogi-card"
          :kogi-pic="require('@/assets/home/introBlock/kogi02.png')"
          background-color="#ECFAFC"
          kogi-name="Martin Castro"
          kogi-rank="rank2"
        />
      </div>
      <div class="card-container">
        <kogi-card
          class="kogi-card"
          :kogi-pic="require('@/assets/home/introBlock/kogi03.png')"
          background-color="#F5F8F2"
          kogi-name="Joy Nash"
          kogi-rank="rank3"
        />
      </div>
      <div class="card-container">
        <kogi-card
          class="kogi-card"
          :kogi-pic="require('@/assets/home/introBlock/kogi04.png')"
          background-color="#EFEAEE"
          kogi-name="Vanessa Mills"
          kogi-rank="rank5"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import KogiCard from '@/components/Home/IntroBlock/KogiCard.vue';

export default defineComponent({
  name: 'IntroBlockComponent',
  components: {
    KogiCard,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@keyframes changeColor {
  0% {
    background: #ffa17d;
  }
  20% {
    background: #5abebe;
  }
  40% {
    background: #89c463;
  }
  60% {
    background: #e47f80;
  }
  80% {
    background: #f4dc90;
  }
}
.introBlock {
  position: relative;
  margin-top: 70px;
  padding-top: 75px;
  .title {
    margin: 0 auto;
    max-width: 646px;
    font-weight: 500;
    font-size: 32px;
    line-height: 46px;
    letter-spacing: 0.03em;
    color: $font_dark;
  }
  .subtitle {
    margin: 16px auto 0;
    max-width: 697px;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 0.03em;
    color: $font_gray_light;
  }
  .kogi-center {
    position: absolute;
    top: 543px;
    width: 112px;
    height: 124px;
    left: calc(50% - 56px);
    background: #ffa17d;
    mask: url("@/assets/home/introBlock/kogi-center.svg");
    mask-size: contain;
    animation: changeColor 10s linear infinite;
  }
  .kogi-group {
    margin: 60px auto 0;
    width: 840px;
    height: 566px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    .card-container {
      width: 50%;
      .kogi-card {
        width: 268.1px;
        height: 267.43px;
      }
      &:nth-of-type(2n) {
        .kogi-card {
          float: right;
        }
      }
    }
  }
}

@include media(md) {
  .introBlock {
    .title {
      width: calc(100% - 48px);
      max-width: 476px;
      font-size: 22px;
      line-height: 32px;
    }
    .subtitle {
      width: calc(100% - 48px);
      max-width: 476px;
      font-size: 16px;
      line-height: 22px;
    }
    .kogi-center {
      position: relative;
      top: 28px;
      width: 58px;
      height: 64px;
      left: calc(50% - 29px);
    }
    .kogi-group {
      margin: 32px auto 0;
      width: calc(100% - 48px);
      max-width: 375px;
      height: 305px;
      .card-container {
        .kogi-card {
          width: 144px;
          height: 144px;
        }
        &:nth-of-type(2n) {
          .kogi-card {
            float: right;
          }
        }
      }
    }
  }
}
</style>
