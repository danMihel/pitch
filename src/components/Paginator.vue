<template>
    <div class="paginator-wraper">
      <div
        v-for="pageNumber in this.totalPage"
        :key="pageNumber"
        @click="changePage(pageNumber)"
        :class="{'active': this.page+1 === pageNumber,}">
        {{ pageNumber }}&nbsp;
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalPage: {
        type: Number,
        require: true,
      },
      page: {
        type: Number,
        require: true,
      },
    },
    methods: {
      changePage(pageNumber) {
        this.$emit("change", pageNumber);
      },
    },
  };
  </script>
  <style>
.paginator-wraper{
    display: flex;
    margin-bottom: 10px;
    cursor: pointer;
}
.active{
    color: blue;
    font-size: 1.1rem;
}

</style>