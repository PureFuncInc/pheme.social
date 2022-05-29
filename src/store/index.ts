import { InjectionKey } from 'vue';
import {
  createLogger, createStore, useStore as baseUseStore, Store,
} from 'vuex';
import RootState from './interface';

export const key: InjectionKey<Store<RootState>> = Symbol('vue-store');

export function useStore() {
  return baseUseStore(key);
}

export default createStore({
  devtools: true,
  strict: true,
  plugins: [createLogger()],
  state: {
    showNavList: false,
  },
  mutations: {
    triggerNavList(state) {
      state.showNavList = !state.showNavList;
    },
  },
  actions: {
  },
  modules: {
  },
});
