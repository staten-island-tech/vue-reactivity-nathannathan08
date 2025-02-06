<template>
    <div>
      <h2>Your Cart</h2>
      <div v-if="cart.length > 0">
        <ul>
          <li v-for="item in cart" :key="item.name">
            {{ item.name }} - ${{ item.price }}
          </li>
        </ul>
        <p>Total items: {{ cart.length }}</p>
        <p>Total price: ${{ totalPrice }}</p>
      </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  const cart = ref([]); 
  
  const totalPrice = computed(() => {
    return cart.value.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  });
  </script>
  