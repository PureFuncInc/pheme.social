import { animals } from '@/store/entity/response';
import State, { Sutando } from './interface';
import { Types } from './actions';

export default {
  [Types.FETCH_GET_SUTANDO_FETCHING](state: State) {
    state.getSutando.requesting = true;
  },
  [Types.FETCH_GET_SUTANDO_SUCCESS](
    state: State,
    payload: Sutando,
  ) {
    state.sutando = new animals.Sutando(payload).serialize();
    state.getSutando.requesting = false;
  },
  [Types.FETCH_GET_SUTANDO_FAILED](state: State) {
    state.sutando = new animals.Sutando().serialize();
    state.getSutando.requesting = false;
  },
};
