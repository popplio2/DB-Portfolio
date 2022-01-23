<template>
    <div>
        <FullNav />
        <CaseStudy>
          <template v-slot:title>Tech Times</template>
          <template v-slot:image>
            <img src="../assets/techtimes.png" alt="">
          </template>
          <template v-slot:buttons>
            <a href="https://sitechtimes.com" target="blank">
                <Button>See the website ➤</Button>
            </a> 
            <a href="https://github.com/sitechtimes/sitechtimes" target="blank">
                <Button>Read the code ➤</Button>
            </a>
          </template>
          <template v-slot:info>
             <p><b>Team Size:</b>
                7 
              </p>
              <p><b>Course:</b> 
                Work (Summer Youth Employment Program)
              </p> 
              <p><b>Role:</b> 
                Lead Front-End Developer, UI Designer
              </p> 
              <p><b>Tools:</b> 
                Nuxt.js, Figma
              </p> 
          </template>
          <template v-slot:overview>Tech Times is an open-source newspaper application built in Nuxt.js that allows students in our school to post articles and for other students to read them. Until we developed Tech Times, our newspaper club had nowhere to publish its articles. Now, Tech Times will be used by our school's newspaper club and Journalism class. Though I worked in a front-end capacity, I collaborated with both front-end and back-end developers. I contributed heavily to the design of the website, and I built many of the components, including the article page. To ensure that our work was cohesive, we developed a design system using CSS custom properties, which also allowed us to easily create themes. To divide up responsibilities, we used a website called Trello that allowed us to assign tasks and see each other's progress. Our website is still a work in progress, and we will continue building on it and recruiting new generations of developers to update it.</template>
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
