<template>
    <div>
<h2 v-for="products in products" :key="products">{{ products }}</h2> 
    </div>
</template>

<script setup>
const products = [
    {name: 'Laptop', price: 850, rating: 4.6, imageUrl: 'image.png'},
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

</style>
