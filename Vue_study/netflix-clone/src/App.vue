<script setup>
import { onMounted, ref } from 'vue';
import movies from './movies.json';
import Magnify from 'vue-material-design-icons/Magnify.vue';
import HomeOutline from 'vue-material-design-icons/HomeOutline.vue';
import TrendingUp from 'vue-material-design-icons/TrendingUp.vue';
import Television from 'vue-material-design-icons/Television.vue';
import MovieOutline from 'vue-material-design-icons/MovieOutline.vue';
import Plus from 'vue-material-design-icons/Plus.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import VideoCarousel from '@/components/VideoCarousel.vue';

import MovieDetails from '@/components/MovieDetails.vue';

import { useMovieStore } from './stores/movie'
import { storeToRefs } from 'pinia';
const useMovie = useMovieStore()
// const { movie, showFullVideo } = storeToRefs(useMovie)

// onMounted(() => {
//   setTimeout(() => movie.value = movies[0][0], 100)
// })  
</script>

<template>
  <div class="fixed w-full h-screen bg-black">
    

    <div>
     
      <div class="fixed z-30 bottom-0 right-0 w-full h-[55%] pl-[120px] overflow-y-auto">
        <VideoCarousel class="pb-14 pt-14" category="Popular Movies" :movies="movies[0]" />
        <VideoCarousel class="pb-14" category="Horror Movies" :movies="movies[1]" />
        <VideoCarousel class="pb-32" category="Featured Movies" :movies="movies[2]" />
      </div>
    </div>
    
    <!-- <div v-if="!showFullVideo" class="absolute z-20 h-[70%] left-[120px] w-[100%] right-0 bottom-0 bg-gradient-to-t from-black via-black" /> -->
    
  </div>
</template>
