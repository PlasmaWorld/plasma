import { makeAutoObservable } from 'mobx';
import RootStore from './template/root';
import { StorageState } from './template/StorageState';
import { Home, Dashboard, LayersLinked, Code as CodeIcon, Wallet, Paint } from 'tabler-icons-react';
import { rootStore } from './template/index';
import type { SpotlightAction } from '@mantine/spotlight';
import { BooleanState } from './template/base';

export class UserStore {
  rootStore!: RootStore; 
  token = new StorageState<string>({ key: 'token' });
  tokenAddress = new StorageState<string>({ key: 'token-address' });
  theme = new StorageState<'light' | 'dark'>({
    key: 'theme',
    default: 'dark'
  });
  layout = {
    sidebarOpen: new BooleanState(),
    navbarMode: 'top' as 'left' | 'top',
    showHistoryButton: new BooleanState(),
    router: [
      { link: '/', label: 'home', icon: Home },
      { link: '/NftDashboard', label: 'Nft Dashbord', icon: CodeIcon },
      { link: '/NftCollection', label: 'Nft Collection', icon: CodeIcon },
      { link: '/NftMarketplace', label: 'Nft Marketplace', icon: CodeIcon },

    ]
  };
  networkChecker = {
    supportChainIds: {},
    isWrongNetworkDialogOpen: new BooleanState({ value: false })
  };
  get actions(): SpotlightAction[] {
    return [
      {
        title: 'Home',
        description: 'Get to home page',
        onTrigger: () => console.log('Home'),
        icon: <Home size={18} />
      },
      {
        title: 'Connect Wallet',
        description: 'Connect Wallet',
        onTrigger: () => {
          rootStore.god.setShowConnecter(true);
        },
        icon: <Wallet size={18} />
      },
      {
        title: 'Switch Theme',
        description: 'Switch Theme',
        onTrigger: () => {
          this.toggleTheme();
        },
        icon: <Paint size={18} />
      }
    ];
  }

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
  }

  get isDark() {
    return this.theme.value == 'dark';
  }

  toggleTheme() {
    this.theme.save(this.isDark ? 'light' : 'dark');
  

 
  }
}
