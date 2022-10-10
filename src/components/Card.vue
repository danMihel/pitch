<template>
  <div class="card-container">
    <span class="doc__title"> {{ card.title }} %%{{card.id}} </span>
    <div @click="add">Like</div>
    <div v-if="card.isInFavourites"> inFavorit</div>
  </div>
</template>
<script>
export default {
  name: "card",
  methods: {
    add(){
        this.$store.commit("FavouritesModule/setFavId", this.card.id);
        this.$store.dispatch("FavouritesModule/onAddFavourites");
        this.$store.dispatch("CatalogModule/onCatalog");
    }
  },
  props: {
    card: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style>
.card-container {
  padding-top: 10px;
  padding-bottom: 10px;
}
.doc__title {
  font-weight: 600;
}
</style>
