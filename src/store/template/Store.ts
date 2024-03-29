import { makeAutoObservable } from 'mobx';
import RootStore from './root';
import { rootStore } from './index';

export class TodoStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
}
