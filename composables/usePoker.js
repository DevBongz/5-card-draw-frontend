import { ref } from 'vue';
import { useNuxtApp } from '#app';

export const usePoker = () => {
  const hand = ref([]);
  const evaluation = ref([]);

  const { $config } = useNuxtApp();
  const apiBase = $config.public.apiBase; 

  console.log('API Base URL:', apiBase);

  const fetchPokerHand = async () => {
    try {
      const data  = await $fetch(`${apiBase}/api/game/deal`, { 
        method: 'POST'
      });

      console.log('Response from API:', data);

      hand.value = data.hand;
      evaluation.value = data.evaluation;
    } catch (error) {
      console.error('Error fetching poker hand:', error);
      console.error('Error details:', error.response ? error.response : error);

    }
  };

  return { hand, evaluation, fetchPokerHand };
};