<template>
    <div class="product-list">
      <div class="product-card" v-for="product in products" :key="product.name">
        <h3 class="product-title">{{ product.name }}</h3>
        <img :src="product.image" :alt="product.name" class="product-image" />
        <p class="product-price">${{ product.price }}</p>
        <p class="product-rating">Rating: {{ product.rating }}</p>
      </div>
    </div>
  </template>

<script setup>
const products = [
    {name: 'Laptop', price: 850, rating: 4.6, image:'computer.jpg'},
    {name:'4K Television', price: 1200, rating: 4.7},
    {name:'Keyboard', price: 40, rating: 4.9},
    {name:'PC', price: 1100, rating: 4.8},
    {name:'Wi-Fi Router', price: 150, rating: 4.7},
    {name:'Room Humidifier', price: 30, rating: 4.4},
    {name:'4 pack USBs', price: 10, rating: 4.5},
    {name:'Digital Camera', price: 350, rating: 4.8},
    {name:'Charging Wire Pack', price: 15, rating: 4.5},
    {name:'Massage Gun', price: 30, rating: 4.6},
    {name:'Headphones', price: 300, rating: 4.8},
    {name:'Printer', price: 160, rating: 4.7},
];
</script>

<style scoped>

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
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

</style>