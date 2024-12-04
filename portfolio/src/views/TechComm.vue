<template>
  <div>
    <FullNav />
    <CaseStudy>
      <template v-slot:title>Technical Communications</template>
      <template v-slot:image>
        <img src="../assets/techcomm.png" alt="" />
      </template>
      <template v-slot:info>
        <p>
          <b>Course:</b>
          Technical Communications
        </p>
      </template>
      <template v-slot:overview>
        <h3>Technical Instructions</h3>
        <p>
          This project was an exercise in technical writing. These instructions
          guide a general audience (with a lack of specialized knowledge)
          through a technical task. I chose to document how to edit your privacy
          settings on Instagram. I made sure to include helpful graphics that
          complement the text and necessary warnings to make sure that the user
          is informed on possible side effects.
        </p>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vSiRxR5EBd9ZUIKGC4BKmPkW1Mq1tyPohxrlVp_ax3JGFhzWeegGCUlhRbUElXOLOA3MHmCNlmDL5FW/pub?embedded=true"
          style="
            width: 80%;
            height: 50rem;
            margin: 2rem 10%;
            border: lightgray 0.1rem solid;
          "
          frameborder="0"
        ></iframe>
        <h3>Press Release</h3>
        <p>
          For this project, I wrote a media release about Illusion Dance
          Competition, an upcoming event I was working on organizing as an
          E-Board member of Deja Vu Dance Team. I used engaging and descriptive
          language to ensure that I clearly conveyed what the event was and what
          makes it so special. I included a descriptive image, quotables from a
          key person in the story, and hyperlinks for important sources.
        </p>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vT-m-u352_rEwa_FkZDgLgU-0s6_6aJc4YqE06mV1aBvorZCjP0mTdHUx5ub9GX-CChuysRC3zDDmqH/pub?embedded=true"
          style="
            width: 80%;
            height: 50rem;
            margin: 2rem 10%;
            border: lightgray 0.1rem solid;
          "
          frameborder="0"
        ></iframe>
        <h3>Literature Review</h3>
        <p>
          This paper is a short literature review I wrote regarding wearable
          technology as an emerging interface. I explored human-computer
          interaction principles in this field as well as applications of
          wearables, using an objective tone and referencing recent research
          papers and reviews. The paper aims to provide a self-contained and
          informative introduction to the topic.
        </p>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vSif_0peTt_ek_KSIZz2-6Yett7UL75bF9s6EMXcP5T0toXKykk-hCR_hHMwGserkZTTZOd6A_ZIsUD/pub?embedded=true"
          style="
            width: 80%;
            height: 50rem;
            margin: 2rem 10%;
            border: lightgray 0.1rem solid;
          "
          frameborder="0"
        ></iframe>
        <h3>Collaborative Problem-Solving Project</h3>
        <p>
          Starting with a problem we identified on campus, namely the lack of
          spaces and resources for computer science office hours, I worked in a
          group to identify stakeholders, obtain survey data to guide our
          proposal, and describe realistic solutions and considerations. The
          project culminated in an in-person presentation.
        </p>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vR0Xvj9jICKilpo3ulmVeEiKkkPhnftX55rflyYxmtOgiaVQ-99CeirXMIXiUt0nZ7ZXVq0CU9x9QPm/embed?start=false&loop=true&delayms=3000"
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

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    FullNav,
    CaseStudy,
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
