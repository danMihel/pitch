<template>
   <div class="paginator-container">
    <button v-if="this.page > 0" @click="changePage(page--)"> prev</button>
    <div class="paginator-wraper">
      <div  v-for="pageNumber in this.totalPage" :key="pageNumber"
        @click="changePage(pageNumber)"
        :class="{'active': this.page+1 === pageNumber,}">
        <div v-if="pageNumber > this.page-11 && pageNumber < this.page +11 "> {{ pageNumber }}&nbsp;</div>
      </div>
    </div>
    <button v-if="this.page < totalPage -1" @click="changePage(this.page+2)"> next</button>
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
      changePage(number) {
        this.$emit("change", number);
      },
    },
  };
  </script>
  <style>
.paginator-wraper{
    display: flex;
    cursor: pointer;
    width: 470px;
    justify-content: center;
    overflow: hidden;
}
.paginator-container{
    display: flex;
    align-items: center;
    justify-content: center;
}
.active{
    color: #4864df;
    font-size: 1.3rem;
}
</style>