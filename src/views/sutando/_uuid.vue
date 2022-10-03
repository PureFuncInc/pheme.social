<template>
  <div class="sutando-page">
    <router-link class="logo" to="/">
      <img src="@/assets/sutando/logo.png" alt="" />
    </router-link>
    <div class="sutando-info">
      <div class="main-info">
        <div class="avatar">
          <img :src="sutandoData.imageUrl" alt="" />
        </div>
        <div class="data">
          <div class="name">#{{ sutandoData.name }}</div>
          <div class="rarity">
            <div class="title">稀有度</div>
            <div class="score">{{ sutandoData.rarity }}</div>
          </div>
          <div class="level">
            <div class="title">等級</div>
            <div class="score">{{ sutandoData.level }}</div>
          </div>
          <div class="casting">
            <div class="title">鑄造</div>
            <div class="score">{{ sutandoData.level }} / 7</div>
          </div>
        </div>
      </div>
      <div class="sub-info">
        <div class="age">
          <div class="title">年齡</div>
          <div class="score">{{ sutandoData.age }} <span>days</span></div>
        </div>
        <div class="height">
          <div class="title">身高</div>
          <div class="score">{{ sutandoData.height }} <span>m</span></div>
        </div>
        <div class="weight">
          <div class="title">體重</div>
          <div class="score">{{ sutandoData.weight }} <span>kg</span></div>
        </div>
        <div class="gender">
          <div class="title">性別值</div>
          <div class="score">{{ sutandoData.sex }} <span>%</span></div>
        </div>
      </div>
    </div>
    <div class="sutando-skill">
      <div class="title">技能</div>
      <div class="skill-block">
        <div class="str">
          <img class="logo" src="@/assets/sutando/STR.svg" alt="str" />
          <div class="score">
            <span class="name">力量</span>
            <span class="number">{{ sutandoData.strength }}</span>
          </div>
          <div class="score-bar">
            <i :style="{ width: `${sutandoData.strength}%` }" />
          </div>
        </div>
        <div class="int">
          <img class="logo" src="@/assets/sutando/INT.svg" alt="int" />
          <div class="score">
            <span class="name">智力</span>
            <span class="number">{{ sutandoData.intelligence }}</span>
          </div>
          <div class="score-bar">
            <i :style="{ width: `${sutandoData.intelligence}%` }" />
          </div>
        </div>
        <div class="dex">
          <img class="logo" src="@/assets/sutando/DEX.svg" alt="dex" />
          <div class="score">
            <span class="name">敏捷</span>
            <span class="number">{{ sutandoData.dexterity }}</span>
          </div>
          <div class="score-bar">
            <i :style="{ width: `${sutandoData.dexterity}%` }" />
          </div>
        </div>
        <div class="luk">
          <img class="logo" src="@/assets/sutando/LUK.svg" alt="luk" />
          <div class="score">
            <span class="name">幸運</span>
            <span class="number">{{ sutandoData.luck }}</span>
          </div>
          <div class="score-bar">
            <i :style="{ width: `${sutandoData.luck}%` }" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from '@/store';

export default defineComponent({
  name: 'SutandoDisplayPage',
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const sutandoData = computed(() => store.state.api.animals.sutando);

    onMounted(() => {
      store.dispatch('animals/FETCH_GET_SUTANDO', {
        uuId: route.params.uuid,
      });
    });
    return {
      uuid: route.params.uuid,
      sutandoData,
    };
  },
});
</script>

<style lang="scss" scoped>
.sutando-page {
  position: relative;
  > .logo {
    position: absolute;
    width: 133px;
    height: 40px;
    top: 40px;
    left: 50px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .sutando-info {
    width: 100%;
    height: 569px;
    background: url("@/assets/sutando/bg.png") no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding: 87px 24px 0;
    .main-info {
      margin: 0 auto;
      display: flex;
      align-items: center;
      max-width: 594px;
      height: 320px;

      .avatar {
        flex: 1;
        order: 2;
        width: 290px;
        height: 320px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .data {
        flex: 1;
        order: 1;
        text-align: left;
        .name {
          color: $font_dark;
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 30px;
        }
        .rarity,
        .level,
        .casting {
          margin-top: 20px;
          display: flex;
          .title {
            margin-top: 8px;
            width: 60px;
            height: 25px;
            color: $font_gray;
            font-size: 20px;
            font-weight: 500;
          }
          .score {
            margin-left: 44px;
            color: $font_dark;
            font-size: 40px;
            font-weight: 500;
          }
        }
      }
    }
    .sub-info {
      margin: 50px auto 0;
      max-width: 696px;
      height: 72px;
      display: flex;
      justify-content: space-between;
      .age,
      .height,
      .weight,
      .gender {
        width: 144px;
        height: 72px;
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
        background: rgba(255, 255, 255, 0.5);
        @include shadow_02;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 10px;
        .title {
          color: $font_gray;
          font-weight: 500;
          font-size: 12px;
        }
        .score {
          align-self: flex-end;
          color: $font_dark;
          font-weight: 500;
          font-size: 20px;
          span {
            color: $font_gray_light;
            font-size: 14px;
          }
        }
      }
      .gender {
        margin-right: 0;
      }
    }
  }
  .sutando-skill {
    padding: 28px 24px 44px;
    margin: 0 auto;
    max-width: 696px;
    > .title {
      text-align: left;
      font-weight: 500;
      font-size: 14px;
      color: #000000;
    }
    .skill-block {
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .str,
      .int,
      .dex,
      .luk {
        margin-bottom: 66px;
        width: calc(50% - 10px);
        height: 128px;
        background: #ffffff;
        @include shadow_02;
        border-radius: 12px;
        box-sizing: border-box;
        padding: 14px 10px 26px;
        .logo {
          width: 48px;
          height: 48px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .score {
          margin: 10px auto 0;
          width: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .name {
            color: $font_gray;
            font-weight: 500;
            font-size: 12px;
          }
          .number {
            width: 23px;
            color: $font_dark;
            font-weight: 500;
            font-size: 20px;
          }
        }
        .score-bar {
          margin-top: 7px;
          width: 100%;
          height: 6px;
          background: #fbe9cd;
          border-radius: 10px;
          overflow: hidden;
          i {
            display: block;
            height: 100%;
            background: linear-gradient(270deg, #febf10 0%, #fedb7c 100%);
            border-radius: 10px;
          }
        }
      }
      .dex,
      .luk {
        margin-bottom: 0;
      }
    }
  }
}

@include media(xs) {
  .sutando-page {
    > .logo {
      top: 20px;
      left: 25px;
    }
    .sutando-info {
      height: auto;
      padding: 87px 24px 24px;
      .main-info {
        display: block;
        height: auto;
        .avatar {
          width: 100%;
        }
        .data {
          margin-top: 24px;
        }
      }
      .sub-info {
        margin: 0 auto;
        height: auto;
        justify-content: space-around;
        flex-wrap: wrap;
        .age,
        .height,
        .weight,
        .gender {
          margin: 24px 12px 0;
        }
        .gender {
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
