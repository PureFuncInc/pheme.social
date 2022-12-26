import State from './interface';

export default {
  openNavPage(state: State) {
    state.navigate.openNavPage = true;
  },
  closeNavPage(state: State) {
    state.navigate.openNavPage = false;
  },
};
