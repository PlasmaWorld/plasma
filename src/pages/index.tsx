import { HeroNft } from '@/components/NftMinting/LaunchHero';
import Profile from '../components/NftMinting/[walletAdress]'; // Ensure correct file path
import NftClaim from '../components/NftMinting/NftClaim2';
import NewsSection2 from '@/components/NftMinting/LaunchNews';
import Roadmap2 from '@/components/NftMinting/Roadmap';
import Part from '@/components/LandingPage/Part';
import React, { ChangeEvent, useEffect, useState } from 'react';
import Footer from '@/components/LandingPage/Footer';


export default function Home(): JSX.Element {


return (
    <>
      <HeroNft />
      <NewsSection2 />
      <Roadmap2/>
      <Part />
      <Footer/>

    </>
  );
}