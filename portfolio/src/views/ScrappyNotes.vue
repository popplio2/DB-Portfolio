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
          <template v-slot:info>
             <p><b>Team Size:</b>
                Individual
              </p>
              <p><b>Course:</b> 
                AP Computer Science Principles (12th grade)
              </p> 
              <p><b>Tools:</b> 
                HTML, CSS, JavaScript
              </p> 
          </template>
          <template v-slot:overview>Scrappy Notes is an app built in the Vue.js JavaScript framework, and it serves to provide a creative space for writing down whatever you need to write or whatever comes to mind. The most important part of the app lies in the user’s ability to choose what color note they want. I accomplished this using Vue v-for directive, which allowed me to iterate over an array that kept track of all of the notes the user has created (and their colors), and Vue props, which allowed me to pass data containing the color of each note to a reusable note component, in which I dynamically styled the note according to its corresponding color.</template>
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