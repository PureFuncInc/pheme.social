import { Dispatch } from 'vuex';
import { createApiMutationTypes, createApiType } from '@/store/types/typeHelper';
import { API_REQUEST_ACTION_TYPE } from '@/store/types';

const namespace = '/public/kogi';

export const Types = {
  ...createApiType([
    'FETCH_GET_KOGI',
  ]),
};

export default {
  async [Types.FETCH_GET_KOGI](
    { dispatch }: { dispatch: Dispatch },
    {
      uuId,
      onSuccess,
      onFailed,
    }: {
      uuId: string;
      onSuccess?: (args?: object) => void;
      onFailed?: (args?: object) => void;
    },
  ) {
    dispatch(API_REQUEST_ACTION_TYPE, {
      mutationTypes: createApiMutationTypes(`animals/${Types.FETCH_GET_KOGI}`),
      method: 'GET',
      endpoint: `${namespace}/${uuId}`,
      auth: false,
    }, {
      root: true,
    })
      .then((response) => {
        if (onSuccess) onSuccess(response);
      })
      .catch((err) => {
        if (onFailed) onFailed(err);
      });
  },
};
