import store from "@/store";
import axios from "axios";

export default {
    baseURL: "https://dev.api.cloud-atlas.online",

    async login() {
        const url = "/auth/login";
        return axios.post(this.baseURL + url,
            {
                username: "test@test.ru",
                password: "1234",
            },
            {
                headers:{
                    account: '8b59a775077536f3b73bb774655b94f6',
                    
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