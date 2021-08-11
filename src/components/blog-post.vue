<template>
    <h4>{{ title }}</h4>
    <button @click="$emit('enlargeText')">Enlarge text</button>
    <button @click="$emit('zoomOut')">zoomOut text</button>
</template>
<script setup=’props‘  lang="ts" >
const props = defineProps({
    title: String,
})
 const emit = defineEmits(['enlargeText','zoomOut'])

</script>