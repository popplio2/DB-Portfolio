<template>
    <div>
        <FullNav />
        <CaseStudy>
          <template v-slot:title>Riddler on the Roof</template>
          <template v-slot:image>
            <img src="../assets/riddler.png" alt="">
          </template>
          <template v-slot:buttons>
            <a href="https://github.com/popplio2/fullstack-frontend-gitfactor-the-front-end" target="blank">
              <Button>Read the frontend code ➤</Button>
            </a>
            <a href="https://github.com/popplio2/fullstack-backend-gitfactor-the-back-end" target="blank">
              <Button>Read the backend code ➤</Button>
            </a>
          </template>
          <template v-slot:info>
             <p><b>Team Size:</b>
                5 
              </p>
              <p><b>Course:</b> 
                AP Computer Science Principles
              </p> 
              <p><b>Tools:</b> 
                Vue 3, Vuex, Auth0, MongoDB
              </p> 
          </template>
          <template v-slot:overview>Add stuff here</template>
        </CaseStudy>
    </div>
</template>
<script>
import FullNav from '@/components/FullNav.vue';
import CaseStudy from '@/components/CaseStudy.vue';
import Button from '@/components/Button.vue';

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    FullNav,
    CaseStudy,
    Button
  }
}
</script>

<style>

</style>