<template>
  <div class="teamBlock" id="team">
    <div class="title">Our team</div>
    <div class="partner-group">
      <partner-card
        :pic="require('@/assets/home/teamBlock/Wade.png')"
        background-color="#5ABEBE"
        name="Wade"
        title="Cofounder & CEO"
        description="Wade is the CEO of Pheme. He is a strategic thinker and a decisive leader,
        with a focus on building long-term value for our clients and stakeholders
        through the development of innovative technical solutions."
      />
      <partner-card
        :pic="require('@/assets/home/teamBlock/Vincent.png')"
        background-color="#546AB2"
        name="Vincent"
        title="Cofounder & Senior Developer"
        description="Vincent is a coder, speaker, mentor and leader has wide range skill set. He specializes in JVM Backend and DevOps. Reach him via https://jianminhuang.cc !"
      />
      <partner-card
        :pic="require('@/assets/home/teamBlock/Nelson.png')"
        background-color="#89C463"
        name="Nelson"
        title="Cofounder & Senior Developer"
        description="Nelson is a frontend and mobile developer.
        He has a track record of delivering high-quality code and skilled at
        bringing ideas to life through innovative and effective web and mobile solutions."
      />
      <partner-card
        :pic="require('@/assets/home/teamBlock/Daniel.png')"
        background-color="#BDBDBD"
        name="Daniel"
        title="Cofounder & Senior Developer"
        description="Daniel is a senior frontend developer have over 4 years of experience
        in web development and specialize in building interactive and
        user-friendly websites and applications."
      />
      <partner-card
        :pic="require('@/assets/home/teamBlock/April.png')"
        background-color="#FFA17D"
        name="April"
        title="UI / UX Director"
        description="April is a creative and strategic design leader
        with a track record of delivering impactful design solutions for a variety of clients.
         She leads a talented team of designers and work closely with clients to
         bring their vision to life."
      />
      <partner-card
        :pic="require('@/assets/home/teamBlock/Yun.png')"
        background-color="#E47F80"
        name="Yun"
        title="Senior UI / UX Designer"
        description="Yun is a senior designer have a strong eye for aesthetics
        and skilled at crafting compelling visual narratives that engage and inspire audiences."
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PartnerCard from '@/components/Home/TeamBlock/PartnerCard.vue';

export default defineComponent({
  name: 'TeamBlockComponent',
  components: {
    PartnerCard,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.teamBlock {
  margin-top: 78px;
  padding-top: 78px;
  .title {
    font-weight: 500;
    font-size: 32px;
    height: 46px;
    line-height: 46px;
    color: $font_dark;
  }
  .partner-group {
    margin: 60px auto 0;
    width: 960px;
    height: 690px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
  }
}

@include media(md) {
  .teamBlock {
    margin-top: 55px;
    padding-top: 55px;
    .title {
      font-size: 22px;
      height: 32px;
      line-height: 32px;
    }
    .partner-group {
      margin: 26px auto 0;
      width: 311px;
      height: 678px;
      // display: flex;
      // flex-wrap: wrap;
      // justify-content: space-between;
      // align-content: space-between;
    }
  }
}
</style>
