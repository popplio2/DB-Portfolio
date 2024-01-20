<template>
  <div>
    <FullNav />
    <CaseStudy>
      <template v-slot:title>Kingdom of Galgudd</template>
      <template v-slot:image>
        <img
          src="../assets/galgudd.png"
          alt="An image of the landing section of the website."
        />
      </template>
      <template v-slot:buttons>
        <a href="https://galgudd.netlify.app" target="blank">
          <Button>See the website ➤</Button>
        </a>
        <a
          href="https://github.com/staten-island-tech/html-scss-mastery-project-charlaniel-brisjula"
          target="blank"
        >
          <Button>Read the code ➤</Button>
        </a>
      </template>
      <template v-slot:info>
        <p>
          <b>Teammate:</b>
          Charley Baluja
        </p>
        <p>
          <b>Course:</b>
          Computer Science and Engineering
        </p>
        <p>
          <b>Tools:</b>
          HTML, SCSS, JavaScript, Figma
        </p>
      </template>
      <template v-slot:overview>
        <p>
          For my first major project in my junior-year computer science class, I
          partnered up with a classmate to create a website that advertised a
          country—or in our case, a fictional kingdom. The website leverages CSS
          responsive design principles to display different versions of sections
          depending on the device that the user is viewing the website on. The
          website also makes full use of CSS hover effects to create an
          interactive user experience. I was mainly responsible for the landing
          section and footer, as well as the attractions and wildlife sections.
          I also helped Charley with the hover effects in the history section.
          Before coding the site, we designed high-fidelity wireframes in Figma.
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
