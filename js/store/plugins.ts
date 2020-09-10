import { createLogger, Store } from 'vuex';

import { State, STORAGE_KEY } from './state';

const localStoragePlugin: (store: Store<State>) => void = store => {
  store.subscribe((_, { players }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ players }));
  });
};

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin];