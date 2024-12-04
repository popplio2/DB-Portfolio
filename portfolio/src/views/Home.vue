<template>
  <div>
    <ThemeButton :theme="pageTheme" />
    <section class="landing global-container">
      <div class="title-container">
        <h1>👋 I'm Daniel Briskman</h1>
        <div class="subtitle">
          <p>Developer, designer, <strong>creator.</strong></p>
        </div>
        <div class="img-and-btn">
          <div class="home-link" to="/projects">
            <router-link class="home-link" to="/projects">
              <PrimaryButton style="margin-right: 1.5rem"
                >See my projects ➤</PrimaryButton
              >
            </router-link>
            <a
              href="https://drive.google.com/file/d/1CiDOsuPQw_q0QYBClYK4cJ4IvhubG6GR/view?usp=sharing"
              target="_blank"
            >
              <Button
                >View Resume
                <font-awesome-icon icon="file-pdf" />
              </Button>
            </a>
          </div>
          <!-- make memoji image 323 x 354 and use https://www.aconvert.com/image/png-to-svg/ to update the memoji when necessary-->
          <img
            src="../assets/memoji.svg"
            alt="a memoji of Daniel Briskman working on his laptop"
          />
        </div>

        <EmailButton />
      </div>
    </section>

    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#006deb"
        fill-opacity="1"
        d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
    <div class="clip clip-inverted"></div>
    <section class="about global-container">
      <h2>About Me</h2>
      <div class="about-content">
        <div class="about-txt">
          <p>
            <b>Hello, world!</b> I'm Daniel Briskman, a software developer
            studying computer science at Stony Brook University.
          </p>
          <p>
            My introduction into programming stemmed from an interest in UX
            Design, which I learned about during the Covid lockdowns as I was
            researching careers. The combination of creativity, analysis, and
            attention to detail felt like a great fit for me, so I took some
            online courses and learned how to use Figma to design wireframes and
            prototypes.
          </p>
          <p>
            From there, I started taking computer science classes in high school
            and found that programming was something I could pour a lot of time
            and creativity into, and it was very rewarding. I've had multiple
            work experiences in frontend development since then.
          </p>
          <p>
            My current academic interests are human-computer interaction,
            software development, cybersecurity, and project management.
          </p>
        </div>

        <img src="../assets/me.jpeg" class="about-img" />
      </div>
    </section>
    <div class="clip"></div>

    <svg
      class="wave inverted"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#006deb"
        fill-opacity="1"
        d="M0,128L60,128C120,128,240,128,360,149.3C480,171,600,213,720,218.7C840,224,960,192,1080,170.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
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
              <font-awesome-icon icon="sitemap" />
              Vue.js, Vuex
            </li>
            <li>
              <font-awesome-icon icon="database" />
              Express.js, MongoDB
            </li>
            <li>
              <font-awesome-icon icon="pen-nib" />
              Figma (UI design)
            </li>
            <li>
              <font-awesome-icon icon="file-code" />
              Java, C, C#
            </li>
          </ul>
        </div>
        <div class="skills-table">
          <h3>Strengths</h3>
          <ul>
            <li>
              <font-awesome-icon icon="mountain" />
              Goal-Oriented
            </li>
            <li>
              <font-awesome-icon icon="tasks" />
              Organized
            </li>
            <li>
              <font-awesome-icon icon="user-friends" />
              Team Player
            </li>
          </ul>
        </div>
        <router-link class="skills-link" to="/projects">
          <Button>See them in action ➤</Button>
        </router-link>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Footer from "@/components/Footer.vue";
import EmailButton from "@/components/EmailButton.vue";
import ThemeButton from "@/components/ThemeButton.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";

export default {
  components: {
    Button,
    Footer,
    EmailButton,
    ThemeButton,
    PrimaryButton,
  },
  data() {
    return {
      pageTheme: document.documentElement.getAttribute("theme"),
    };
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
}
.landing {
  display: flex;
  justify-content: center;
  margin-top: 5rem;
}
.landing h1 {
  text-align: center;
  color: var(--main-color);
}
.landing p,
.landing strong {
  font-size: 2rem;
  margin-right: 0.5rem;
}
.subtitle {
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
}
.subtitle p {
  border-bottom: 0.35rem dotted var(--accent-color);
}
.inverted {
  margin-top: 0;
  transform-origin: top;
}
.img-and-btn {
  display: flex;
  justify-content: space-between;
}
.home-link {
  align-self: flex-start;
}
.img-and-btn img {
  height: 20rem;
  width: 20rem;
  background-color: var(--main-color);
  border-radius: 10rem;
  animation: scale 0.5s 1.5s forwards;
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
  text-align: center;
  background-color: var(--main-color);
  margin-top: -0.5rem;
}
.about-content {
  display: flex;
  flex-direction: row;
}
.about-img {
  height: 35rem;
  border-radius: 3rem;
  box-shadow: var(--box-shadow);
  margin: 2.5rem;
  margin-left: 5rem;
}
.about p,
.about b {
  color: var(--white);
  margin-top: 2rem;
  text-align: left;
  line-height: 1.7;
}
.skills {
  margin: -8rem 0;
}
.skills h2 {
  color: var(--main-color);
  text-align: center;
}
.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
}
.skills-table {
  border: 0.2rem solid var(--main-color);
  padding: 3rem 1rem;
  padding-bottom: 2rem;
  margin: 1.5rem;
  border-radius: 3rem;
  height: fit-content;
  box-shadow: var(--box-shadow);
}
.skills-table h3 {
  display: inline-block;
  margin: 1rem 5rem;
  border-bottom: 0.3rem solid var(--main-color);
}
.skills-table li {
  font-size: 1.7rem;
  margin: 0 5rem;
  padding: 2rem 0;
  list-style-type: none;
  border-bottom: 0.2rem dashed var(--accent-color);
  transition: all 0.3s;
}
.skills-table li:last-child {
  border-bottom: none;
}
.skills-link {
  margin: 1.5rem;
}
.skills-table svg {
  margin-right: 1rem;
  color: var(--main-color);
}

@media only screen and (max-width: 1200px) {
  .wave {
    display: none;
  }
  .clip {
    display: block;
  }
  .landing {
    margin-bottom: 5rem;
  }
  .about {
    padding-top: 8rem;
    padding-bottom: 4rem;
  }
  .skills {
    margin-top: 0;
    margin-bottom: 3rem;
  }
}
@media only screen and (max-width: 600px) {
  .subtitle {
    margin-bottom: 3rem;
  }
  .img-and-btn {
    flex-direction: column;
    align-items: center;
  }
  .home-link {
    align-self: unset;
    margin-bottom: 4rem;
  }
}
</style>

<style>
.clip {
  display: none;
  height: 10rem;
  background-color: var(--main-color);
  clip-path: ellipse(50% 30% at 50% 0%);
}
.clip-inverted {
  background-color: var(--bg-color);
  z-index: 1;
  margin-bottom: -10rem;
}
.wave {
  width: 100%;
  /* height: 100%; */
  display: block;
  transform-origin: bottom;
  animation: animateWave 1.5s ease-in-out forwards;
  margin-top: -3rem;
}
@keyframes animateWave {
  0% {
    transform: scale(1, 0.6);
  }
  50% {
    transform: scale(1, 0.8);
  }
  100% {
    transform: scale(1, 0.6);
  }
}
@media only screen and (max-width: 1200px) {
  .wave {
    display: none;
  }
  .clip {
    display: block;
  }
}
</style>
