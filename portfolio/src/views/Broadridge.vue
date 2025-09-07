<template>
  <div>
    <FullNav />
    <CaseStudy>
      <template v-slot:title>Broadridge Internship</template>
      <template v-slot:image>
        <img src="../assets/broadridge.jpeg" alt="" />
      </template>
      <template v-slot:info>
        <p><b>Summer Internship:</b> June 2025 - August 2025</p>
        <p><b>Tools:</b> Python, SQL, DBeaver, React, TypeScript, Redshift</p>
        <p>
          <b>Skills:</b> Data validation, debugging, automation, cross-team
          collaboration, documentation, onboarding, problem-solving
        </p>
      </template>
      <template v-slot:overview>
        <h3>Overview</h3>
        <p>
          For summer 2025, I completed a Global Engineering Internship at
          Broadridge on the Quality Engineering team.
        </p>
        <h3>Redshift Automation</h3>
        <p>
          One of my main contributions was automating validation of data used
          for Pass-Through Voting (PTV) by creating Python scripts that compared
          input files, both domestic and global fund IDs, with our Redshift
          database. This ensured that multiplier calculations, which determine
          how shares are distributed to shell accounts, were accurate. When the
          task was first assigned, validation was intended to be a simple
          pass/fail check. I proposed a more detailed output format that made it
          easier for developers to debug errors and for users to quickly
          identify issues.
        </p>

        <p>
          The final scripts displayed how many rows were missing/extra in
          Redshift and also generated two .xlsx files: one with all the Redshift
          data for that query, and another showing the differences between the
          input file and the Redshift table. My scripts worked in tandem with
          another teammate’s scripts, helping isolate and resolve errors
          efficiently across multiple parts of the process.
        </p>
        <p>
          To keep the project maintainable beyond my internship, I organized the
          scripts using the PTV framework, which separates scripts, input files,
          SQL queries, and database credentials. I also documented the workflow
          in a handoff guide and helped onboard 4 teammates to ensure
          continuity.
        </p>
        <p>
          My work replaced manual validation steps, increasing efficiency by
          over 99%, and I led three demos to showcase these contributions to the
          team. Beyond scripting, this internship broadened my technical
          experience, exposing me to Python, Redshift, SQL, and DBeaver, as well
          as other tools in the QE tech stack.
        </p>
        <h3>Capstone Project</h3>

        <p>
          For my Capstone Project, I contributed to the Code N Doc Enhancement
          Project. Code N Doc is an internal gen-AI tool that automates
          documentation and workflow tasks for developers, testers, and
          analysts. Our goal was to improve AI accuracy by integrating it with
          internal data sources like Confluence and JIRA using the Model Context
          Protocol (MCP).
        </p>
        <p>
          I developed the user-facing interface enabling Code N Doc to safely
          interact with MCP servers. This included building a server discovery
          module to fetch and filter available tools, ensuring only safe tools
          were accessible, optimizing server requests to avoid overload, and
          implementing handling of personal access tokens stored locally in
          base64 for usability and security. Once configured, users could access
          approved servers and tools in Code N Doc chats, allowing AI to provide
          context-aware, relevant responses.
        </p>
        <p>
          Our Capstone feature was demonstrated live to stakeholders, showing
          measurable improvements in the accuracy and relevance of AI-generated
          outputs. Our presentation is embedded below (with permission; some
          slides removed due to PII). I, along with our primary point of contact
          for the project, Fred Chung, also wrote a
          <a
            href="https://docs.google.com/document/d/17JVX4KZzWCB61KgjlO-lHk4iBHB9pjf8CpN3-VIysTY/edit?usp=sharing"
            >blog</a
          >
          to document our project's impact.
        </p>
        <h3>Professional Growth</h3>
        <p>
          Beyond technical skills, I enhanced problem-solving, communication,
          and collaboration abilities. I learned to balance innovation with
          security, anticipate system bottlenecks, and design scalable,
          maintainable features. Seeing our work save thousands of hours of
          manual effort daily reinforced the impact of thoughtful, user-focused
          engineering.
        </p>
        <h3>Key Technical Achievements & Challenges</h3>
        <ul>
          <li>
            Automated validation of PTV input files against Redshift data,
            replacing manual checks and increasing efficiency by over 99%
          </li>
          <li>
            Developed enhanced output format for validation scripts to make
            errors easier to debug and identify for both developers and users
          </li>
          <li>
            Implemented PTV framework to separate scripts, input files, SQL
            queries, and credentials, ensuring maintainability beyond internship
          </li>
          <li>
            Debugged data validation issues, including handling multiple input
            file types and mapping discrepancies between input files and
            Redshift tables
          </li>
          <li>
            Led onboarding of 4 teammates to ensure continuity and
            reproducibility of automation scripts
          </li>
          <li>
            Gained experience across a diverse tech stack including Python, SQL,
            DBeaver, React, TypeScript, and Redshift
          </li>
        </ul>
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

<style scoped>
h3 {
  margin-top: 1rem;
  text-align: center;
  color: var(--main-color);
}
</style>
