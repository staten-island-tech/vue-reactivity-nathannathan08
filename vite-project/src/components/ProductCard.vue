<template>
    <div>
<h2>{{ product.name }}</h2>
<img :src="product.image" alt=""/>
    </div>
</template>

<script setup>
defineProps({
   product:Object,  
});
</script>

<style scoped>

</style>