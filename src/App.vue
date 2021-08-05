<template>
  <ul id="array-rendering" class="demo">
    <li v-for="item in items" :key="item.message">{{ item.message }}</li>
  </ul>
  <ul id="array-with-index">
    <li v-for="(item, index) in items">{{ parentMessage }} - {{ index }} - {{ item.message }}</li>
  </ul>
  <ul id="v-for-object" class="demo">
    <li v-for="value in myObject">{{ value }}</li>
  </ul>
  <li v-for="(value, name) in myObject">{{ name }}: {{ value }}</li>

  <li v-for="(value, name, index) in myObject">{{ index }}. {{ name }}: {{ value }}</li>

  <li v-for="n in evenNumbers" :key="n">{{ n }}</li>

  <ul v-for="numbers in sets">
    <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
  </ul>

  <div id="range" class="demo">
    <span v-for="n in 10" :key="n">{{ n }}</span>
  </div>

  <!-- <li v-for="todo in todos" v-if="!todo.isComplete">{{ todo.name }}</li> -->
  <template v-for="todo in todos2" :key="todo.name">
    <li v-if="!todo.isComplete">{{ todo.name }}</li>
  </template>

  <div id="todo-list-example">
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat" />
      <button>Add</button>
    </form>
    <ul>
      <todo-item
        v-for="(todo, index) in todos"
        :key="todo.id"
        :title="todo.title"
        @remove="todos.splice(index, 1)"
      ></todo-item>
    </ul>
  </div>
</template>
<script setup lang="ts" >
import { reactive, ref, computed, watch } from 'vue'
const items = [{ message: 'Foo' }, { message: 'Bar' }]
const parentMessage = 'Parent'
const myObject = {
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
}
const numbers = [1, 2, 3, 4, 5]
const evenNumbers = computed(() => numbers.filter(number => number % 2 === 1))
const sets = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]

function even(numbers: number[]) {
  return numbers.filter(number => number % 2 === 0)
}
const todos2 = [{ name: 'Foo', isComplete: false }, { name: 'Bar', isComplete: false }, { name: 'Bar2', isComplete: false }]

let newTodoText = ref('SSSS')
let nextTodoId = ref(4)
let todos = [
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
]
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
