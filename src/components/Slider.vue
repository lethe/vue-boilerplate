<script>
  export default {
    name: 'slider',
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          mousewheel: true,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 4000
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1920: {
              slidesPerView: 4,
            }
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        swiperSlides: [
          'http://via.placeholder.com/450x450/eee/ddd',
          'http://via.placeholder.com/450x450/eee/ddd',
          'http://via.placeholder.com/450x450/eee/ddd',
          'http://via.placeholder.com/450x450/eee/ddd',
          'http://via.placeholder.com/450x450/eee/ddd',
          'http://via.placeholder.com/450x450/eee/ddd',
          'http://via.placeholder.com/450x450/eee/ddd',
          'http://via.placeholder.com/450x450/eee/ddd',
          'http://via.placeholder.com/450x450/eee/ddd',
          'http://via.placeholder.com/450x450/eee/ddd',
        ]
      }
    },
    mounted() {
      
    }
  }
</script>

<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" class="img-fluid">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<style>
</style>