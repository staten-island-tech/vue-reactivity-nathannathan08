<template>
    <div class="product-list">
      <div class="product-card" v-for="product in products" :key="product.name">
        <h3 class="product-title">{{ product.name }}</h3>
        <img :src="product.image" :alt="product.name" class="product-image" />
        <p class="product-price">${{ product.price }}</p>
        <p class="product-rating">Rating: {{ product.rating }}/5</p>
      </div>
    </div>
  </template>

<script setup>
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
</script>

<style scoped>

.home {
  display: flex;
  justify-content: center; 
  align-items: flex-start; 
  width: 100%;
  min-height: 100vh;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  align-items: flex-start; 
  gap: 20px;
  width: 100%; 
  margin: 0 auto; 
  box-sizing: border-box; 
}
.product-card {
  background: #effcff;
  border: 1px solid #bafdff;
  border-radius: 8px;
  padding: 20px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(255, 0, 170, 0.1);
}


.product-title {
  font-size: 1.2em;
  margin-bottom: 10px;
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

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column; 
}


</style>

