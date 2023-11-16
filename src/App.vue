<template>
  <p>Name: {{ name }}</p>
  <input type="text" @input="getInput">
</template>

<script>
export default {
  data() {
    return {name: ''}
  },
  methods: {
    getInput() {
      this.name = event.target.value;
    }
  }
}
</script>