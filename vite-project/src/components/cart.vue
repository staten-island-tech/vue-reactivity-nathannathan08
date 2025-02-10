<template>
  <div class="cart-container">
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

<style scoped>
.cart-container {
  position: fixed;  /* Make cart fixed on the screen */
  top: 50px;  /* Adjust based on your header height */
  right: 0;
  width: 300px;  /* Adjust width */
  height: 100%;  /* Full screen height */
  background-color: #fff;
  padding: 20px;
  border-left: 2px solid #ddd;
  box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  z-index: 1000;  /* Ensure it stays above other content */
  transition: all 0.3s ease;
}
</style>