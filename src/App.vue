<template>
  <div class="container">
    <div class="row">
      <h1 v-bind:class="[activeClass, errorClass]">Hello Directives</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass: 'active',
      errorClass: 'put-line'
    }
  }
}
</script>

<style>
  .active {
    color: green;
    text-align: center;
  }

  .put-line {
    text-decoration: underline;
  }
</style>
