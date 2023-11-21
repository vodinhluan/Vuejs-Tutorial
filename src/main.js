import { createApp } from 'vue';
import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';
import Footer from './components/Footer.vue';

const app = createApp({
  components: {
    Header,
    MainContent,
    Footer
  }
});

app.mount('#app');