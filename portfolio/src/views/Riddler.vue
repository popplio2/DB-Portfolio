<template>
  <div>
    <FullNav />
    <CaseStudy>
      <template v-slot:title>Riddler on the Roof</template>
      <template v-slot:image>
        <img src="../assets/riddler.png" alt="" />
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
          <b>Role:</b>
          Team Captain, Full-Stack Developer
        </p>
        <p>
          <b>Team Size:</b>
          5
        </p>
        <p>
          <b>Course:</b>
          AP Computer Science Principles
        </p>
        <p>
          <b>Tools:</b>
          Vue 3, Vuex, Auth0, MongoDB + Express
        </p>
      </template>
      <template v-slot:overview>
        <!-- <p>Full description coming soon! In short, Riddler on the Roof is an RPG I created in a team of 5. I worked on much of the frontend development, as well as integrating each member's contributions. I also worked on the backend and connecting to the database. Lastly, I helped with the story and game design as well. It's not perfect, but I am very proud of it, so please enjoy!</p> -->
        <p>
          Riddler on the Roof is an RPG I worked on in a team of 5 for my AP
          Computer Science Principles class. I worked on much of the frontend
          development, as well as integrating each member's contributions. I
          also worked on the backend and connecting to the database. Lastly, I
          helped with the story and game design.
        </p>
        <h3>Initial Brainstorming</h3>
        <p>
          We decided that for our full-stack project we'd create a story game,
          so we started brainstorming our concept. We reached this idea of a
          puzzle game where the protagonist is stuck in a dungeon and needs to
          solve riddles to progress through it and escape. One of our team
          members, Nika Imamberdieva, suggested the punny name "Riddler on the
          Roof," and we ran with that angle. We'd have our mysterious Riddler on
          the roof of his tower, and the protagonist would climb the tower and
          eventually have some confrontation.
        </p>
        <p>
          From there, we thought about level ideas. We needed to think of a
          riddle for each level, as well as items, puzzles, and NPC's that would
          give the user clues to the riddle.
        </p>
        <p>
          We also began to consider the structure of our application. Namely,
          which technologies to use, like Vue vs. Nuxt, and how we would manage
          the user's state and save the user's data. We decided to use Vue,
          which we thought would be easier for token authentication because
          there were more resources online (ironically, it turned out that most
          of those resources were for Vue 2 rather than Vue 3, which was a
          problem that we would eventually work through). We also chose Vue over
          Nuxt because Vue has a state management library called Vuex that we
          would use to keep track of the user's inventory, progress, location,
          etc.
        </p>

        <h3>Workflow</h3>
        <p>
          At this point, we were about to start actually writing code. But
          first, I needed everyone to be on the same page regarding our Git
          workflow. Charley Baluja, another member of my team, worked on the
          <router-link to="/projects/tech-times">Tech Times</router-link>
          project with me, and over the course of that project we ran into many
          problems with accidentally erasing each other's work when we merged
          branches, and we couldn't have that happening here. So Charley and I
          explained things like how to merge branches properly and make pull
          requests to the rest of our team members, ensuring that, with time,
          we'd be able to work together rather seamlessly.
        </p>

        <h3>Roles</h3>
        <p>
          Now, onto the fun stuff! We needed to figure out how to start this
          monster of a project. After talking to our teacher, I understood that
          we needed to start with basic mechanics of the game in the frontend.
          So, I began working on figuring out how to make a character that could
          interact with objects, my team member Lucy Kwan worked on figuring out
          character motion (including animation), and Charley worked on
          implementing character dialogue. Team member Jake Li worked on writing
          up initial models for user data, puzzles, etc. while Nika looked into
          token authentication with Auth0 and continued brainstorming puzzles.
        </p>
        <p>
          I had never worked on a project that depended so heavily on user
          input, so I had no best practices or anything to go off of—just my
          intuition. I thought of keeping track of a CSS property, like margin,
          to establish a location for characters and objects in the game.
          Coincidentally Lucy used a similar approach when coding the motion
          mechanics, so we were able to combine our work easily. We also figured
          out that using percentages for the margins meant that we could make
          the game responsive and able to scale to various screens.
        </p>

        <h3>How We Proceeded</h3>
        <p>
          Little by little, our project got closer to being complete. Jake
          worked on creating a puzzle component that could be reused for
          multiple types of puzzles. Charley worked on some frontend components
          and writing lore for the main character and the Riddler, which gave us
          a better understanding of how to portray them in the game. Lucy worked
          on creating digital assets—art for our maps, characters, items,
          puzzles, home screen, and more.
        </p>
        <p>
          I started building levels, which meant giving Lucy my ideas for items
          and puzzles, updating Jake on new properties needed for the puzzle
          component, and asking Charley to write lore for certain portions of
          the game. Many of the ideas we had written up for puzzles seemed
          achievable when we started the project, but they ended up being
          unrealistic to implement under the time constraints. Rather than code
          complex components that would only be used for one-off puzzles, I
          wanted to make most things work within the framework that we had
          already set for most in-game objects. I thought of items and puzzles
          as I coded, and I got consistent feedback from my teammates to improve
          the ideas and develop a direction for the game.
        </p>

        <h3>Obstacles</h3>
        <p>
          With me working on coding the levels and Lucy making assets for them,
          our frontend was making progress. But we needed to start working on
          authentication and the backend.
        </p>
        <p>
          Nika took on the backend role, which did not come without its
          challenges. Most of us, including Nika, were unfamiliar with backend
          development, and Nika also had the least compsci experience within our
          group in general.
        </p>
        <p>
          My plate was full with frontend work, so when Nika had trouble in the
          backend, I couldn't find the time to teach her. I, feeling the
          pressure of our time constraint, figured out how to code much of the
          backend myself rather than helping Nika through the process.
        </p>
        <p>
          When Nika had questions on authentication, though, I felt like I
          didn't have time to dive into the documentation for Auth0 in order to
          help her. Thankfully, she was able to get external help from another
          student in our class who was working on authentication.
        </p>
        <p>
          I regret the fact that I wasn't able to effectively lead Nika
          initially. Some of it was likely beyond my control, but some of it may
          have also come down to poor delegation of tasks on my part. I am glad,
          though, that we were able to work together better in the last leg of
          the project. Once she had finished most of the authentication work,
          she taught me some things that I didn't understand, and I was able to
          help fix a bug that she was struggling with. From then on, I
          communicated with Nika when I needed to make changes with how we were
          saving data.
        </p>
        <p>
          The last obstacle I encountered was debugging in the last couple weeks
          before the deadline. I had the most complete knowledge of the
          components that each of my teammates contributed, so I was our best
          bet at solving any random bugs we found. It was hard to navigate our
          complex app, and especially Jake's intricate puzzle component, but I
          was able to fix the bugs in time.
        </p>

        <h3>Reflection</h3>
        <p>
          This project was definitely a test of my leadership. I'd never worked
          on assignment that had such a long timeline and required so much
          decisionmaking on every step of the way.
        </p>
        <p>
          As we finished up Riddler, we ended up with a wonderful final product
          that we were all proud of. Leading the creation of a substantial,
          five-month long project was an amazing experience, and I know that
          what I learned from the good and the bad will guide me as I strive to
          become a more effective leader and programmer.
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
