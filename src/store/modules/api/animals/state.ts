import { animals } from '@/store/entity/response';
import State from './interface';

const state: State = {
  kogi: new animals.Kogi().serialize(),
  getKogi: {
    requesting: false,
  },
};

export default () => state;
