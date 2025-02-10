<template>
  <div>
    <NewList :cart="cart" @add-to-cart="$emit('add-to-cart', $event)" />
    <Cart :cart="cart" />
    
  </div>
</template>

<script setup>
import NewList from "../components/NewList.vue"
import cart from "../components/cart.vue"

</script>

<style scoped>

</style>