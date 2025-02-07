<template>
  <div id="app">
    <h1>Electronics Shopping</h1>

    <div class="card-container">
      <HomeView :cart="cart" @add-to-cart="addToCart" />
    </div>

    <div>
      <h2>Cart Summary</h2>
      <p>Total items in cart: {{ cart.length }}</p>
      <p>Total Price: ${{ totalPrice }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import HomeView from './views/HomeView.vue';

const cart = ref([]);

const totalPrice = computed(() => {
  return cart.value.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
});

function addToCart(product) {
  const existingProduct = cart.value.find(item => item.name === product.name);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
}
</script>
