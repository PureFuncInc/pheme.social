<template>
  <div class="home">
    <Header></Header>
    <div class="title">
      <img class="logo" src="../assets/logo.svg" alt=""/>
      <div class="subtitle">Voice Based SocialFi App</div>
    </div>
    <QrBlock :link-list="qrLink" />
    <Footer></Footer>
    <transition name="fade" mode="out-in">
      <div v-show="showNavList">
        <NavList />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import Header from '@/components/Header.vue';
import QrBlock from '@/components/QrBlock.vue';
import NavList from '@/components/NavList.vue';
import Footer from '@/components/Footer.vue';

import iosQrCodeSrc from '@/assets/qr/ios.png';
import androidQrCodeSrc from '@/assets/qr/android.png';
import discordQrCodeSrc from '@/assets/qr/discord.png';

export default defineComponent({
  name: 'HomePage',
  components: {
    Header,
    QrBlock,
    NavList,
    Footer,
  },
  setup() {
    const store = useStore();
    const qrLink = [
      { title: 'iOS', qrCodeSrc: iosQrCodeSrc },
      { title: 'Android', qrCodeSrc: androidQrCodeSrc },
      { title: 'Discord', qrCodeSrc: discordQrCodeSrc },
    ];
    const showNavList = computed(() => store.state.showNavList);
    return {
      showNavList,
      qrLink,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: url("../assets/bg.png") no-repeat center;
  background-color: #fff;
  background-size: cover;
  .title {
    .logo {
      margin-top: 240px;
      width: 240px;
      height: 60px;
      object-fit: contain;
    }
    .subtitle {
      margin-top: 24px;
      color: #0072d8;
      font-weight: bold;
      font-size: 18px;
      letter-spacing: -0.41px;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
