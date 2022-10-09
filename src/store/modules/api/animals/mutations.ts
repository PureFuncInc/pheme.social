import { animals } from '@/store/entity/response';
import State, { Kogi } from './interface';
import { Types } from './actions';

export default {
  [Types.FETCH_GET_KOGI_FETCHING](state: State) {
    state.getKogi.requesting = true;
  },
  [Types.FETCH_GET_KOGI_SUCCESS](
    state: State,
    payload: Kogi,
  ) {
    state.kogi = new animals.Kogi(payload).serialize();
    state.getKogi.requesting = false;
  },
  [Types.FETCH_GET_KOGI_FAILED](state: State) {
    state.kogi = new animals.Kogi().serialize();
    state.getKogi.requesting = false;
  },
};
