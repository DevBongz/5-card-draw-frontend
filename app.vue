 <template>
  <div class="max-h-screen w-full" :style="{ backgroundImage: 'url(/images/poker-table.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' , fontFamily: 'Caesar, sans-serif'}">
    <Menubar :model="items" class="!bg-gray-600 h-[16vh] md:h-[18vh] p-4">

        <template #start>
          <div class="flex justify-center items-center space-x-4">
            <img src="/images/5-card-logo-.png" style="max-width: 19%; height: auto;"/>
          <h1 class="text-white text-2xl" :style="{ fontFamily: 'Caesar, sans-serif' }">Poker Rush: 5-Card Standoff</h1>
          </div>
          
        </template>
    </Menubar>
    <NuxtPage />
  </div>
</template>


<script>

import Menubar from 'primevue/menubar';

</script>
