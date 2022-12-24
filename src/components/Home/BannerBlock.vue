<template>
  <div class="banner">
    <div class="content">
      <div class="title">
        <b>Listening</b> others <i>Voice.</i><br />Sharing <b>Our Stories.</b>
      </div>
      <div class="description">
        Pheme is a Web 3.0 SocialFi App mainly<br />
        focused on Voice.
      </div>
      <div class="downloadApp">
        <a
          class="ios"
          href="https://apps.apple.com/tw/app/pheme/id1625126616"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="@/assets/home/apple.svg" alt="app store" />
        </a>
        <a
          class="android"
          href="https://play.google.com/store/apps/details?id=net.purefunc.voice"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="@/assets/home/google.svg" alt="google play" />
        </a>
      </div>
    </div>
    <picture class="phone">
      <img src="@/assets/home/phone_pc.png" alt="" loading="lazy" />
    </picture>
    <div class="contact">
      <div class="poweredBy">
        <div class="name">POWERED BY</div>
        <i />
      </div>
      <div class="ourSocials">
        <div class="name">OUR SOCIALS</div>
        <ul class="link">
          <a href="https://discord.pheme.social" target="_blank" rel="noreferrer noopener">
            <img src="@/assets/home/contactUsBlock/discord.svg" alt="discord" />
          </a>
          <a href="https://twitter.com/pheme_social" target="_blank" rel="noreferrer noopener">
            <img src="@/assets/home/contactUsBlock/twitter.svg" alt="twitter" />
          </a>
          <a href="https://t.me/pheme_social" target="_blank" rel="noreferrer noopener">
            <img src="@/assets/home/contactUsBlock/telegram.svg" alt="telegram" />
          </a>
          <a href="https://docs.pheme.social" target="_blank" rel="noreferrer noopener">
            <img src="@/assets/home/contactUsBlock/knowledge.svg" alt="knowledge" />
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import toDownloadApp from '@/utils/toDownloadApp';

export default defineComponent({
  name: 'BannerComponent',
  setup() {
    const downloadApp = () => toDownloadApp();
    return {
      downloadApp,
    };
  },
});
</script>

<style scoped lang="scss">
.banner {
  padding: 202px 32px 0;
  margin: 0 auto;
  width: 960px;
  position: relative;
  overflow: hidden;
  .content {
    width: 566px;
    color: $font_dark;
    text-align: left;
    .title {
      font-size: 46px;
      line-height: 72px;
      white-space: nowrap;
      letter-spacing: 0.05em;
      b {
        font-weight: 700;
      }
      i {
        font-style: normal;
        font-weight: 700;
        color: #3563e9;
      }
    }
    .description {
      width: 464px;
      margin-top: 16px;
      font-size: 20px;
      font-weight: 400;
      line-height: 40px;
      letter-spacing: 0.03em;
      color: $font_gray_light;
    }
    .downloadApp {
      display: flex;
      justify-content: space-between;
      margin-top: 24px;
      width: 442px;
      height: 64px;
      > a {
        display: block;
        > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        &.ios {
          width: 214px;
          height: 64px;
        }
        &.android {
          width: 214px;
          height: 64px;
        }
      }
    }
  }
  .phone {
    position: absolute;
    top: 196px;
    right: -108px;
    width: 712px;
    height: 475px;
    &::before {
      content: "";
      position: absolute;
      right: 320px;
      width: 330px;
      height: 358.06px;
      background: url("@/assets/home/bird.svg") no-repeat center;
      background-size: 100% auto;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .contact {
    margin: 157px auto 0;
    width: 500px;
    display: flex;
    justify-content: space-between;
    > div {
      .name {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.03em;
        color: $font_dark;
      }
    }
    .poweredBy {
      i {
        margin-top: 20px;
        display: block;
        width: 160px;
        height: 24px;
        background: url("@/assets/home/solana.svg") no-repeat center;
        background-size: 100% auto;
      }
    }

    .ourSocials {
      .link {
        margin-top: 20px;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > a {
          display: block;
          width: 32px;
          height: 32px;
          > img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }
}

@include media(md) {
  .banner {
    padding: 88px 0 0;
    width: 100%;
    .content {
      width: 100%;
      text-align: center;
      .title {
        font-size: 30px;
        line-height: 50px;
      }
      .description {
        width: calc(100% - 48px);
        margin: 0 auto;
        font-size: 16px;
        line-height: 22px;
      }
      .downloadApp {
        margin: 16px auto 0;
        width: 230px;
        height: 32px;
        > a {
          &.ios {
            width: 106px;
            height: 32px;
          }
          &.android {
            width: 106px;
            height: 32px;
          }
        }
      }
    }
    .phone {
      display: block;
      margin: 0 auto;
      position: relative;
      top: 64px;
      right: auto;
      width: 100%;
      height: 345px;
      &::before {
        right: 50%;
        transform: translateX(22%);
        width: 240px;
        height: 261px;
      }
      img {
        margin: 0 auto;
        display: block;
        width: 100%;
        max-width: 519px;
        height: 345px;
        object-fit: cover;
      }
    }
    .contact {
      margin: 108px auto 0;
      width: 100%;
      display: block;
      .poweredBy {
        i {
          margin: 20px auto 0;
        }
      }

      .ourSocials {
        margin-top: 64px;
        .link {
          margin: 20px auto 0;
          width: 200px;
        }
      }
    }
  }
}
</style>
