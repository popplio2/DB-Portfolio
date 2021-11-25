<template>
  <div>
    <section class="landing global-container">
      <div class="title-container">
        <h1>👋 I'm Daniel Briskman</h1>
        <div class="subtitle">
          <p>I ideate. I innovate.</p>
          <p class="bold">I create.</p>
        </div>

        <div class="img-and-btn">
          <router-link class="button-link" to="/projects">
            <Button>See my projects ➤</Button>
          </router-link>
          <img src="../assets/memoji.svg" alt="a memoji of Daniel Briskman working on his laptop">
        </div>
        
          <a class="email-btn" href="mailto:briskmandaniel@gmail.com">
            <font-awesome-icon icon="paper-plane" />
          </a>

      </div>
    </section>
    
    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#006deb" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

    <section class="about global-container">
      <h2>About Me</h2>
      <q>I can see my improvement and it motivates me to keep going.</q>
      <p>Hello, world! I'm Daniel Briskman. I was first exposed to programming in my freshman year Robotics class.  I found that, more than anything else, I loved to analyze what went wrong in each attempt at a challenge and adjust our to rectify that. At the time, though, I did not consider myself compatible with STEM careers, and I did not entertain the possibility, believing that I needed a career that was inherently creative. This all changed during the lockdowns, when I had no choice but to face answering the questions: “Who am I? What do I love doing? What do I want to do with my life?” After doing research and finding an interest in User Experience Design, a field I had never heard of previously, I took courses online to learn as much as I could about the subject, and I learned how to use Figma to design wireframes and prototypes. What I loved most about UX Design was that it was both a science and an art—with elements of both psychology and graphic design. My interest in UX served me well when I took computer science junior year, and I ended up finding computer science even more fascinating than UX. One of the things I love about computer science is that is that it’s not hard to find out what skill level I am. It’s just, “Can I solve this problem?”. When "leveling up" in computer science, I can see my improvement and it motivates me to keep going.</p>
    </section>

    <svg class="wave inverted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#006deb" fill-opacity="1" d="M0,128L60,128C120,128,240,128,360,149.3C480,171,600,213,720,218.7C840,224,960,192,1080,170.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg>

    <section class="skills global-container">
      <h2>My Skills</h2>
      <div class="skills-container">
        <div class="skills-table">
          <h3>Tools</h3>
          <ul>
            <li>
              <font-awesome-icon icon="code" />
              HTML, CSS, & JavaScript
            </li>
            <li>
              <font-awesome-icon icon="code-branch" />
              Vue.js (JS framework)
            </li>
            <li>
              <font-awesome-icon icon="pen-nib" />
              Figma (UI design)
            </li>
          </ul>
        </div>
        <div class="skills-table">
          <h3>Strengths</h3>
          <ul>
            <li>
              <font-awesome-icon icon="tasks" /> 
              Goal-oriented
            </li>
            <li>
              <font-awesome-icon icon="user-friends" /> 
              Team Player
            </li>
            <li>
              <font-awesome-icon icon="mountain" /> 
              Motivated
            </li>
          </ul>
        </div>
        <router-link class="button-link" to="/projects">
          <Button>See them in action ➤</Button>
        </router-link>
      </div>
    </section>
    
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  components: {
    Button
  }
}
</script>

<style scoped>
  h2 {
    margin-bottom: 5rem;
  }
  .landing {
    display: flex;
    justify-content: center;
    margin-top: 7rem;
  }
  .landing h1 {
    text-align: center;
    color: var(--main-color);
  }
  .landing p {
    font-size: 2rem;
    margin-right: .5rem;
  }
  .subtitle {
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
  }
  .bold {
    font-weight: 700;
  }
  .wave {
    width: 100%;
    display: block;
    transform-origin: bottom;
    animation: animateWave 1.5s ease-in-out forwards;
  }
  .wave {
    margin-top: -3rem;
  }
  .inverted {
    margin-top: 0;
    transform-origin: top;
  }
    @keyframes animateWave {
      0% {
        transform: scale(1, .6);
      }
      50% {
        transform: scale(1, .8);
      }
      100% {
        transform: scale(1, .6);
      }
    }
  .img-and-btn {
    display: flex;
    justify-content: space-between;
  }
  .img-and-btn img {
    height: 20rem;
    width: 20rem;
    background-color: var(--main-color);
    border-radius: 10rem;
    animation: scale .5s 1.5s forwards;
  }
    @keyframes scale {
      0% {
        transform: scale(100%);
      }
      50% {
        transform: scale(110%);
      }
      100% {
        transform: scale(100%);
      }
    }
  .email-btn {
    position: fixed;
    bottom: 0;
    right: 0;
    font-size: 2rem;
    background-color: var(--white);
    border: .15rem solid var(--main-color);
    border-radius: 10rem;
    box-shadow: var(--box-shadow);
    padding: 1.5rem;
    margin: 3%;
    z-index: 1;
    color: var(--main-color);
  }
  .about {
    color: var(--white);
    text-align: center;
    background-color: var(--main-color);
    margin-top: -.5rem;
  }
  .about h2 {
    margin-bottom: 1rem;
  }
  .about q {
    font-size: 1.8rem;
    font-style: italic;
    /* font-weight: 500; */
  }
  .about p {
    margin-top: 3rem;
    text-align: left;
    line-height: 1.7;
  }
  .skills {
    margin-top: -5rem;
  }
  .skills h2 {
    color: var(--main-color);
    text-align: center;
  }
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
  }
  .skills-table {
    border: .2rem solid var(--main-color);
    padding: 3rem 1rem;
    padding-bottom: 2rem;
    margin: 1.5rem;
    border-radius: 5rem;
    height: fit-content;
    transition: all .3s;
  }
  .skills-table:hover {
    box-shadow: var(--box-shadow);
    transform: translateY(-.5rem);
  }
  .skills-table h3 {
    display: inline-block;
    margin: 1rem 5rem;
    border-bottom: .3rem solid var(--main-color);
  }
  .skills-table li {
    font-size: 1.7rem;
    margin: 0 5rem;
    padding: 2rem 0;
    list-style-type: none;
    border-bottom: .2rem dashed var(--accent-color);
    transition: all .3s;
  }
  .skills-table li:last-child {
    border-bottom: none;
  }
  .skills-table a {
    margin: 1.5rem;
  }
  .skills-table svg {
    margin-right: 1rem;
    color: var(--main-color);
  }
</style>