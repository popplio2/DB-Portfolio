<template>
  <div>
    <ThemeButton :theme="pageTheme" />
    <HalfNav />
    <h2>My Projects</h2>
    <div class="projects-container global-container">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
        class="project-card"
      >
        <img :src="project.image" alt="" />
        <template v-slot:text>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </template>
      </ProjectCard>
    </div>
    <EmailButton />
    <Footer />
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import HalfNav from "@/components/HalfNav.vue";
import Footer from "@/components/Footer.vue";
import EmailButton from "@/components/EmailButton.vue";
import ThemeButton from "@/components/ThemeButton.vue";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    ProjectCard,
    HalfNav,
    Footer,
    EmailButton,
    ThemeButton,
  },
  data() {
    return {
      pageTheme: document.documentElement.getAttribute("theme"),
      projects: [
        {
          title: "Broadridge Internship",
          path: "broadridge-internship",
          image: require("../assets/broadridge.jpeg"),
          description:
            "My summer of 2025 Software Engineering Internship on the Global Engineering team at Broadridge.",
        },
        {
          title: "SubjectToClimate Internship",
          path: "STC",
          image: require("../assets/stc.png"),
          description:
            "My summer of 2024 Web Developer Internship at SubjectToClimate, a climate education startup.",
        },
        {
          title: "Riddler on the Roof",
          path: "riddler",
          image: require("../assets/riddler.png"),
          description:
            "Full-stack puzzle RPG built in Vue 3 that tracks user data with Vuex and saves it with MongoDB.",
        },
        {
          title: "Secret Santa Generator",
          path: "secret-santa",
          image: require("../assets/santa.png"),
          description:
            "Java program that generates a random secret santa arrangement and adjusts with added players.",
        },
        {
          title: "Tech Times",
          path: "tech-times",
          image: require("../assets/techtimes.png"),
          description:
            "Open-source newspaper application built in Nuxt.js that displays articles from our CMS.",
        },
        {
          title: "Scrappy Notes",
          path: "scrappy-notes",
          image: require("../assets/scrappy.png"),
          description:
            "Note-taking website that utilizes Vue.js for data-binding and reactive UI development.",
        },
        {
          title: "Technical Communications",
          path: "technical-communications",
          image: require("../assets/techcomm.png"),
          description:
            "Collection of projects I completed demonstrating effective technical writing and communication.",
        },
        {
          title: "My Portfolio",
          path: "portfolio",
          image: require("../assets/portfolio.png"),
          description:
            "How I built the portfolio you are currently viewing (and hopefully enjoying).",
        },

        // {
        //   title: "D&D One-Shot",
        //   path: "d&d-one-shot",
        //   image: require("../assets/dnd.png"),
        //   description:
        //     "Assists the user with every step of creating a Dungeons and Dragons one-shot.",
        // },
        // {
        //   title: "Choose Your Own Adventure",
        //   path: "choose-your-own-adventure",
        //   image: require("../assets/adventure.png"),
        //   description:
        //     "Choose-your-own-adventure game that demonstrates application of JavaScript principles.",
        // },
        // {
        //   title: "Kingdom of Galgudd",
        //   path: "kingdom-of-galgudd",
        //   image: require("../assets/galgudd.png"),
        //   description:
        //     "Welcome to Galgudd! This website advertises all aspects of a fictional kingdom.",
        // },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  color: var(--main-color);
  text-align: center;
  margin: 3rem 0;
}
img {
  object-fit: cover;
  object-position: left;
  max-width: 40%;
  height: 25rem;
  margin-right: 2rem;
  border-radius: 1rem;
  transition: all 0.3s;
}
img:hover {
  filter: brightness(90%);
}
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45rem, 1fr));
  gap: 2rem;
}
@media only screen and (max-width: 600px) {
  .projects-container {
    grid-template-columns: 1fr;
  }
  img {
    width: 100%;
    max-width: unset;
    object-position: center;
  }
}
</style>
