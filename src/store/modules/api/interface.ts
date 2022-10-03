import AuthState from './auth/interface';
import AnimalsState from './animals/interface';

export default interface ApiState {
  auth: AuthState,
  animals: AnimalsState,
}
