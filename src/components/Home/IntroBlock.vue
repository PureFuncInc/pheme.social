<template>
  <div class="introBlock">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IntroBlockComponent',
  setup() {
    return {
    };
  },
});
</script>

<style scoped lang="scss">
.introBlock {
}

@include media(sm) {
  .introBlock {
  }
}
</style>
