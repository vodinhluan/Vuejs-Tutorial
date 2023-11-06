<template>
  <h1>Lifecycle Hooks</h1>
  <button @click="this.activeComp = !this.activeComp">{{ btnText }}</button>
  <div>
    <comp-one v-if="activeComp"></comp-one>
  </div>
</template>

<script>
import CompOne from './components/CompOne.vue'; 

export default {
  data() {
    return {
      activeComp: true
    }
  },
  computed: {
    btnText() {
      if(this.activeComp) {
        return 'Remove component'
      }
      else {
        return 'Add component'
      }
    }
  }
}
</script>

<style scoped>
  div {
    border: dashed black 1px;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    width: 400px;
    background-color: rgb(81, 154, 81);
  }
</style>




//import CompOne from './components/CompOne.vue'; 
