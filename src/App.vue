<template>
  <div id="todo-list-example" class="demo">
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat" />
      <button>Add</button>
    </form>
    <ul>
      <TodoItem
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="todos.splice(index, 1)"
      ></TodoItem>
    </ul>
  </div>
  <div id="components-demo">
    <ButtonCounter :count="count"></ButtonCounter>
  </div>
  <div id="components-demo">
    <ButtonCounter :count="22"></ButtonCounter>
  </div>
  <!-- <div id="blog-post-demo" class="demo">
    <blogpost title="My journey with Vue"></blogpost>
    <blogpost title="Blogging with Vue"></blogpost>
    <blogpost title="Why Vue is so fun"></blogpost>
  </div> -->
    <!-- 传递值 -->
    <!-- <div id="blog-posts-demo">
      <blogpost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        @enlarge-text="postFontSize += 0.1"
      ></blogpost>
    </div>-->

    <div id="blog-posts-events-demo" class="demo">
      <div :style="{ fontSize: postFontSize + 'em' }">
        <BlogPost
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          @enlarge-text="postFontSize += 1"
          @zoom-out="postFontSize -= 1"
        ></BlogPost>
      </div>
    </div>
  
  <!-- <div id="todo-list-example" class="demo">
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat" />
      <button>Add</button>
    </form>
    <ul>
      <TodoItem2
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="todos.splice(index, 1)"
      ></TodoItem2>
    </ul>
  </div>-->
  <div id="slots-demo" class="demo">
  <alertbox>
    Something bad happened.
  </alertbox>
</div>
</template>
<script setup lang="ts" >
import { reactive, ref, computed, watch } from 'vue'
import TodoItem from './components/TodoItem.vue'
// import TodoItem2 from './components/TodoItem2.vue'
import BlogPost from './components/BlogPost.vue'
import ButtonCounter from './components/ButtonCounter.vue'
import alertbox from './components/AlertBox.vue'
const posts = [
  { id: 1, title: 'My journey with Vue2' },
  { id: 2, title: 'Blogging with Vue2' },
  { id: 3, title: 'Why Vue is so fun2' }
]
const count = ref(11)
const postFontSize = ref(1)
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

</style>
