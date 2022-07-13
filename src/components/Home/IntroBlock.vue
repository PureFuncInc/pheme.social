<template>
  <div class="introBlock">
    <div class="title">透過聲音交流</div>
    <div class="subtitle">聆聽來自各地的聲音，透過聲音的傳輸，讓你擁有身歷其境的感受</div>
    <div class="play-button">
      <img src="@/assets/home/intro/playButton.png" alt="" />
    </div>
    <PlayCard
      class="play-card play-card-01"
      :user-avatar="require('@/assets/home/intro/avatar01.png')"
      user-name="Maxbergmann"
      post-time="3 分鐘前"
      text="Good Morning"
    />
    <PlayCard
      class="play-card play-card-02"
      :user-avatar="require('@/assets/home/intro/avatar02.png')"
      user-name="Sully. zu"
      post-time="1 小時前"
      text="Holiday"
    />
    <PlayCard
      class="play-card play-card-03"
      :user-avatar="require('@/assets/home/intro/avatar03.png')"
      user-name="LuuuLu"
      post-time="3 分鐘前"
      text="Nice Nice"
    />
    <PlayWaveCard class="play-wave-card play-wave-card-01" />
    <PlayWaveCard class="play-wave-card play-wave-card-02" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlayCard from '@/components/share/PlayCard.vue';
import PlayWaveCard from '@/components/share/PlayWaveCard.vue';

export default defineComponent({
  name: 'IntroBlockComponent',
  components: {
    PlayCard,
    PlayWaveCard,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.introBlock {
  overflow-x: hidden;
  background: url("@/assets/home/intro/background-pc-wave.png") no-repeat center;
  background-size: cover;
  position: relative;
  height: 900px;
  padding-top: 75px;
  box-sizing: border-box;
  .title {
    font-weight: 500;
    font-size: 32px;
    height: 46px;
    line-height: 46px;
  }
  .subtitle {
    margin: 10px auto 0;
    font-weight: 400;
    font-size: 20px;
    width: 450px;
    line-height: 29px;
    color: $dark03;
  }
  .play-button {
    position: absolute;
    top: 382px;
    left: calc(50% - 68px);
    width: 136px;
    height: 136px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .play-card,
  .play-wave-card {
    position: absolute;
  }
  .play-card-01 {
    top: 222px;
    left: calc(50% - 426px - 7vw);
  }
  .play-card-02 {
    top: 366px;
    right: calc(50% - 426px - 9vw);
  }
  .play-card-03 {
    top: 621px;
    left: calc(50% - 426px + 9vw);
  }
  .play-wave-card-01 {
    top: 466px;
    left: calc(50% - 285px - 22vw);
  }
  .play-wave-card-02 {
    top: 626px;
    right: calc(50% - 285px - 23vw);
  }
}

@include media(sm) {
  .introBlock {
    background: url("@/assets/home/intro/background-mobile-wave.png") no-repeat center;
    height: 812px;
    padding-top: 47px;
    .title {
      font-size: 20px;
      height: 29px;
      line-height: 29px;
    }
    .subtitle {
      margin: 12px 24px 0;
      font-size: 14px;
      width: auto;
      line-height: 22px;
    }
    .play-button {
      top: 363px;
      left: calc(50% - 32px);
      width: 64px;
      height: 64px;
    }
    .play-card-01 {
      top: 152px;
      left: calc(50% - 120px - 9vw);
    }
    .play-card-02 {
      top: 457px;
      right: calc(50% - 120px - 3vw);
    }
    .play-card-03 {
      top: 598px;
      left: calc(50% - 120px + 7vw);
    }
    .play-wave-card-01 {
      top: 293px;
      left: calc(50% - 99px + 16vw);
    }
    .play-wave-card-02 {
      top: 739px;
      right: calc(50% - 99px + 13vw);
    }
  }
}
</style>
