import { InjectionKey } from 'vue';
import {
  createLogger, createStore, useStore as baseUseStore, Store,
} from 'vuex';
import { API_REQUEST_ACTION_TYPE } from '@/store/types';
import request from '@/utils/requestHelper';
import modules from '@/store/modules';
import RootState from './interface';

const isProd = process.env.NODE_ENV === 'production';
const plugins = isProd ? [] : [createLogger()];

export const key: InjectionKey<Store<RootState>> = Symbol('vue-store');

export function useStore() {
  return baseUseStore(key);
}

export default createStore<RootState>({
  devtools: true,
  strict: true,
  plugins,
  modules,
  actions: {
    async [API_REQUEST_ACTION_TYPE]({ commit, state }, payload) {
      const { mutationTypes } = payload;
      const { requesting, success, error } = mutationTypes;
      if (requesting) {
        commit(requesting);
      }
      let { headers } = payload;
      const { auth } = payload;
      if (auth) {
        headers = {
          ...headers,
          authorization: `bearer ${state.api.auth.token}`,
        };
      }
      try {
        const response = await request({ ...payload, headers });
        const { data } = response;
        if (success) commit(success, { ...data, __origin__: payload.extra || null });
        return response;
      } catch (e) {
        if (error) commit(error, { error: e });
        console.log(JSON.stringify(e));
        throw e;
      }
    },
  },
});
