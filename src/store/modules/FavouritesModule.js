import API from "@/API/index";

export const FavouritesModule = {
  namespaced: true,

  state() {
    return {
      isLoade: true,
      favourites: [],
      currentPage: 0,
      totalPage: 0,
      favId: 0,
    };
  },
  mutations: {
    setFavId(state, num){
        state.favId = num;
    },
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
    async onAddFavourites( {state}) {
        return API.addFavourites(state.favId)
          .then((res) => {
          })
          .catch((error) => {
            console.log(error, "error");
            API.errorHandler(error.status);
          });
      },

      async onDeleteFavourites( {state}) {
        return API.deleteFavourites(state.favId)
          .then((res) => {
          })
          .catch((error) => {
            console.log(error, "error");
            API.errorHandler(error.status);
          });
      },
  },
};
