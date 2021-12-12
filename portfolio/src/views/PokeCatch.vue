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
          <template v-slot:info>
             <p><b>Team Size:</b>
                Individual
              </p>
              <p><b>Course:</b> 
                AP Computer Science Principles(12th grade)
              </p> 
              <p><b>Tools:</b> 
                HTML, CSS, JavaScript
              </p> 
          </template>
          <template v-slot:overview>Poké-Catch is my first project from my AP Computer Science Principles (AP CSP) course. Built to satisfy the requirements of the AP CSP Create Task, Poké-Catch retrieves data about a random Pokémon in the PokéAPI and displays the data to the user, giving the user the ability to catch the Pokémon, which would save it in the Pokédex displayed on the screen. This is accomplished by storing the caught Pokémon in an array, in which they are sorted according to their official Pokédex number using built-in JavaScript methods.</template>
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