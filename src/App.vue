<template>
  <div>
    <h1>Custom Directive Example</h1>
    <div v-my-directive>
      This div has a custom directive applied to it.
    </div>
  </div>
</template>

<script>
// Define the custom directive
const myDirective = {
  beforeMount(el, binding, vnode, prevVnode) {
    // This hook is called right before the element is inserted into the DOM
    console.log('Directive beforeMount');
    console.log('Element:', el);
  },
};

export default {
  name: 'App',
  directives: {
    'my-directive': myDirective,
  },
};
</script>



