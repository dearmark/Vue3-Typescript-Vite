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
  </div> -->
</template>
<script setup lang="ts" >
import { reactive, ref, computed, watch } from 'vue'
import TodoItem from './components/TodoItem.vue'
import TodoItem2 from './components/TodoItem2.vue'
let newTodoText = ref('SSSS')
let nextTodoId = ref(4)
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
