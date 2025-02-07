
<template>
  <div>
    <h2>Your Cart</h2>
    <div v-if="cart.length > 0">
      <ul>
        <li v-for="item in cart" :key="item.name">
          {{ item.name }} - ${{ item.price }} x {{ item.quantity }} = ${{ (item.price * item.quantity).toFixed(2) }}
        </li>
      </ul>
      <p>Total items: {{ totalItems }}</p>
      <p>Total price: ${{ totalPrice }}</p>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  cart: Array
});

const totalItems = computed(() => {
  return props.cart.reduce((total, item) => total + item.quantity, 0);
});

const totalPrice = computed(() => {
  return props.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
});
</script>
