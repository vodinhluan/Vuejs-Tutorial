<template>
    <h2>Component</h2>
    <p>When this component is removed from the DOM tree, the unmounted() function is called and we can add code to that function. In this example we create an alert popup box when this component is removed.</p>
  </template>
  
  <script>
  export default {
    unmounted() {
      alert("The component is removed (unmounted)!");
    }
  }
  </script>


