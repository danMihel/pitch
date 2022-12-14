import axios from "axios";

export default {
  baseURL: "https://dev.api.cloud-atlas.online",
  accountID: "8b59a775077536f3b73bb774655b94f6",

  async login(url, params) {
    return axios.post(this.baseURL + url, params, {
      headers: {
        account: this.accountID,
        Authorization: localStorage.accessToken,
      },
    });
  },

  async getPagination(url) {
    const items = `filters[aggregate]`;
    return axios.get(this.baseURL + url + items, {
      headers: {
        account: this.accountID,
        Authorization: localStorage.accessToken,
      },
    });
  },

  async getCatalog(url, num) {
    const limit = `filters[offset]=${num * 50}&filters[limit]=50`;
    return axios.get(this.baseURL + url + limit, {
      headers: {
        account: this.accountID,
        Authorization: localStorage.accessToken,
      },
    });
  },

  async addFavourites(id) {
    const url = "/commerce/products/favourites?";
    return axios.post(
      this.baseURL + url,
      {
        product: id,
      },
      {
        headers: {
          account: this.accountID,
          Authorization: localStorage.accessToken,
        },
      }
    );
  },

  async deleteFavourites(id) {
    const url = `/commerce/products/${id}/favourites?`;
    return axios.delete(this.baseURL + url, {
      headers: {
        account: this.accountID,
        Authorization: localStorage.accessToken,
      },
    });
  },
};
