<template>
  <div class="partnerCard">
    <div class="avatar">
      <img class="pic" :src="pic" alt="" :style="{ backgroundColor }"/>
      <div class="title">{{ title }}</div>
      <div class="name">{{ name }}</div>
    </div>
    <div class="cover">
      <div class="title">{{ title }}</div>
      <div class="name">{{ name }}</div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'partnerCard',
  props: {
    pic: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
    name: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
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
.partnerCard {
  cursor: pointer;
  position: relative;
  width: 290px;
  height: 315px;
  box-shadow: 0px 0px 12px -3px rgba(61, 82, 120, 0.12), 0px 0px 24px -2px rgba(61, 82, 120, 0.08);
  border-radius: 4px;
  overflow: hidden;
  .avatar,
  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .pic {
      display: block;
      width: 289px;
      height: 229px;
      object-fit: contain;
      object-position: bottom;
    }
    .title {
      text-align: left;
      font-weight: 500;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: 0.03em;
      color: $font_gray_light;
    }
    .name {
      text-align: left;
      font-weight: 500;
      font-size: 20px;
      line-height: 29px;
      letter-spacing: 0.03em;
      color: $font_dark;
    }
  }
  .avatar {
    .title,
    .name {
      margin-top: 8px;
      margin-left: 24px;
    }
  }
  .cover {
    background: #fff;
    opacity: 0;
    transition: all 0.2s;
    &:hover {
      opacity: 1;
    }
    padding: 24px;
    box-sizing: border-box;
    .title,
    .name {
      margin-top: 8px;
    }
    .description {
      margin-top: 34px;
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.03em;
      color: $font_gray;
      text-align: left;
    }
  }
}

@include media(md) {
  .partnerCard {
    width: 144px;
    height: 216px;
    .avatar,
    .cover {
      .pic {
        width: 144px;
        height: 151px;
      }
      .title {
        font-size: 10px;
        line-height: 14px;
      }
      .name {
        font-size: 14px;
        line-height: 20px
      }
    }
    .avatar {
      .title,
      .name {
        margin-left: 12px;
      }
      .name {
        margin-top: 0;
      }
    }
    .cover {
      padding: 12px;
      .description {
        margin-top: 22px;
        font-size: 10px;
        line-height: 14px;
      }
    }
  }
}
</style>
