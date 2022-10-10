import API from "@/API/index";

export const CatalogModule = {
  namespaced: true,

  state() {
    return {
      isLoade: true,
      catalog: [],
      currentPage: 0,
      totalPage: 0,
    };
  },
  mutations: {
    setSpinner(state, bool) {
      state.isLoade = bool;
    },
    setCatalog(state, array) {
      state.catalog = array;
    },
    setPage(state, num) {
      state.currentPage = num-1;
    },
    setTotalPage(state, num) {
      state.totalPage = num;
    },
  },
  actions: {
    async onCatalog({ commit }) {
      commit("setSpinner", false);
      return API.getCatalog({})
        .then((res) => {
            console.log(res.data.data.products)
          commit("setCatalog", res.data.data.products);
        })
        .catch((error) => {
          console.log(error, "error");
          API.errorHandler(error.status);
        })
        .finally(() => {
          commit("setSpinner", true);
        });
    },
    async onPagination({ commit }) {
      return API.getPagination("/commerce/products?")
        .then((res) => {
          commit("setTotalPage", Math.ceil(res.data.data.products.count / 50));
        })
        .catch((error) => {
          console.log(error, "error");
          API.errorHandler(error.status);
        });
    },
  },
};
