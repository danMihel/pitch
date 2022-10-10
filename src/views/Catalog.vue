<template>
  <div class="about">
    <h1>Catalog</h1>
    <Paginator
      @change="changePage"
      :page="this.$store.state.CatalogModule.currentPage"
      :totalPage="this.$store.state.CatalogModule.totalPage"
    />
    <div v-for="item in this.$store.state.CatalogModule.catalog" :key="item.id">
      <Card :card="item" :key="item.id" />
    </div>
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
      console.log(this.$store.state.CatalogModule.currentPage, 'curren page');
    },
  },
  mounted() {
    this.$store.dispatch("CatalogModule/onCatalog");
    this.$store.dispatch("CatalogModule/onPagination");
    console.log(this.$store.state.CatalogModule.currentPage);
  },
};
</script>
