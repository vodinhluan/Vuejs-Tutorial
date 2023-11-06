<template>
  <div>
    <h1>beforeUpdate Hook Example</h1>
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
  beforeUpdate() {
    // This hook is called just before the component updates
    console.log('Component is about to update');
    console.log('Current message:', this.message);
  },
};
</script>
