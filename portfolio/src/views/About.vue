<template>
  <h1>My Projects</h1>
  <div class="projects-container">
    <ProjectComponent>
      <h3>Scrappy Notes</h3>
      <p>Note-taking website that utilizes Vue.js for data-binding and reactive UI development.</p>
    </ProjectComponent>

    <ProjectComponent>
      <h3>Poké-Catch</h3>
      <p>Pokémon catcher that fetches API data, reacts to user actions, and uses an array to store data. Created for the AP CSP "Create Task".</p>
    </ProjectComponent>

    <ProjectComponent>
      <h3>Techtimes</h3>
      <p>Open-source newspaper application built in Nuxt.js that communicates with an API and CMS. </p>
    </ProjectComponent>

    <ProjectComponent>
      <h3>D&D One-Shot</h3>
      <p>Assists the user with every step of creating a Dungeons and Dragons one-shot.</p>
    </ProjectComponent>

    <ProjectComponent>
      <h3>Choose Your Own Adventure</h3>
      <p>Choose-your-own-adventure game built with vanilla JavaScript that demonstrates application of JavaScript principles.</p>
    </ProjectComponent>

    <ProjectComponent>
      <h3>Welcome to Galgudd</h3>
      <p>My entry to web development——a website advertising a fictional kingdom.</p>
    </ProjectComponent>

    <!-- <ProjectComponent>
      <h3>Scrappy Notes</h3>
      <p>A note-taking website that utilizes Vue.js for data-binding and reactive UI development.</p>
    </ProjectComponent> -->

  </div>
</template>

<script>
import ProjectComponent from '@/components/ProjectComponent.vue';

export default {
  components: {
    ProjectComponent
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
    color: var(--main-color);
    margin-top: 10rem;
    margin-bottom: 3rem;
  }
  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
    gap: 2rem;
  }
</style>