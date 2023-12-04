<script setup>
import { onMounted, ref } from 'vue';

import Magnify from 'vue-material-design-icons/Magnify.vue';

import HomeOutline from 'vue-material-design-icon/HomeOutline.vue';
import TrendingUp from 'vue-material-design-icon/TrendingUp.vue';
import Television from 'vue-material-design-icon/Television.vue';
import MovieOutline from 'vue-material-design-icon/MovieOutline.vue';
import Plus from 'vue-material-design-icon/Plus.vue';
import ChevronLeft from 'vue-material-design-icon/ChevronLeft.vue';

import { useMovieStore } from './stores/movie'
import { storeToRefs } from 'pinia';
const useMovie = useMovieStore()
const { movie, showFullVideo } = storeToRefs(useMovie)
</script>

<template>
  <div class="text-red-400">
    TEXT HERE
  </div>
</template>
/* 3분 44초 */   