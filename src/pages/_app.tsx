import type { AppProps } from "next/app";
import { ThirdwebProvider, ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  en,
  smartWallet, } from "@thirdweb-dev/react";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import { ColorScheme, MantineProvider } from "@mantine/core";
import { useStore } from "../store/template";
import { useLocalObservable } from "mobx-react-lite";
import MainLayout from "../components/Layout"; // Ensure this path is correct
import "./globals.css"; 
import "react-image-crop/dist/ReactCrop.css";


function MyApp({ Component, pageProps }: AppProps) {
  const { user } = useStore();
  const authUrl = process.env.NEXT_PUBLIC_AUTH_URL;

  const smartWalletOptions = {
    factoryAddress: "YOUR_FACTORY_ADDRESS",
    gasless: true,
  };

  const store = useLocalObservable(() => ({
    get colorScheme() {
      return user.theme.value || ('dark' as ColorScheme);
    }
  }));

  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={NETWORK}
      
      locale={en()}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet({ recommended: true }),
        walletConnect(),
        localWallet(),
        embeddedWallet({
          auth: {
            options: ["email", "google"],
          },
        }),
      ]}     
    >
    
      <MainLayout>
      <MantineProvider theme={{ fontFamily: 'Oxanium, sans-serif;', colorScheme: store.colorScheme }} withGlobalStyles withNormalizeCSS>
        <NextNProgress
          color="#333"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
         {/* Use MainLayout as the wrapper */}
          <Component {...pageProps} /> {/* Render the current page */}
      </MantineProvider>
      </MainLayout>
    </ThirdwebProvider>
  );
}

export default MyApp;
