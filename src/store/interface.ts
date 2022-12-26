import ApiState from './modules/api/interface';
import GlobalComponentState from './modules/globalComponents/interface';

export default interface RootState {
  api: ApiState,
  globalComponents: GlobalComponentState,
}
