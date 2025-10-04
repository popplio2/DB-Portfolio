<template>
  <div>
    <FullNav />
    <CaseStudy>
      <template v-slot:title>Riddler on the Roof</template>
      <template v-slot:image>
        <img
          src="../assets/riddler.png"
          alt="An in-game image of the player on level 1. There are buttons for controls and a visual tracker for lives."
        />
      </template>
      <template v-slot:buttons>
        <a href="https://riddler-game.netlify.app" target="blank">
          <Button>See the website ➤</Button>
        </a>
        <br />
        <a
          href="https://github.com/popplio2/fullstack-frontend-gitfactor-the-front-end"
          target="blank"
        >
          <Button>Read the frontend code ➤</Button>
        </a>
        <a
          href="https://github.com/popplio2/fullstack-backend-gitfactor-the-back-end"
          target="blank"
        >
          <Button>Read the backend code ➤</Button>
        </a>
      </template>
      <template v-slot:info>
        <p>
          <b>Teammates:</b>
          Lucy Kwan, Jake Li, Charley Baluja, Nika Imbamberdieva
        </p>
        <p>
          <b>Course:</b>
          AP Computer Science Principles
        </p>
        <p>
          <b>Role:</b>
          Team Captain, Full-Stack Developer
        </p>
        <p>
          <b>Tools:</b>
          Vue 3, Vuex, Auth0, MongoDB, Express.js
        </p>
      </template>
      <template v-slot:overview>
        <p>
          <b>Riddler on the Roof</b> is a story-driven RPG I developed with a
          team of five over five months for my AP Computer Science Principles
          class. I led frontend development, integrated the team’s
          contributions, managed backend connections, and helped shape both the
          story and gameplay.
        </p>

        <h3>From Concept to Game</h3>
        <p>
          Our team set out to create a story-driven puzzle game where a
          protagonist climbs a tower, solving riddles at each level to reach the
          mysterious Riddler at the top. I led discussions on game mechanics,
          level design, and the technical stack. We chose Vue and Vuex for
          responsive state management, tracking the player’s inventory,
          progress, and location. I also established a Git workflow to prevent
          merge conflicts and trained the team on pull requests and proper
          branching, ensuring smooth collaboration.
        </p>
        <p>
          During brainstorming, I guided the team in designing puzzles, items,
          and NPCs that would give players clues to solve each riddle. We
          iterated on level ideas, ensuring each puzzle could be implemented
          effectively while keeping gameplay engaging. This process shaped how
          we approached the structure of our application and the interaction
          logic for characters and objects.
        </p>

        <h3>Collaboration and Development</h3>
        <p>
          We divided work based on team strengths: I built the character
          interaction system and designed levels, one teammate created motion
          and animation, another implemented dialogue and story elements, one
          developed a reusable puzzle component, and another managed backend
          authentication. I coordinated assets, story updates, and gameplay
          mechanics, continuously integrating contributions so the game felt
          cohesive.
        </p>
        <p>
          Some puzzles seemed simple on paper but were difficult to implement
          under time constraints. I focused on adapting these ideas to fit our
          existing frameworks—for instance, designing multi-step riddles that
          reused the puzzle component rather than creating one-off solutions.
          Regular feedback loops helped refine mechanics and balance challenge
          with playability.
        </p>

        <h3>Challenges and Problem-Solving</h3>
        <p>
          Backend development and authentication presented significant
          challenges. I stepped in to implement critical backend functionality
          while supporting teammates where possible. I also became the main
          debugger, resolving complex issues that arose from integrating
          different components. For example, linking user inventory with puzzle
          outcomes required careful coordination of frontend and backend logic,
          which I guided the team through.
        </p>

        <h3>Reflection</h3>
        <p>
          Leading a five-month project like this tested my ability to balance
          vision, delegation, and hands-on problem-solving. Seeing the tower
          come alive, puzzles come together, and our story play out in a
          cohesive game was incredibly rewarding. The experience strengthened my
          leadership skills, taught me how to adapt under constraints, and
          reinforced the value of close collaboration in software development.
          Our final product is something I'm incredibly proud of, and I hope you
          get a chance to play it and let me know what you think of it!
        </p>
      </template>
    </CaseStudy>
  </div>
</template>
<script>
import FullNav from "@/components/FullNav.vue";
import CaseStudy from "@/components/CaseStudy.vue";
import Button from "@/components/Button.vue";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    FullNav,
    CaseStudy,
    Button,
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
