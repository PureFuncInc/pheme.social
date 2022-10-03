import { Dispatch } from 'vuex';
import { createApiType, createApiMutationTypes } from '@/store/types/typeHelper';
import { API_REQUEST_ACTION_TYPE } from '@/store/types';

const namespace = '/public/animals';

export const Types = {
  ...createApiType([
    'FETCH_GET_SUTANDO',
  ]),
};

export default {
  async [Types.FETCH_GET_SUTANDO](
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
      mutationTypes: createApiMutationTypes(`animals/${Types.FETCH_GET_SUTANDO}`),
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
