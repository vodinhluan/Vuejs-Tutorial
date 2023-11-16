<template>
  <p>Full Name: {{ formData.firstName }} {{ formData.lastName }}</p>
  <p>Age: {{ formData.age }}</p>

  <form @submit.prevent="submitForm">
    <p>
      <label for="firstName">First Name: </label>
      <input id="firstName" type="text" v-model.lazy.trim="formData.firstName">
    </p>

    <p>
      <label for="lastName">Last Name: </label>
      <input id="lastName" type="text" v-model="formData.lastName">
    </p>

    <p>
      <label for="age">Age: </label>
      <input id="age" type="number" v-model.number="formData.age">
    </p>


    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        age:''
      }
    }
  },
  methods: {
    submitForm() {
      console.log('Submitting form data:', this.formData);
    }
  }
}
</script>