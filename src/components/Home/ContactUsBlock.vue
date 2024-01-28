<template>
  <div class="contactUsBlock">
    <div class="title">Stay in touch with Pheme</div>
    <ul class="link">
      <li class="discord">
        <a href="https://discord.pheme.social" target="_blank" rel="noreferrer noopener">
          <i />
          <div class="name">Discord</div>
        </a>
      </li>
      <li class="twitter">
        <a href="https://twitter.com/pheme_social" target="_blank" rel="noreferrer noopener">
          <i />
          <div class="name">Twitter</div>
        </a>
      </li>
      <li class="telegram">
        <a href="https://t.me/pheme_social" target="_blank" rel="noreferrer noopener">
          <i />
          <div class="name">Telegram</div>
        </a>
      </li>
      <li class="knowledge">
        <a href="https://docs.pheme.social" target="_blank" rel="noreferrer noopener">
          <i />
          <div class="name">Gitbook</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactUsBlockComponent',
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.contactUsBlock {
  margin: 100px auto 60px;
  .title {
    font-weight: 500;
    font-size: 32px;
    height: 46px;
    line-height: 46px;
    color: $font_dark;
  }
  .link {
    margin: 88px auto 0;
    display: flex;
    width: 592px;
    max-width: 592px;
    justify-content: space-between;
    > li {
      width: 25%;
      a {
        display: block;
        width: 100%;
        height: 100%;
        i {
          display: block;
          margin: 0 auto;
          width: 88px;
          height: 88px;
        }
        .name {
          margin-top: 16px;
          font-weight: 400;
          font-size: 20px;
          height: 40px;
          line-height: 40px;
          color: $font-dark;
        }
      }
      &.discord {
        a {
          i {
            background: url("@/assets/home/contactUsBlock/discord.svg") no-repeat center;
            background-size: 100% auto;
          }
        }
      }
      &.twitter {
        a {
          i {
            background: url("@/assets/home/contactUsBlock/twitter.svg") no-repeat center;
            background-size: 100% auto;
          }
        }
      }
      &.telegram {
        a {
          i {
            background: url("@/assets/home/contactUsBlock/telegram.svg") no-repeat center;
            background-size: 100% auto;
          }
        }
      }
      &.knowledge {
        a {
          i {
            background: url("@/assets/home/contactUsBlock/knowledge.svg") no-repeat center;
            background-size: 100% auto;
          }
        }
      }
    }
  }
}

@include media(sm) {
  .contactUsBlock {
    margin: 55px auto 60px;
    .title {
      font-size: 22px;
      height: 32px;
      line-height: 32px;
    }
    .link {
      margin: 33px auto 0;
      width: 196px;
      max-width: 196px;
      justify-content: space-between;
      flex-wrap: wrap;
      > li {
        width: 50%;
        a {
          width: 48px;
          text-align: center;
          i {
            margin: 0;
            width: 48px;
            height: 48px;
          }
          .name {
            margin-top: 8px;
            font-size: 14px;
            height: 20px;
            line-height: 20px;
          }
        }
        &:nth-of-type(2n) {
          a {
            float: right;
          }
        }
        &:nth-of-type(3), &:nth-of-type(4) {
          margin-top: 40px;
        }
      }
    }
  }
}
</style>
