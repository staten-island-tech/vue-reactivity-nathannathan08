<template>
  <div class="cart-container">
    <h2>Your Cart</h2>
    
    <div v-if="cart.length > 0" class="cart-summary">
      <p>Total items: {{ totalItems }}</p>
      <p>Total price: ${{ totalPrice }}</p>
    </div>

    <div v-if="cart.length > 0" class="cart-card-container">
      <div class="cart-card" v-for="item in cart" :key="item.name">
        <h3 class="cart-product-title">{{ item.name }}</h3>
        <img :src="item.image" :alt="item.name" class="cart-product-image" />
        <p class="cart-product-price">${{ item.price }}</p>
        <p class="cart-product-quantity">Quantity: {{ item.quantity }}</p>
       
        
        
        <button @click="removeOne(item)" :disabled="item.quantity === 1">Remove One</button>
        
        
        <button @click="removeItem(item)">Remove Item</button>
      </div>
    </div>

    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  cart: {
    type: Array,
    required: true
  }
});


function removeOne(item) {
  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
   
    removeItem(item);
  }
}


function removeItem(item) {
  const index = props.cart.findIndex((cartItem) => cartItem.name === item.name);
  if (index !== -1) {
    props.cart.splice(index, 1);  
  }
}

const totalItems = computed(() => {
  return props.cart.reduce((total, item) => total + item.quantity, 0);
});

const totalPrice = computed(() => {
  return props.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
});
</script>

<style scoped>
.cart-container {
  position: fixed;  
  top: 50px;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #0f89b9;
  padding: 20px;
  border-left: 2px solid #ddd;
  box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  z-index: 1000;
  transition: all 0.3s ease;
}

.cart-card-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-card {
  background: #effcff;
  border: 1px solid #bafdff;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(255, 0, 170, 0.1);
}

.cart-product-title {
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #000e0c;
}

.cart-product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.cart-product-price,
.cart-product-quantity,
.cart-product-total {
  font-size: 1.1em;
  margin-bottom: 8px;
}

button {
  background-color: #20c5bd;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #1e5d5a;
}

button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}
</style>
