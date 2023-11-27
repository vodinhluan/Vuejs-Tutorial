import { createApp, h } from 'vue'

const app = createApp({
  setup() {
    return {
      title: 'Trang Chủ',
      content: 'Vo Dinh Luan'
    }
  },
  render() {
    return h('div', [
      h('h1', this.title),
      h('p', this.content)
    ])
  }
})
app.mount('#app')
