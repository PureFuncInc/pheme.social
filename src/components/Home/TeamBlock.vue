<template>
  <div class="teamBlock" id="team">
    <div class="title">Our team</div>
    <div class="partner-group">
      <partner-card
        pic="https://pheme.social/Wade.jpeg"
        name="Wade"
        title="Cofounder & CEO"
        description="Vincent is a coder, speaker, mentor and leader has wide range skill set. He specializes in JVM Backend and DevOps. Reach him via https://jianminhuang.cc !"
      />
      <partner-card
        pic="https://pheme.social/Vincent.jpeg"
        name="Vincent"
        title="Cofounder & Senior Developer"
        description="Vincent is a coder, speaker, mentor and leader has wide range skill set. He specializes in JVM Backend and DevOps. Reach him via https://jianminhuang.cc !"
      />
      <partner-card
        pic="https://pheme.social/Nelson.jpeg"
        name="Nelson"
        title="Cofounder &  Senior Developer"
        description="Vincent is a coder, speaker, mentor and leader has wide range skill set. He specializes in JVM Backend and DevOps. Reach him via https://jianminhuang.cc !"
      />
      <partner-card
        pic="https://pheme.social/Daniel.jpeg"
        name="Daniel"
        title="Cofounder &  Senior Developer"
        description="Vincent is a coder, speaker, mentor and leader has wide range skill set. He specializes in JVM Backend and DevOps. Reach him via https://jianminhuang.cc !"
      />
      <partner-card
        :pic="require('@/assets/home/teamBlock/april.png')"
        name="April"
        title="UI / UX Director"
        description="Vincent is a coder, speaker, mentor and leader has wide range skill set. He specializes in JVM Backend and DevOps. Reach him via https://jianminhuang.cc !"
      />
      <partner-card
      :pic="require('@/assets/home/teamBlock/yun.png')"
        name="Yun"
        title="Senior UI / UX Designer"
        description="Vincent is a coder, speaker, mentor and leader has wide range skill set. He specializes in JVM Backend and DevOps. Reach him via https://jianminhuang.cc !"
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

@include media(sm) {
  .teamBlock {
  }
}
</style>
