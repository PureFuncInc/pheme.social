<template>
  <div class="playCard">
    <div class="top">
      <div class="user">
        <div class="avatar">
          <img :src="userAvatar" alt="" />
        </div>
        <div class="userName">{{ userName }}</div>
      </div>
      <div class="postTime">{{ postTime }}</div>
    </div>
    <div class="text">{{ text }}</div>
    <div class="playWave">
      <picture>
        <source srcset="@/assets/home/intro/playWave-mobile.png" media="(max-width: 768px)"/>
        <img src="@/assets/home/intro/playWave.png" alt="" loading="lazy"/>
      </picture>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlayCardComponent',
  props: {
    userAvatar: {
      type: String,
      default: '',
    },
    userName: String,
    postTime: String,
    text: String,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.playCard {
  background: #fff;
  width: 358px;
  height: 167px;
  padding: 25px;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(40, 41, 61, 0.04), 0px 2px 10px rgba(96, 97, 112, 0.16);
  border-radius: 7px;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .user {
      display: flex;
      align-items: center;
      .avatar {
        width: 32px;
        height: 32px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .userName {
        margin-left: 12px;
        font-weight: 500;
        font-size: 14px;
        height: 16px;
        line-height: 16px;
      }
    }
    .postTime {
      font-weight: 400;
      font-size: 12px;
      height: 15px;
      line-height: 15px;
      color: $dark04;
    }
  }
  .text {
    margin-top: 15px;
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    height: 21px;
    line-height: 21px;
  }
  .playWave {
    margin-top: 10px;
    width: 100%;
    img {
      width: 100%;
    }
  }
}

@include media(sm) {
  .playCard {
    width: 240px;
    height: 111px;
    padding: 16px;
    .top {
      .user {
        .avatar {
          width: 24px;
          height: 24px;
        }
        .userName {
          line-height: 18px;
        }
      }
    }
    .text {
      margin-top: 8px;
      font-size: 14px;
    }
    .playWave {
      margin-top: 8px;
      width: 100%;
      height: 18px;
    }
  }
}
</style>
