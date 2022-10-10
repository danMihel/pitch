import store from "@/store";
import axios from "axios";

export default {
  baseURL: "https://dev.api.cloud-atlas.online",
  accountID: "8b59a775077536f3b73bb774655b94f6",

  async login() {
    const url = "/auth/login";
    return axios.post(
      this.baseURL + url,
      {
      username: store.state.AuthModule.login,
      password: store.state.AuthModule.password,
      },
      {
        headers: {
          account: this.accountID,
        },
      }
    );
  },

  async getCatalog() {
    const url = "/commerce/products?";
    const limit = 'filters[limit]=50'
    return axios.get(
      this.baseURL + url + limit,
      {
        headers: {
          account: this.accountID,
          Authorization: localStorage.accessToken,
        },
      }
    );
  },

  async getFavourites() {
    const url = "/commerce/products/favourites";
    return axios.get(
      this.baseURL + url,
      {
        headers: {
          account: this.accountID,
          Authorization: localStorage.accessToken,
        },
      }
    );
  },

  errorHandler(error) {
    !error
      ? (store.state.AuthModule.errors = "Проверьте подключение к интернету")
      : error == 404
      ? (store.state.AuthModule.errors = "Ой - ошибка 404")
      : (error + "")[0] == 5
      ? (store.state.AuthModule.errors =
          "Сервер сеичас недоступен, но скоро мы все починим")
      : (error + "")[0] == 4
      ? (store.state.AuthModule.errors = "Неверный логин или пароль")
      : null;
  },
};