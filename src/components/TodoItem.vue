<template>
    <li>
        {{ title }}
        <button @click="$emit('remove')">Remove</button>
    </li>
</template>
<script setup  lang="ts" >
const props = defineProps({
    title: String,
})
// const emit = defineEmits(['remove'])
// declare const emit: {
//     remove
// }
</script>