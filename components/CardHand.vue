<template>
    <div class="flex flex-col items-center" style="margin-top: -200px;">
      
        <div style="color: white; padding-bottom: 20px; padding-top: 20px;">
            <h2>Your Poker Hand:</h2>
        </div>
        
      <ul v-if="hand.length" class="flex space-x-4">
        <li v-for="(card, index) in hand" :key="index">
            <img :src="getCardImage(card)" alt="Poker card" class="w-20 h-auto" />
        </li>
      </ul>
  
      <div v-if="evaluation" style="color: white; padding-bottom: 20px; padding-top: 20px;">
        <h3>Hand Evaluation</h3>
        <p>{{ evaluation }}</p>
      </div>
  
      <Button @click="fetchPokerHand" label="Deal New Hand"/>
    </div>
  </template>
  
  <script setup>
  import { usePoker } from '~/composables/usePoker';
  import Button from 'primevue/button';
  
  const { hand, evaluation, fetchPokerHand } = usePoker();


const getCardImage = (card) => {
     
  const formattedCard = card
    .toLowerCase()
    .replace(/ /g, '_') 
    .replace(/'/g, '');
  return `/images/${formattedCard}.png`; 
};
  </script>
  
  