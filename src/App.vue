<template>
  <div>
    <div v-my-directive>Trang Giới thiệu bản thân</div>

    <p>Full Name: {{ formData.name }}</p>
    <p>Age: {{ formData.age }}</p>

    <form @submit.prevent="submitForm">
      <p>
        <label for="name">Name: </label>
        <input id="name" type="text" v-model.trim="formData.name">
      </p>


      <p>
        <label for="age">Age: </label>
        <input id="age" type="number" v-model.number="formData.age">
      </p>

      <button @click="updateMessage">Update Message</button>
      <button @click="toggleComponent">{{ btnText }}</button>
      <div v-if="activeComp">
        <comp-one />
      </div>
  </form>

  </div>
</template>

<script>
import CompOne from './components/CompOne.vue'; 

const myDirective = {
  beforeMount() {
    alert('Chào mừng bạn đến với trang giới thiệu bản thân');
  },
  mounted(el) {
    el.style.backgroundColor = 'blue'
    el.style.color = 'red'

    console.log('Directive mounted');
    console.log('Element:', el);
  },
};

export default {
  components: {
    CompOne, 
  },

  directives: {
    'my-directive': myDirective,
  },

  data() {
    return {
      formData: {
        name: '',
        age:'',
        beforeMessage: 'Chuẩn bị đăng ký',
        message: 'Chúc mừng bạn đã đăng ký thành công'
      },
      activeComp: true,

    }
  },

  computed: {
    btnText() {
      return this.activeComp ? 'Remove component' : 'Add component';
    },
  },

  methods: {
    submitForm() {
      console.log('Submitting form data:', this.formData);
    },

    toggleComponent() {
      this.activeComp = !this.activeComp;
    },
    
  },
    beforeUpdate() {
      console.log('Before message:', this.formData.beforeMessage);
    },
    updated() {
      console.log('After message:', this.formData.message);
      // alert("Thành công!");
    },
};
</script>

<style>
  body {
    background-color: beige;
  }
</style>