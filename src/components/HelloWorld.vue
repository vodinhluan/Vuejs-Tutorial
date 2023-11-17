<template>
  <h1>HelloWorld</h1>
  <p>Tôi tên là: {{ message }}</p>
</template>

<script>
export default {
  data() {
    return {
      message: "Tèo",
    };
  },
};
</script>

<style>
  h1, p {
    text-align: center;
    color: green;
    background-color: bisque;
  }
</style>










