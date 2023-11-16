<template>
  <p>Country: {{country}} </p>
  <select v-model="country">
    <option option="">Choose something</option>
    <option option="VN">VIETNAM</option>
    <option option="US">USA</option>
    <option option="TL">THAILAND</option>
    <option option="JP">JAPAN</option>
  </select>

</template>

<script>
export default {
  data() {
    return {
      country:''
    }
  }
}
</script>