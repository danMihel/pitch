<template>
  <div  class="about">
    <h1>Catalog</h1>
    <Paginator
      @change="changePage"
      :page="this.$store.state.CatalogModule.currentPage"
      :totalPage="this.$store.state.CatalogModule.totalPage"
    />
    <div v-if="this.$store.state.CatalogModule.isLoade === true" v-for="item in this.$store.state.CatalogModule.catalog" :key="item.id">
      <Card @change="addFav" :card="item" :key="item.id" />
    </div>
    <div v-else class="catalog__spinner"></div>
  </div>
 
</template>
<script>
import Card from "@/components/Card.vue";
import Paginator from "@/components/Paginator.vue";
export default {
  name: "catalog",
  components: {
    Card,
    Paginator,
  },
  methods: {
    changePage(pageNumber) {
      this.$store.commit("CatalogModule/setPage", pageNumber);
      this.$store.dispatch("CatalogModule/onCatalog");
    },
    addFav(id) {
      this.$store.commit("FavouritesModule/setFavId", id);
      this.$store.dispatch("FavouritesModule/onAddFavourites");    
    },
  },
  mounted() {
    this.$store.dispatch("CatalogModule/onCatalog");
    this.$store.dispatch("CatalogModule/onPagination");
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
  .catalog__spinner {
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
