<template>
   <div class="global-container">
        <header>
            <h2>Project Title</h2>
            <img src="../assets/scrappy.png" alt="">
            <!-- ➤ -->
            <a href="https://scrappynotes.netlify.app" target="blank">
                <Button>See the website ➤</Button>
            </a>
            <a href="https://github.com/staten-island-tech/vue-reactivity-project-popplio2" target="blank">
                <Button>Read the code ➤</Button>
            </a>
            <p><b>Team Size:</b> Individual</p>
            <p><b>Tools:</b> languages, Figma</p>  
        </header>
        
        <article>
            <h3>Overview</h3>
            <p>Here is what we were trying to do. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur recusandae maxime aspernatur necessitatibus aut! Deserunt deleniti maiores doloribus! Quia esse distinctio cumque maiores unde est voluptatum debitis ad suscipit obcaecati?</p>
        </article>

        <article>
            <h3>Process</h3>
            <p>Here is how we did it. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ipsum incidunt mollitia fugiat ipsa, distinctio veniam ipsam quia quis iure quae? Eaque minus quisquam tenetur, repellendus veniam veritatis aliquam dignissimos!</p>
            <div class="image-container">
                <img src="../assets/pokecatch.png" alt="">
                <img src="../assets/pokecatch.png" alt="">
                <img src="../assets/pokecatch.png" alt="">
            </div>
        </article>

        <article>
            <h3>Reflection</h3>
            <p>Here is our outcome and what would be our next steps. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas fugit earum dignissimos reiciendis suscipit commodi modi corporis similique repellat itaque doloremque dicta cupiditate debitis, facere, obcaecati deleniti id officiis architecto.</p>
        </article>
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
    text-align: center;
    margin-top: 3rem;
  }
  header a {
      display: block;
  }
  header img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 30rem;
    margin-right: 2rem;
    border-radius: 1rem;
    transition: all .3s;
  }
  .image-container {
    width: 100%;
    height: 50rem;
    display: flex;
    justify-content: center;
  }
  article img {
    object-fit: cover;
    object-position: left;
    max-width: 100%;
    min-width: 0%;
    margin: 1rem;
    border-radius: 1rem;
    transition: all .3s;
  }
</style>