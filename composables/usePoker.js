import { ref } from 'vue';
import { useNuxtApp } from '#app';

export const usePoker = () => {
  const hand = ref([]);
  const evaluation = ref([]);

  const { $config } = useNuxtApp();
//   const apiBase = $config.public.apiBase; 
const apiBase = $config.public.NUXT_PUBLIC_API_BASE;

  console.log('API Base URL:', apiBase);

  const fetchPokerHand = async () => {
    try {
    //   const data  = await $fetch(`${apiBase}/api/game/deal`, { 
    //     method: 'POST'
    //   });
    const data = await $fetch(`${apiBase}/deal`, { // Append `/deal` to the base URL
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