import { useMemo } from "react";
import {
  ConnectionProvider,
  useConnection,
  useWallet,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";
import "./App.css";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import SubApp from "./SubApp";

function App() {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;
  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);


  const wallets = useMemo(
    () => [
      // if desired, manually define specific/custom wallets here (normally not required)
      // otherwise, the wallet-adapter will auto detect the wallets a user's browser has available

    ],
    [network],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="fixed top-5 left-5">
            <WalletMultiButton />
          </div>
          <SubApp />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;