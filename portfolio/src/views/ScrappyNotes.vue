<template>
    <div>
        <FullNav />
        <CaseStudy>
          <template v-slot:title>Scrappy Notes</template>
          <template v-slot:image>
            <img src="../assets/scrappy.png" alt="">
          </template>
          <template v-slot:buttons>
            <a href="https://scrappynotes.netlify.app" target="blank">
                <Button>See the website ➤</Button>
            </a> 
            <a href="https://github.com/staten-island-tech/vue-reactivity-project-popplio2" target="blank">
                <Button>Read the code ➤</Button>
            </a>
          </template>
          <template v-slot:team> Individual</template>
          <template v-slot:tools> Vue.js</template>
          <template v-slot:overview>This is what I did basically!</template>
          <template v-slot:process>I did it this way...</template>
          <template v-slot:reflection>I messed up a lot but still good.</template>

        </CaseStudy>
    </div>
</template>
<script>
import FullNav from '@/components/FullNav.vue';
import CaseStudy from '@/components/CaseStudy.vue';
import Button from '@/components/Button.vue';

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    FullNav,
    CaseStudy,
    Button
  }
}
</script>

<style> 
</style>