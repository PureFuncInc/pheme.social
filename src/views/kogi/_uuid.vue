<template>
  <div class="kogi-page">
    <router-link class="logo" to="/">
      <img src="@/assets/kogi/logo.png" alt="" />
    </router-link>
    <div class="kogi-info">
      <div class="main-info">
        <div class="avatar">
          <img :src="kogiData.imageUrl" alt="" />
        </div>
        <div class="data">
          <div class="name">#{{ kogiData.name }}</div>
          <div class="rarity">
            <div class="title">稀有度</div>
            <div class="score">{{ kogiData.rarity }}</div>
          </div>
          <div class="level">
            <div class="title">等級</div>
            <div class="score">{{ kogiData.level }}</div>
          </div>
          <div class="casting">
            <div class="title">鑄造</div>
            <div class="score">{{ kogiData.level }} / 7</div>
          </div>
        </div>
      </div>
      <div class="sub-info">
        <div class="group-1">
          <div class="age">
            <div class="title">年齡</div>
            <div class="score">{{ kogiData.age }} <span>days</span></div>
          </div>
          <div class="height">
            <div class="title">身高</div>
            <div class="score">{{ kogiData.height }} <span>cm</span></div>
          </div>
        </div>
        <div class="group-2">
          <div class="weight">
            <div class="title">體重</div>
            <div class="score">{{ kogiData.weight }} <span>g</span></div>
          </div>
          <div class="gender">
            <div class="title">性別值</div>
            <div class="score">
              <div class="male">{{ kogiData.sex }}% <i /></div>
              <div class="female">{{ 100 - kogiData.sex }}% <i /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="kogi-skill">
      <div class="title">技能</div>
      <div class="skill-block">
        <div class="str">
          <img class="logo" src="@/assets/kogi/STR.svg" alt="str" />
          <div class="score">
            <span class="name">力量</span>
            <span class="number">{{ kogiData.strength }}</span>
          </div>
          <div class="score-bar">
            <i :style="{ width: `${kogiData.strength}%` }" />
          </div>
        </div>
        <div class="int">
          <img class="logo" src="@/assets/kogi/INT.svg" alt="int" />
          <div class="score">
            <span class="name">智力</span>
            <span class="number">{{ kogiData.intelligence }}</span>
          </div>
          <div class="score-bar">
            <i :style="{ width: `${kogiData.intelligence}%` }" />
          </div>
        </div>
        <div class="dex">
          <img class="logo" src="@/assets/kogi/DEX.svg" alt="dex" />
          <div class="score">
            <span class="name">敏捷</span>
            <span class="number">{{ kogiData.dexterity }}</span>
          </div>
          <div class="score-bar">
            <i :style="{ width: `${kogiData.dexterity}%` }" />
          </div>
        </div>
        <div class="luk">
          <img class="logo" src="@/assets/kogi/LUK.svg" alt="luk" />
          <div class="score">
            <span class="name">幸運</span>
            <span class="number">{{ kogiData.luck }}</span>
          </div>
          <div class="score-bar">
            <i :style="{ width: `${kogiData.luck}%` }" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import {
  useRoute,
  // useRouter,
} from 'vue-router';
import { useStore } from '@/store';

export default defineComponent({
  name: 'KogiDisplayPage',
  components: {},
  setup() {
    const store = useStore();
    const route = useRoute();
    // const router = useRouter();
    const kogiData = computed(() => store.state.api.animals.kogi);

    onMounted(() => {
      store.dispatch('animals/FETCH_GET_KOGI', {
        uuId: route.params.uuid,
        onFailed: () => {
          // router.push({ path: '/' });
        },
      });
    });
    return {
      uuid: route.params.uuid,
      kogiData,
    };
  },
});
</script>

<style lang="scss" scoped>
.kogi-page {
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
  .kogi-info {
    width: 100%;
    height: 569px;
    background: url("@/assets/kogi/bg.png") no-repeat;
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
      .group-1,
      .group-2 {
        width: 50%;
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
          position: relative;
          width: 205px;
          margin-right: 0;
          .score {
            position: absolute;
            width: calc(100% - 20px);
            display: flex;
            > div {
              width: 50%;
              display: flex;
              justify-content: center;
              align-items: flex-end;
              > i {
                width: 9px;
                height: 18px;
                display: block;
                margin-left: 8px;
              }
            }
            .male {
              i {
                background: url("@/assets/kogi/male.svg") no-repeat center;
                background-size: 9px auto;
              }
            }
            .female {
              i {
                background: url("@/assets/kogi/female.svg") no-repeat center;
                background-size: 9px auto;
              }
            }
          }
        }
      }
    }
  }
  .kogi-skill {
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
  .kogi-page {
    > .logo {
      top: 20px;
      left: 25px;
    }
    .kogi-info {
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
        display: block;
        .group-1,
        .group-2 {
          width: 100%;
          justify-content: space-between;
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
}
</style>
