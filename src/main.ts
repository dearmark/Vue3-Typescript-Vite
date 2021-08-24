import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'

// App.component('todo-item', {
//     template: `
//       <li>
//         {{ title }}
//         <button @click="$emit('remove')">Remove</button>
//       </li>
//     `,
//     props: ['title'],
//     emits: ['remove']
// })

createApp(App).mount('#app')
// App.component('todo-item', {
//     template: `
//       <li>
//         {{ title }}
//         <button @click="$emit('remove')">Remove</button>
//       </li>
//     `,
//     props: ['title'],
//     emits: ['remove']
// })

