<template>
  <div>
    <FullNav />
    <CaseStudy>
      <template v-slot:title>Broadridge Internship</template>
      <template v-slot:image>
        <img src="../assets/broadridge.jpeg" alt="" />
      </template>
      <template v-slot:info>
        <p>
          <b>Summer Internship:</b>
          June 2025 - August 2025
        </p>
        <p>
          <b>Tools:</b>
          Python, SQL, DBeaver, React, Typescript
        </p>
      </template>
      <template v-slot:overview>
        <p>
          For summer 2025, I completed a Global Engineering Internship at
          Broadridge on the Quality Engineering team. One of my main
          contributions was automating validation of data used for Pass-Through
          Voting by creating scripts that compared data from our Redshift
          database with various input files whose data is manually entered into
          Redshift. The Redshift data needed to be verified in order to use it
          to calculate multiplier, which allows shares to be distributed to
          shell accounts accurately.
        </p>
        <p>
          The scripts I wrote replaced manual checks, leading to a 99.7%
          increase in efficiency. I also led 3 demos to showcase this work and
          helped onboard 4 teammates to the project.
        </p>

        <p>
          For my capstone project, I worked on enhancing Broadridge’s Code N Doc
          AI tool by integrating it with data sources like Confluence and JIRA
          using the Model Context Protocol (MCP). My work focused on building
          new features for the user interface and backend functions for MCP tool
          management. I, along with our team's main resource for the project,
          wrote a
          <a
            href="https://docs.google.com/document/d/17JVX4KZzWCB61KgjlO-lHk4iBHB9pjf8CpN3-VIysTY/edit?usp=sharing"
            target="_blank"
            >blog about the project</a
          >, and our final presentation is linked below (with permission--some
          slides were removed to avoid sharing PII).
        </p>

        <p>
          Beyond the technical contributions, this internship helped me gain
          experience in cross-team collaboration, communication, and leadership.
          As I head into my senior year of college, I’m excited to build on
          these experiences and continue growing as an engineer and team member.
        </p>
        <iframe
          src="https://docs.google.com/presentation/d/1R1ljJjK3leYHuLXB-clq0BNRB9EvaYTEgINKKb2ieYg/embed?start=false&loop=true&delayms=3000"
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

<style></style>
