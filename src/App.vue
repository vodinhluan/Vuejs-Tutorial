<template>
  <p>Name: {{ name }}</p>
  <input type="text" v-model="name">
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