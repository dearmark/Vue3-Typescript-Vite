<template>
  <div id="counter">Counter: {{ counter }}</div>
  <div id="bind-attribute">
    <span v-bind:title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
  </div>
  <div id="event-handling">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">反转 Message</button>
  </div>
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
  <div id="conditional-rendering">
    <span v-if="seen">现在你看到我了</span>
  </div>
  <div id="list-rendering">
    <ol>
      <li v-for="todo in todos">{{ todo.text }}</li>
    </ol>
  </div>
</template>
<!-- Options API -->
<!-- <script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      message: '一二三四!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
})
</script> -->
<!-- Composition API 版本1-->
<!-- <script lang="ts">
import { reactive,ref, defineComponent } from 'vue'
export default defineComponent({
  setup(props, context) {

    const message = ref('一二三四!')
    // var message:string = '一二三四!!';
    //const state = reactive({message})
 
    
    function reverseMessage() {
      message.value = message.value
        .split('')
        .reverse()
        .join('');
        console.log(message)

    }
    
    return {
      message,
      reverseMessage
    }
  }

})
</script> -->

<!-- Composition API 版本2-->
<!-- <script lang="ts">
import { reactive, ref, toRefs, defineComponent } from 'vue'
export default defineComponent({
  setup() {

    const state = reactive({
      message: '一二三四!'
    })


    function reverseMessage() {
      state.message = state.message
        .split('')
        .reverse()
        .join('');
      console.log(state.message);

    }

    return {
      ...toRefs(state),
      reverseMessage
    }
  }

})
</script> -->
<!-- Composition API 版本3-->
<script setup lang="ts" >
import { reactive, ref, watchEffect ,toRefs, defineComponent } from 'vue'
// var counter = 0;
// const Counter = ref(counter);
// watchEffect(() => {

// });
let counter = ref(0);
let interval = setInterval(() => {
  if (counter.value === 60) {
    clearInterval(interval)
  } else {
    counter.value ++
    console.log(counter.value )
  }
}, 1000)
const message = ref('一二三四!');
const seen = ref(true);
const todos = ref(
  [
    { text: 'Learn JavaScript' },
    { text: 'Learn Vue' },
    { text: 'Build something awesome' }
  ]
)
function reverseMessage() {
  message.value = message.value
    .split('')
    .reverse()
    .join('');
  // console.log(message)

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
