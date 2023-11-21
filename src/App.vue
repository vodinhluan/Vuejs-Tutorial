<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'About'}">About</router-link> |
    <router-link :to="{name: 'Jobs'}">Jobs</router-link> 

  </div>
  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <router-view/>
</template>

<script>
  export default {
    methods: {
      redirect() {
        this.$router.push({name: 'Home'})

      },
      back() {
        this.$router.go(-1)
      },
      forward() {
        this.$router.go(1)

      }
    }
  }
</script>

<style>
  #app {
    font-size: 40px;
    text-align: center;
    background-color:beige;
  }

  #nav {
    padding: 30px;
  }
</style>





