<template>
  <div class="card-container">
    <span class="doc__title"> {{ card.title }}</span>
    <img class="like-icon" v-if="card.isInFavourites" @click="del" src="@/assets/likeRed.png"/>
    <img class="like-icon" v-else @click="add" src="@/assets/likeBlack.png"/>
  </div>
</template>
<script>
export default {
  name: "card",
  methods: {
    async add() {
      await this.$store.commit("FavouritesModule/setFavId", this.card.id);
      await this.$store.dispatch(
        "FavouritesModule/onAddFavourites",
        this.card.id
      );
      await this.$store.dispatch("CatalogModule/onCatalog");
    },
    async del() {
      console.log("dell");
      await this.$store.commit("FavouritesModule/setFavId", this.card.id);
      await this.$store.dispatch("FavouritesModule/onDeleteFavourites", this.card.id);
      await this.$store.dispatch("CatalogModule/onCatalog");
      await this.$store.dispatch("FavouritesModule/onFavourites");
    },
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
.like-icon{
  height: 35px;
  width: 35px;
  padding: 10px;
  border: 1px solid rgb(151, 151, 151)
}
</style>
