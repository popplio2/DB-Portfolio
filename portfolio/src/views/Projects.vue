<template>
  <div>
    <h2>My Projects</h2>
    <div class="projects-container global-container">
      <ProjectComponent v-for="project in projects" :key="project.title">
        <!-- :project="project.name" -->
        <img :src="project.image" alt="">
        <template v-slot:text>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </template>
      </ProjectComponent>
    </div>
  </div>
</template>

<script>
import ProjectComponent from '@/components/ProjectComponent.vue';

export default {
  data() {
    return {
      projects: [
        {
          title: 'Scrappy Notes',
          image: require('../assets/scrappy.png'),
          description: 'Note-taking website that utilizes Vue.js for data-binding and reactive UI development.'
        },
        {
          title: 'Poké-Catch',
          image: require('../assets/pokecatch.png'),
          description: 'Pokémon catcher that fetches API data and reacts to user input. Created for the AP CSP "Create Task".'
        },
        {
          title: 'Techtimes',
          image: require('../assets/techtimes.png'),
          description: 'Open-source newspaper application built in Nuxt.js that communicates with an API and CMS. '
        },
        {
          title: 'D&D One-Shot',
          image: require('../assets/dnd.png'),
          description: 'Assists the user with every step of creating a Dungeons and Dragons one-shot.'
        },
        {
          title: 'Choose Your Own Adventure',
          image: require('../assets/adventure.png'),
          description: 'Choose-your-own-adventure game that demonstrates application of JavaScript principles.'
        },
        {
          title: 'Kingdom of Galgudd',
          image: require('../assets/galgudd.png'),
          description: 'Welcome to Galgudd! This website advertises all aspects of a fictional kingdom.'
        },
      ]
    }
  },
  components: {
    ProjectComponent
  }
}
</script>

<style scoped>
  h2 {
    text-align: center;
    color: var(--main-color);
    margin-top: 10rem;
    margin-bottom: 3rem;
  }
  img {
        object-fit: cover;
        object-position: left;
        width: 50%;
        height: 25rem;
        margin-right: 2rem;
        border-radius: 1rem;
        /* border: .2rem solid var(--accent-color); */
  }
  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(45rem, 1fr));
    gap: 2rem;
  }
</style>