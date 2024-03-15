import { UserStore } from '../../store/user';

export default class RootStore {
  [x: string]: any;
  user = new UserStore(this);
}
