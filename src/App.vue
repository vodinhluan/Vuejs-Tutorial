<template>
  <div id="app">
    <RootComponent />
  </div>
</template>

<script>
import { createApp, h } from 'vue'
import RootComponent from './main.js'

export default {
  components: {
    RootComponent
  }
}
</script>
