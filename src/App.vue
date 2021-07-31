<template>
  <div id="event-handling" class="demo">
    <p>{{ message }}</p>
    <button @click="reverseMessage">Reverse Message</button>
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
import { reactive, ref, toRefs, defineComponent } from 'vue'
const message = ref('一二三四!');
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
