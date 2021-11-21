<template>
  <section class="landing global-container">
    <div class="title-container">
      <h1>👋 I'm Daniel Briskman</h1>
      <div class="subtitle">
        <p>I ideate. I iterate.</p>
        <p class="underlined">I create.</p>
      </div>
      <router-link class="button-link" to="/about">
        <Button>See my projects ➤</Button>
      </router-link>
    </div>
  </section>
  
  <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0090ff" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

  <section class="about global-container">
    <h2>About Me</h2>
    <p>Hello there! I'm Daniel Briskman, I'm a pretty cool guy (if i do say so myself). This is my portfolio by the way.</p>
  </section>
    
  
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  components: {
    Button
  }
}
</script>

<style>
  .landing {
    display: flex;
    justify-content: center;
    margin-top: 10rem;
  }
  .landing h1 {
    text-align: center;
    color: var(--main-color);
    /* text-shadow: -.1rem .1rem .15rem rgba(0, 0, 0, 0.9); */
  }
  .landing p {
    margin-right: .5rem;
  }
  .subtitle {
    display: flex;
    justify-content: center;
    margin-bottom: 7rem;
  }
  .underlined {
    border-bottom: .2rem solid;
    font-weight: 700;
  }
  .wave {
    width: 100%;
    display: block;
    transform-origin: bottom;
    animation: animateWave 2.5s ease-in-out forwards;
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
  
  .about {
    background-color: var(--main-color);
    /* margin-top: -.5rem; */
  }
  .about h2 {
    color: #fff;
    /* text-shadow: -.1rem .1rem .15rem rgba(0, 0, 0, 0.9); */
    text-align: center;
  }
  .about p {
    padding-bottom: 100rem;
  }
</style>