<template>
   <div class="global-container">
        <header class="header">
            <h1>
                <slot name="title"></slot>
            </h1>
            <slot name="image"></slot>
            <slot name="buttons"></slot>

            <div class="header-info">
                <p><b>Team Size:</b>
                <slot name="team"></slot>
                </p>
                <p><b>Tools:</b> 
                    <slot name="tools"></slot>
                </p>  
            </div>
        </header>
        
        <article class="article">
            <h2>Overview</h2>
            <p>
                <slot name="overview"></slot>
            </p>
        </article>

        <article class="article">
            <h2>Process</h2>
            <p>
                <slot name="process"></slot>
            </p>
        </article>

        <article class="article">
            <h2>Reflection</h2>
            <p>
                <slot name="reflection"></slot>
            </p>
        </article> 
   </div>
</template>
    
<script>
export default {
    components: {
    }
}
</script>

<style scoped> 
  .header {
      margin: 3rem 0;
  }
  .header h1, h2{
    color: var(--main-color);
    text-align: center;
  }
  .header h1 {
    margin-top: 3rem;
  }
  .header a {
    margin-right: 1rem;
    margin-bottom: .75rem;
  }
  .header-info {
    margin: 2rem 0;
  }
  .article h2 {
      margin-top: 2rem;
  }
</style>

<style>
  .header img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 30rem;
    margin: 2rem 0;
    border-radius: 1rem;
    transition: all .3s;
  }
  .header a {
    margin-right: 1rem;
    margin-bottom: .75rem;
  }
</style>