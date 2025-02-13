<template>
    <div class="product-list">
      <div class="product-card" v-for="product in products" :key="product.name">
      <h3 class="product-title">{{ product.name }}</h3>
      <img :src="product.image" :alt="product.name" class="product-image" />
      <p class="product-price">${{ product.price }}</p>
      <p class="product-rating">Rating: {{ product.rating }}/5</p>
      <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </template>

<script setup>

import { ref } from 'vue'; 
const products = [
    {name: 'Laptop', price: 849.99, rating: 4.6, image:'computer.jpg'},
    {name:'4K Television', price: 1199.99, rating: 4.7, image:'tv.jpg'},
    {name:'Keyboard', price: 39.99, rating: 4.9, image:'board.jpg'},
    {name:'PC', price: 1099.99, rating: 4.8, image:'pc.jpg'},
    {name:'Wi-Fi Router', price: 149.99, rating: 4.7, image:'wifi.jpg'},
    {name:'Room Humidifier', price: 29.99, rating: 4.4, image:'humid.jpg'},
    {name:'4 pack USBs', price: 9.99, rating: 4.5, image:'usb.jpg'},
    {name:'Digital Camera', price: 349.99, rating: 4.8, image:'camera.jpg'},
    {name:'Charging Wire Pack', price: 14.99, rating: 4.5, image:'charger.jpg'},
    {name:'Massage Gun', price: 29.99, rating: 4.6, image:'msg.jpg'},
    {name:'Headphones', price: 299.99, rating: 4.8, image:'headphone.jpg'},
    {name:'Printer', price: 159.99, rating: 4.7, image:'print.jpg'},
];

const emit = defineEmits();
function addToCart(product) {
  emit('add-to-cart', product);
}
</script>

<script>

function addToCart(product) {

  const existingProduct = cart.value.find(item => item.name === product.name);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
  console.log('Item added to cart:', product);
  
}
</script>

<style scoped>

.product-card button {
  background-color: #236b68;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.product-card button:hover {
  background-color: #1e5d5a;
}

.home {
  display: flex;
  justify-content: center; 
  align-items: center;     
  height: 100vh; 
  margin-right:6400px;         
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  gap: 20px;                 
  margin: 0 auto;    
  box-sizing: border-box; 
  max-width: 1200px;     
  max-height: 600px;
  overflow-y: auto;
  margin-right:500px; 
 
}

.product-card {
  background: #effcff;
  border: 1px solid #bafdff;
  border-radius: 8px;
  padding: 20px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(255, 0, 170, 0.1);
  margin: 10px;  /* Optional: adds space between cards */
}

.product-title {
  font-size: 1.4em;
  margin-bottom: 10px;
  color:#000e0c
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.product-price {
  color: #236b68;
  font-size: 1.1em;
  margin-bottom: 8px;
}

.product-rating {
  color: #00eeff;
  font-size: 1em;
}

</style>