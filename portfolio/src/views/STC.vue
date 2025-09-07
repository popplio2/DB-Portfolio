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
        <div><p>*Website has been updated since my internship</p></div>
      </template>
      <template v-slot:info>
        <p>
          <b>Summer Internship:</b>
          July 2024 - September 2024
        </p>
        <p>
          <b>Frontend:</b> Vue.js, Vue InstantSearch, HTML, CSS, JavaScript,
          IntersectionObserver
        </p>
        <p>
          <b>Backend:</b> Laravel, Laravel Nova, Eloquent ORM, Tinker
          (interactive debugging)
        </p>
      </template>
      <template v-slot:overview>
        <h3>Overview</h3>
        <p>
          For summer 2024, I was accepted to the Global Mitigation Project's
          <a
            href="https://www.globalwarmingmitigationproject.org/constellations"
            target="_blank"
            >Constellations Fellowship </a
          >, under which I completed a Web Developer Internship at
          SubjectToClimate. My main contribution was creating a new Climate
          Change Explainers page that hosted MIT-developed articles natively on
          our website instead of a third-party domain, allowing us to retain SEO
          value and track analytics from user traffic.
        </p>
        <h3>Technical Contributions</h3>
        <p>
          This project gave me the opportunity to work across the full stack. On
          the frontend, I built the page using Vue.js, implementing dynamic
          search and filtering features with Vue InstantSearch. To create a
          smooth browsing experience, I developed an infinite scroll system
          using IntersectionObserver, which required customizing how
          InstantSearch handled pagination. By watching props like page and
          isLastPage, I built logic to prevent 1000s of unnecessary requests
          once the last page was reached, and ensured the results reset properly
          when filters changed.
        </p>
        <p>
          On the backend, I worked within a Laravel environment and used Laravel
          Nova to design models and controllers that connected the database to
          the frontend components. I also ran PHP commands in Tinker, Laravel’s
          interactive command-line interface, to debug database and model
          issues, including troubleshooting missing records and resolving
          attribute errors.
        </p>
        <h3>Skills I Developed</h3>

        <p>
          I collaborated closely with the design team, marketing, and other
          developers to align technical development with organizational goals. I
          also had to quickly learn new programming languages, libraries, and
          APIs, which sharpened my problem-solving skills and strengthened my
          ability to work independently. Working remotely improved my
          communication skills, particularly in presenting progress to
          leadership and knowing when to ask key questions.
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

<style scoped>
h3 {
  margin-top: 1rem;
  text-align: center;
  color: var(--main-color);
}
</style>
