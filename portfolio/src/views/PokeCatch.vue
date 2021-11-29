<template>
    <div>
        <FullNav />
        <CaseStudy>
          <template v-slot:title>Poké-Catch</template>
          <template v-slot:image>
            <img src="../assets/pokecatch.png" alt="">
          </template>
          <template v-slot:buttons>
            <a href="https://pokecatch-game.netlify.app" target="blank">
                <Button>See the website ➤</Button>
            </a> 
            <a href="https://github.com/popplio2/AP-CSP-Create-Task" target="blank">
                <Button>Read the code ➤</Button>
            </a>
          </template>
          <template v-slot:team> Individual</template>
          <template v-slot:tools> HTML, SCSS, JavaScript</template>
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
  components: {
    FullNav,
    CaseStudy,
    Button
  }
}
</script>

<style>

</style>