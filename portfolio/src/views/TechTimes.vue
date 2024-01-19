<template>
  <div>
    <FullNav />
    <CaseStudy>
      <template v-slot:title>Tech Times</template>
      <template v-slot:image>
        <img src="../assets/techtimes.png" alt="" />
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
        <p>
          <b>Teammates:</b>
          Edis Gonuler (team lead), Alston Chan, Charley Baluja, Ethan Liang,
          Melvin Aziz, Carol Lian
        </p>
        <p>
          <b>Course:</b>
          Work (Summer Youth Employment Program)
        </p>
        <p>
          <b>Role:</b>
          Lead Front-End Developer, UI Designer
        </p>
        <p>
          <b>Tools:</b>
          Nuxt.js, Figma
        </p>
      </template>
      <template v-slot:overview>
        <p>
          Tech Times is an open-source newspaper application built in Nuxt.js
          that allows students in our school to post articles and for other
          students to read them.
        </p>
        <p>
          Until we developed Tech Times, our newspaper club had nowhere to
          publish its articles. Now, Tech Times will be used by our school's
          newspaper club and Journalism class.
        </p>
        <p>
          I worked on the front-end and collaborated with both front-end and
          back-end developers. Charley, Alston, and I designed the initial
          interface for the entire application. Later, we ended up redesigning
          the homepage to make it cleaner and more responsive, which I played a
          major role in doing. I also developed components, assembled the
          Article view, and designed themes in Figma.
        </p>
        <p>
          To ensure that our work was cohesive, we developed a design system
          using CSS custom properties, which also allowed us to easily create
          fun themes. To divide up responsibilities, we used a website called
          Trello that allowed us to assign tasks and see each other's progress.
          Later, we used Github issues as well.
        </p>
        <p>
          Charley and I also trained two new front-end developers on our
          workflow and codebase. We hope that the project will continue to live
          on with a new generation of developers!
        </p>
      </template>
    </CaseStudy>
  </div>
</template>
<script>
import FullNav from "@/components/FullNav.vue";
import CaseStudy from "@/components/CaseStudy.vue";
import Button from "@/components/Button.vue";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    FullNav,
    CaseStudy,
    Button,
  },
};
</script>

<style></style>
