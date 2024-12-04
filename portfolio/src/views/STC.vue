<template>
  <div>
    <FullNav />
    <CaseStudy>
      <template v-slot:title>SubjectToClimate Internship</template>
      <template v-slot:image>
        <img src="../assets/stc.png" alt="" />
      </template>
      <template v-slot:buttons>
        <a
          href="https://subjecttoclimate.org/climate-change-explainers"
          target="blank"
        >
          <Button>See the website ➤</Button>
        </a>
      </template>
      <template v-slot:info>
        <p>
          <b>Summer Internship:</b>
          July 2024 - September 2024
        </p>
        <p>
          <b>Tools:</b>
          Vue.js, Tailwind CSS, Laravel PHP
        </p>
      </template>
      <template v-slot:overview>
        <p>
          For summer 2024, I was accepted to the Global Mitigation Project's
          <a
            href="https://www.globalwarmingmitigationproject.org/constellations"
            target="_blank"
            >Constellations Fellowship </a
          >, under which I completed a Web Developer Internship at
          SubjectToClimate. My main contribution was creating the Climate Change
          Explainers page linked above.
        </p>
        <p>
          This involved close collaboration with the design team, marketing, and
          other developers to ensure the project met its goals. I also had to
          quickly learn new programming languages, libraries, and APIs, which
          sharpened my problem-solving skills and increased my ability to work
          independently. Working remotely also improved my communication skills,
          particularly in presenting my progress to leadership and knowing when
          to ask key questions.
        </p>
        <p>
          For example, at the end of my fellowship, I presented my
          accomplishments to the leadership of the Constellations Fellowship!
          The presentation is included below.
        </p>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vT0M5kBQZFzsI4X4RQ3Cbc8OHIIDcfgSCp8CGxKHVGts7pEfB37CDBypQ0Yl1mu2Vi6ZbDOj0H7Psz0/embed?start=false&loop=true&delayms=3000"
          frameborder="0"
          width="960"
          height="569"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          style="
            width: 80%;
            height: 50rem;
            margin: 2rem 10%;
            border: lightgray 0.1rem solid;
          "
        ></iframe>
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
