<template>
  <div>
    <h1>updated Hook Example</h1>
    <p>Message: {{ message }}</p>
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello, Vue!',
    };
  },
  methods: {
    updateMessage() {
      this.message = 'Updated Message';
    },
  },
  updated() {
    // This hook is called after the component has been updated and re-rendered
    console.log('Component has been updated');
    console.log('Current message:', this.message);
  },
};
</script>
