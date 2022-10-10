<template>
  <div class="card-container">
    <span class="doc__title"> {{ card.title }} </span>
  </div>
</template>
<script>
export default {
  name: "card",
  methods: {},
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
