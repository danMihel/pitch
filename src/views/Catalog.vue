<template>
  <div class="about">
    <h1>Catalog</h1>
  </div>
</template>
<script>
export default {
    name: "catalog",
    components: {},
    mounted() {
   
    this.$store
      .dispatch("AuthModule/onCatalog")
        },
}
</script>
