<template>
    <div   class="about">
      <h1>Favourites</h1>
      <Paginator
        @change="changePage"
        :page="this.$store.state.FavouritesModule.currentPage"
        :totalPage="this.$store.state.FavouritesModule.totalPage"
      />
      <div v-if="this.$store.state.FavouritesModule.isLoade === true" v-for="item in this.$store.state.FavouritesModule.favourites" :key="item.id">
        <Card :card="item.product" :key="item.id" />
      </div>
      <div v-else class="favourites__spinner"></div>
    </div>
    
  </template>
  <script>
  import Card from "@/components/Card.vue";
  import Paginator from "@/components/Paginator.vue";
  export default {
    name: "Favourites",
    components: {
      Card,
      Paginator,
    },
    methods: {
      changePage(pageNumber) {
        this.$store.commit("FavouritesModule/setPage", pageNumber);
        this.$store.dispatch("FavouritesModule/onFavourites");
      },
     
    },
    mounted() {
      this.$store.dispatch("FavouritesModule/onFavourites");
      this.$store.dispatch("FavouritesModule/onPagination");
    },
  };
  </script>
  <style>
 @keyframes donut-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .favourites__spinner {
    display: inline-block;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #b4b4b4;
    margin-top: 10%;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: donut-spin 1.2s linear infinite;
  }
</style>
  