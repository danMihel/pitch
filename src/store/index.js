import { createStore } from 'vuex'
import { AuthModule } from "@/store/modules/AuthModule";
import {CatalogModule} from "@/store/modules/CatalogModule";
import{FavouritesModule} from '@/store/modules/FavouritesModule'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    AuthModule,
    CatalogModule,
    FavouritesModule
  }
})
