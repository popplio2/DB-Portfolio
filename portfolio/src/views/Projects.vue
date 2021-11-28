<template>
  <div>
    <HalfNav />
    <h2>My Projects</h2>
    <div class="projects-container global-container">
      <ProjectCard v-for="project in projects" :key="project.title" :project="project" class="project-card">
        <img :src="project.image" alt="">
        <template v-slot:text>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </template>
      </ProjectCard>
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import HalfNav from '../components/HalfNav.vue';

export default {
  data() {
    return {
      projects: [
        {
          title: 'Scrappy Notes',
          path: 'scrappy-notes',
          image: require('../assets/scrappy.png'),
          description: 'Note-taking website that utilizes Vue.js for data-binding and reactive UI development.'
        },
        {
          title: 'Poké-Catch',
          path: 'poké-catch',
          image: require('../assets/pokecatch.png'),
          description: 'Pokémon catcher that fetches API data and reacts to user input. Created for the AP CSP "Create Task".'
        },
        {
          title: 'Tech Times',
          path: 'tech-times',
          image: require('../assets/techtimes.png'),
          description: 'Open-source newspaper application built in Nuxt.js that communicates with an API and CMS. '
        },
        {
          title: 'D&D One-Shot',
          path: 'd&d-one-shot',
          image: require('../assets/dnd.png'),
          description: 'Assists the user with every step of creating a Dungeons and Dragons one-shot.'
        },
        {
          title: 'Choose Your Own Adventure',
          path: 'choose-your-own-adventure',
          image: require('../assets/adventure.png'),
          description: 'Choose-your-own-adventure game that demonstrates application of JavaScript principles.'
        },
        {
          title: 'Kingdom of Galgudd',
          path: 'kingdom-of-galgudd',
          image: require('../assets/galgudd.png'),
          description: 'Welcome to Galgudd! This website advertises all aspects of a fictional kingdom.'
        },
      ]
    }
  },
  components: {
    ProjectCard,
    HalfNav
  }
}
</script>

<style scoped>
  h2 {
    text-align: center;
    color: var(--main-color);
    margin-top: 7rem;
    margin-bottom: 3rem;
  }
  img {
    object-fit: cover;
    object-position: left;
    width: 50%;
    height: 25rem;
    margin-right: 2rem;
    border-radius: 1rem;
    transition: all .3s;
  }
  .project-card:hover img {
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
      object-position: center;
    }
}
</style>