<template>
  <div>
    <h1>Lifecycle Hooks</h1>
    <button @click="toggleComponent">{{ btnText }}</button>
    <div v-if="activeComp">
      <comp-one />
    </div>
  </div>
</template>

<script>
import CompOne from './components/CompOne.vue'; // Import the CompOne component

export default {
  components: {
    CompOne, // Register the CompOne component
  },
  data() {
    return {
      activeComp: true,
    };
  },
  computed: {
    btnText() {
      return this.activeComp ? 'Remove component' : 'Add component';
    },
  },
  methods: {
    toggleComponent() {
      this.activeComp = !this.activeComp;
    },
  },
};
</script>





