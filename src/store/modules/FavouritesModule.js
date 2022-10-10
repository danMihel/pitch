import API from "@/API/index";

export const FavouritesModule = {
  namespaced: true,

  state() {
    return {
      isLoade: true,
      favourites: [],
      currentPage: 0,
      totalPage: 0,
    };
  },
  mutations: {
    setSpinner(state, bool) {
      state.isLoade = bool;
    },
    setFavourites(state, array) {
      state.favourites = array;
    },
    setPage(state, num) {
      state.currentPage = num - 1;
    },
    setTotalPage(state, num) {
      state.totalPage = num;
    },
  },
  actions: {
    async onFavourites({ commit, state  }) {
      commit("setSpinner", false);
      return API.getCatalog("/commerce/products/favourites?", state.currentPage)
        .then((res) => {
          console.log(res.data.data.productsFavourites);
          commit("setFavourites", res.data.data.productsFavourites);
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
      return API.getPagination("/commerce/products/favourites?")
        .then((res) => {
          console.log(res);
          commit(
            "setTotalPage",
            Math.ceil(res.data.data.productsFavourites.count / 50)
          );
        })
        .catch((error) => {
          console.log(error, "error");
          API.errorHandler(error.status);
        });
    },
    async onAddFavourites({ commit }) {
        return API.addFavourites()
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error, "error");
            API.errorHandler(error.status);
          });
      },
  },
};
