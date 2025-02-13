<template>
  <div>
    <NewList :cart="cart" @add-to-cart="$emit('add-to-cart', $event)" />
    <Cart :cart="cart" />
  </div>
</template>

<script setup>
import NewList from "../components/NewList.vue";
import Cart from "../components/cart.vue";

const props = defineProps({
  cart: {
    type: Array,
    required: true
  }
});

const emit = defineEmits();
</script>
