<template>


  <!-- <div id="slots-demo" class="demo">
    <alertbox>Something bad happened.</alertbox>
  </div>
  <div id="dynamic-component-demo" class="demo">
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >{{ tab }}</button>

    <component v-bind:is="currentTabComponent" class="tab"></component>
  </div> -->

  <div id="dynamic-component-demo" class="demo">
  <button
     v-for="tab in tabs"
     :key="tab"
     :class="['tab-button', { active: currentTab === tab }]"
     @click="currentTab = tab"
   >
    {{ tab }}
  </button>


</div>


<!-- <div id="demo">
  Push this button to do something you shouldn't be doing:<br>

  <div :class="{ shake: noActivated }">
    <button @click="noActivated = true">Click me</button>
    <span v-if="noActivated">Oh no!</span>
  </div>
</div> -->
</template>
<script setup lang="ts" >
import { reactive, ref, computed, watch, defineCustomElement } from 'vue'
import TodoItem from './components/TodoItem.vue'
// import TodoItem2 from './components/TodoItem2.vue'
import BlogPost from './components/BlogPost.vue'
// import ButtonCounter from './components/ButtonCounter.vue'
import alertbox from './components/AlertBox.vue'
import TabPosts from './components/TabPosts.vue'


const posts = [
  { id: 1, title: 'My journey with Vue2' },
  { id: 2, title: 'Blogging with Vue2' },
  { id: 3, title: 'Why Vue is so fun2' }
]
const count = ref(11)
const postFontSize = ref(1)
const noActivated= ref(false)
let newTodoText = ref('SSSS')
let nextTodoId = ref(11)
let todos = reactive([
  {
    id: 1,
    title: 'Do the dishes'
  },
  {
    id: 2,
    title: 'Take out the trash'
  },
  {
    id: 3,
    title: 'Mow the lawn'
  }
])
function addNewTodo() {
  todos.push({
    id: nextTodoId.value++,
    title: newTodoText.value
  })
  newTodoText.value = ''
}
// const Bloggost2 = defineCustomElement({
//   // normal Vue component options here
//   template: `
//   <h4>{{ title }}</h4>
//   `,
//   props: ['title'],
//   emits: [''],
//   // defineCustomElement only: CSS to be injected into shadow root
//   styles: [`/* inlined css */`]
// })
// customElements.define('blog-gost2', Bloggost2)

const MyVueElement = defineCustomElement({
  // normal Vue component options here
  template: `<div class="demo-tab">Home component</div>`
})
customElements.define('tab-home', MyVueElement)

const MyVueElement2 = defineCustomElement({
  // normal Vue component options here
  template: `<div class="demo-tab">Posts component</div>`
})
customElements.define('tab-posts', MyVueElement2)

const MyVueElement3 = defineCustomElement({
  // normal Vue component options here
  template: `<div class="demo-tab">Archive component</div>`
})
customElements.define('tab-archive', MyVueElement3)

const tabs = ['Home', 'Posts', 'Archive']
const currentTab = ref('Home')
const currentTabComponent = computed(() => 'tab-' + currentTab.value.toLowerCase())

</script>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
<style lang="scss">
// body {
//   margin: 30px;
// }

// button {
//   background: #d93419;
//   border-radius: 4px;
//   display: inline-block;
//   border: none;
//   padding: 0.75rem 1rem;
//   margin: 20px 10px 0 0;
//   text-decoration: none;
//   color: #ffffff;
//   font-family: sans-serif;
//   font-size: 1rem;
//   cursor: pointer;
//   text-align: center;
//   -webkit-appearance: none;
//   -moz-appearance: none;
// }

// button:focus {
//   outline: 1px dashed #fff;
//   outline-offset: -3px;
// }

// .shake {
//   animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
//   transform: translate3d(0, 0, 0);
//   backface-visibility: hidden;
//   perspective: 1000px;
// }

// @keyframes shake {
//   10%, 90% {
//     transform: translate3d(-1px, 0, 0);
//   }
  
//   20%, 80% {
//     transform: translate3d(2px, 0, 0);
//   }

//   30%, 50%, 70% {
//     transform: translate3d(-4px, 0, 0);
//   }

//   40%, 60% {
//     transform: translate3d(4px, 0, 0);
//   }
// }
</style>
