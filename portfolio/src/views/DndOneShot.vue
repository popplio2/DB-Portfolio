<template>
    <div>
        <FullNav />
        <CaseStudy>
          <template v-slot:title>D&D One-Shot</template>
          <template v-slot:image>
            <img src="../assets/dnd.png" alt="">
          </template>
          <template v-slot:buttons>
            <a href="https://dnd1shot.netlify.app" target="blank">
                <Button>See the website ➤</Button>
            </a> 
            <a href="https://github.com/staten-island-tech/api-project-charlanielbrisluja" target="blank">
                <Button>Read the code ➤</Button>
            </a>
          </template>
          <template v-slot:info>
             <p><b>Team Size:</b>
                Partner
              </p>
              <p><b>Course:</b> 
                Computer Science (11th grade)
              </p> 
              <p><b>Tools:</b> 
                HTML, SCSS, JavaScript, Figma
              </p> 
          </template>
          <template v-slot:overview>Aside from walking the user through the process of creating their own Dungeons and Dragons one-shot, the goal of this project was to fetch data from an API and display it to the user upon user action. We accomplished this in the Monsters section, which allows the user to search for monsters and see their information. Data from the API is also statically displayed in the Setting and Characters sections, allowing the user to form their one-shot based on authentic data from the DnD API.</template>

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