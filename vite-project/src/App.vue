<template>
    <div id="app">
      <div class="card-container">
        <!-- Cards go here -->
      </div>
    </div>
    <RouterView />
  </template>
  
  <style scoped>
  #app {
    display: flex;
    justify-content: center; /* This will center your cards horizontally */
  }
  
  .card-container {
    display: flex;
    flex-wrap: wrap; /* Makes sure the cards are on new lines if they don't fit */
    gap: 20px; /* Adjust the gap between the cards */
  }
  </style>
  