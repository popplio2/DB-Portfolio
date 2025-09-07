<template>
  <div>
    <ThemeButton :theme="pageTheme" />
    <section class="landing global-container">
      <div class="title-container">
        <h1>Daniel Briskman</h1>
        <div class="subtitle">
          <p>User-Motivated Software Engineer studying @ SBU</p>
        </div>
        <div class="landing-buttons">
          <div class="home-link" to="/projects">
            <router-link class="home-link" to="/projects">
              <PrimaryButton style="margin-right: 1.5rem"
                >See my projects ➤</PrimaryButton
              >
            </router-link>
            <a
              href="https://docs.google.com/document/d/1HbEabykrmg2i3BmL0m58yOMaJcRhL4pbxYGrifzKexg/edit?usp=sharing"
              target="_blank"
            >
              <Button
                >View Resume
                <font-awesome-icon icon="file-pdf" />
              </Button>
            </a>
          </div>
          <!-- make memoji image 323 x 354 and use https://www.aconvert.com/image/png-to-svg/ to update the memoji when necessary-->
        </div>
        <EmailButton />
      </div>
      <div class="img-container">
        <img class="landing-img" src="../assets/photoshoot.jpeg" />
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
            <b>Hello, world!</b> I'm Daniel Briskman, an honors computer science
            student at
            <a href="https://www.stonybrook.edu/" target="_blank"
              >Stony Brook University</a
            >.
          </p>
          <p>
            I first got into tech during the Covid lockdowns, when I discovered
            UX Design and started experimenting with Figma. What began as
            curiosity about design quickly grew into a deeper interest in
            programming. I loved the mix of creativity, problem solving, and
            building things from the ground up.
          </p>
          <p>
            Since then, I’ve grown from designing wireframes to developing
            full-stack applications and interning as a software engineer, where
            I worked with tools like Python, React, Vue, and Laravel. I enjoy
            tackling challenges that blend technical problem-solving with
            thoughtful design, whether that’s automating workflows, improving
            user experiences, or helping teams work more efficiently.
          </p>
          <p>
            These days, I’m especially interested in artificial intelligence,
            data science, human-computer interaction, and cybersecurity, and I’m
            excited about how these fields can shape the future of technology.
          </p>
        </div>
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
          <h3>Technical Skills</h3>
          <ul>
            <li>
              <font-awesome-icon icon="code" />
              Java, Python, JavaScript, C, C#
            </li>
            <li>
              <font-awesome-icon icon="sitemap" />
              React.js, Vue.js, Node.js, Express, Laravel
            </li>
            <li>
              <font-awesome-icon icon="database" />
              MongoDB, DBeaver, Redshift, SQL
            </li>
            <li>
              <font-awesome-icon icon="pen-nib" />
              Git, Figma
            </li>
          </ul>
          <router-link
            style="padding: 6rem 3rem"
            class="skills-link"
            to="/projects"
          >
            <Button>See them in action ➤</Button>
          </router-link>
        </div>

        <div class="skills-table">
          <h3>Hobbies</h3>
          <ul>
            <li>
              <font-awesome-icon icon="music" />
              Hip-Hop Dance
            </li>
            <li>
              <font-awesome-icon icon="table-tennis" />
              Table Tennis
            </li>
            <li>
              <font-awesome-icon icon="headphones" />
              Music
            </li>
          </ul>
        </div>
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
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5rem;
}
.landing h1 {
  color: var(--main-color);
}
.landing p,
.landing strong {
  font-size: 2rem;
  margin-right: 0.5rem;
}
.subtitle {
  display: flex;
  margin-bottom: 5rem;
}
.subtitle p {
  border-bottom: 0.35rem dotted var(--accent-color);
}
.inverted {
  margin-top: 0;
  transform-origin: top;
}
.landing-buttons {
  display: flex;
  justify-content: space-between;
}
.home-link {
  align-self: flex-start;
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45rem;
  width: 35rem;
  object-fit: cover;
  border-radius: 5rem;
  animation: scale 0.5s 1.5s forwards;
  filter: drop-shadow(0 0.5rem 1rem var(--accent-color));
}
.img-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5rem;
  background-color: var(--accent-color);
  opacity: 0.075;
  mix-blend-mode: saturation;
}

.landing-img {
  height: 40rem;
  width: 30rem;
  object-fit: cover;
  border-radius: 3rem;
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
  max-width: 30rem;
  object-fit: cover;
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
.about a {
  color: var(--accent-color);
  font-weight: 500;
}
.about a:hover {
  color: var(--bg-color);
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
  .landing {
    flex-direction: column;
    align-items: center;
  }
  .title-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
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
  .about-content {
    flex-direction: column-reverse;
    align-items: center;
  }
  .about-img {
    margin: 0;
    max-width: 20rem;
  }
  .home-link {
    align-self: unset;
    margin-bottom: 4rem;
  }
}

@media only screen and (max-width: 600px) {
  .subtitle {
    margin-bottom: 3rem;
  }
  .landing-buttons {
    flex-direction: column;
    align-items: center;
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
