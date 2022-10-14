<template>
  <div class="card-container">
    <div class="doc__title"> {{ card.title }}</div>
    <div class="like-icon">
      <img v-if="card.isInFavourites || fav === true " @click="del" src="@/assets/likeRed.png"/>
      <img v-else @click="add" src="@/assets/likeBlack.png"/>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  data(){
    return{
      fav: false
    }
  },
  methods: {
    async add() {
      await this.$store.commit("FavouritesModule/setFavId", this.card.id);
      await this.$store.dispatch("FavouritesModule/onAddFavourites", this.card.id);
      this.fav = true;
    },
    async del() {
      await this.$store.commit("FavouritesModule/setFavId", this.card.id);
      await this.$store.dispatch("FavouritesModule/onDeleteFavourites", this.card.id);
      this.fav = false;
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
.hidden{
  display: none;
}
.card-container {
  margin: 10px 40px;
  padding: 10px;
  display: flex;
  border: solid rgb(219, 217, 217) 1px;
  background-color: rgb(250, 250, 250);
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
}
.doc__title {
  width: 40%;
  font-size: 1.1rem;
}
.like-icon img{
  height: 35px;
  width: 35px;
  padding: 10px;
  border-radius: 10px;
  border: solid rgb(219, 217, 217) 1px;
}
.like-icon img:hover{
  border: solid rgb(172, 171, 171) 1px;
  transition: 0.2s linear;
}
</style>
