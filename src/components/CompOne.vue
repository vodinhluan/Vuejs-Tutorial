<template>
    <div>
        <h2>Component</h2>
        <p ref="pEl">Strawberries!</p>
    </div>
</template>

<script>
export default {
  beforeUnmount() {
    alert("beforeUnmount: ");
    },
  unmounted() {
    alert("The component is removed (unmounted)!");
    }
}
</script>


