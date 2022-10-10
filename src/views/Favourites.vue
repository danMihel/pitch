<template>
    <div class="about">
      <h1>Favourites</h1>
      <Paginator
        @change="changePage"
        :page="this.$store.state.FavouritesModule.currentPage"
        :totalPage="this.$store.state.FavouritesModule.totalPage"
      />
      <div v-for="item in this.$store.state.FavouritesModule.favourites" :key="item.id">
        <Card :card="item.product" :key="item.id" />
      </div>
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
  