import { animals } from '@/store/entity/response';
import State from './interface';

const state: State = {
  sutando: new animals.Sutando().serialize(),
  getSutando: {
    requesting: false,
  },
};

export default () => state;
