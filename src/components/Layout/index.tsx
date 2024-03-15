import React from 'react';
import {  useAddress } from "@thirdweb-dev/react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useStore } from '../../store/template/index';
import { Search } from 'tabler-icons-react';
import { SpotlightProvider } from '@mantine/spotlight';
import { MantineProvider } from "@mantine/core";
import { Navbar } from '../Navbar/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<LayoutProps> = observer(({ children }) => {
  const address = useAddress();
  const { user } = useStore();
  const store = useLocalObservable(() => ({
    get colorScheme() {
      return user.theme.value || 'dark';
    }
  }));


  return (
    <SpotlightProvider actions={user.actions} searchIcon={<Search size={20} />} searchPlaceholder="Search..." shortcut="mod + k" nothingFoundMessage="Nothing found..." highlightQuery>
      <MantineProvider theme={{ fontFamily: 'Oxanium, sans-serif', colorScheme: store.colorScheme }} withGlobalStyles withNormalizeCSS>
        <div>
          <Navbar/>
          <main style={{ paddingTop: `calc(70px + 62px)` }}>
            {children}
          </main>
          
        </div>
      </MantineProvider>
    </SpotlightProvider>
  );
});

export default MainLayout;
