import React from 'react';
import { createStyles, Container, Text, Button, Group, useMantineTheme } from '@mantine/core';
import MainLayout from '../components/Layout';

import { ThirdwebProvider } from '@thirdweb-dev/react';
import Profile from '../components/NftMinting/[walletAdress]';
import type { AppProps } from "next/app";
import NftClaim from '../components/NftMinting/NftClaim2';
import PlasmaWorld from '../components/NftMinting/NftCollection/PlasmaWorld';

export default function HeroTitle() {


  return (
    
      <PlasmaWorld/>
    
  );
}
