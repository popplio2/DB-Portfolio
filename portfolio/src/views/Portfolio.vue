<template>
  <div>
    <FullNav />
    <CaseStudy>
      <template v-slot:title>My Portfolio</template>
      <template v-slot:image>
        <img
          src="../assets/portfolio.png"
          alt="An image of the Skills section of the website."
        />
      </template>
      <template v-slot:buttons>
        <a href="https://github.com/popplio2/DB-Portfolio" target="blank">
          <Button>Read the code ➤</Button>
        </a>
      </template>
      <template v-slot:info>
        <p>
          <b>Teammates:</b>
          N/A (Individual Project)
        </p>
        <p>
          <b>Course:</b>
          N/A (Personal Project)
        </p>
        <p></p>
        <p>
          <b>Tools:</b>
          Vue.js
        </p>
      </template>
      <template v-slot:overview
        >To create my portfolio, I used the Vue.js JavaScript framework, which
        allowed me to create resuable components, such as the button that I use
        throughout the website. Something that was especially useful was Vue
        slots, which I used to inject text or elements into reusable wrapper
        components. For example, I used the same button component multiple times
        but gave it different text each time using slots. I plan to keep
        developing this portfolio by adding both new projects (there are big
        things in store for the future!) and more information about the projects
        already included (I aim to add sections for each project that show my
        work process and my reflection on the project).</template
      >
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
