<template>
    <div>
        <h2>Component</h2>
        <p ref="pEl">Strawberries!</p>
    </div>
</template>

<script>
export default {
  beforeUnmount() {
    alert("beforeUnmount: The text inside the p-tag is: " + this.$refs.pEl.innerHTML);
  }
}
</script>


