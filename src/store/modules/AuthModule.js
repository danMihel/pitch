import API from "@/API/index";
import router from "@/router";

export const AuthModule = {
  namespaced: true,

  state() {
    return {
      logged: false,
      isLoade: true,
      login: "",
      password: "",
      errors: "",
    };
  },
  mutations: {
    setError(state, error) {
      state.errors = error;
    },
    setSpinner(state, bool) {
      state.isLoade = bool;
    },
    setLogin(state, login) {
      state.login = login;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setLogged(state, bool) {
      state.logged = bool;
    },
  },
  actions: {
    async onLogin({ commit }) {
      commit("setSpinner", false);
      return API.login("/auth/login", {
        username: this.state.AuthModule.login,
        password: this.state.AuthModule.password,
      })
        .then((res) => {
          if (res.data.data.Authorization.length > 0) {
            localStorage.accessToken = res.data.data.Authorization;
            commit("setLogged", true);
            commit("setSpinner", true);
            router.push("/catalog");
          }
        })
        .catch((error) => {
          console.log(error, "error");
        })
        .finally(() => {
          commit("setSpinner", true);
        });
    },

    async onLogout({ commit }) {
      commit("setLogged", false);
      return API.login("/auth/logout")
    },
  },
};
