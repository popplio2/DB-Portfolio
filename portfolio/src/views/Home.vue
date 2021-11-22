<template>
  <div>
    <section class="landing global-container">
      <div class="title-container">
        <h1>👋 I'm Daniel Briskman</h1>
        <div class="subtitle">
          <p>I ideate. I iterate.</p>
          <p class="underlined">I create.</p>
        </div>

        <div class="img-and-btn">
          <router-link class="button-link" to="/projects">
            <Button>See my projects ➤</Button>
          </router-link>

          <img src="../assets/memoji.svg" alt="">
        </div>
      </div>
    </section>
    
    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#006deb" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

    <section class="about global-container">
      <h2>About Me</h2>
      <p>Hello world! I'm Daniel Briskman, I'm a pretty cool guy (if i do say so myself). This is my portfolio by the way. Here is where I will write a pretentious paragraph of various phrases that brag about how great of a person I am. For now, though, I will spare you of this and will instead give you a bunch of gibberish to read. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit possimus ipsum dolorum repellendus, vitae quisquam perspiciatis aliquid quis quas nobis ea voluptates nulla officia provident? Libero quasi iste eos quia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fuga dolorem modi similique autem dignissimos consequatur officiis? Corporis odit rerum in officiis tenetur, sunt, nobis tempora sequi quo, reiciendis vel.</p>
    </section>

    <svg class="wave inverted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#006deb" fill-opacity="1" d="M0,128L60,128C120,128,240,128,360,149.3C480,171,600,213,720,218.7C840,224,960,192,1080,170.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg>

    <!-- <section class="skills global-container">
      <h2>Skills</h2>
      <p>Languages: HTML, CSS, JavaScript</p>
      <p>Frameworks: Vue.js</p>
      <p>Soft Skills: Leader, Optimist, Problem-solver, Creator</p>
    </section> -->
    
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
    margin-bottom: 5rem;
  }
  .underlined {
    border-bottom: .2rem solid;
    font-weight: 700;
  }
  .wave {
    width: 100%;
    display: block;
    transform-origin: bottom;
    animation: animateWave 1.5s ease-in-out forwards;
  }
  .inverted {
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
  .landing img {
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
  .about {
    background-color: var(--main-color);
    margin-top: -.5rem;
  }
  .about h2 {
    color: #fff;
    text-align: center;
  }
  .about p {
    color: #fff;
    margin-top: 3rem;
  }

  /* .skills h2 {
    color: var(--main-color);
    text-align: center;
  } */
</style>