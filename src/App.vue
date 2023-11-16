<template>
  <p>Firt Name: {{ firstName }}</p>
  <input type="text" v-model.lazy="firstName">

  <p>Last Name: {{ lastName }}</p>
  <input type="text" v-model="lastName">
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName:''
    }
  },
  methods: {
    getInput() {
      this.firstName = event.target.value;
      this.lastName = event.target.value;
    }
  }
}
</script>