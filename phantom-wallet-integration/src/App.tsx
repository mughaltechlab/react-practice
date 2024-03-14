// App.tsx
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useWeb3React } from "@web3-react/core";
import { PhantomConnector } from "web3-react-v6-phantom";

const phantom = new PhantomConnector({
  supportedChainIds: [1, 5], // Mainnet and Goerli ChainIds
});

function App() {
  const { activate, deactivate, account } = useWeb3React();
  const handleConnect = async () => {
    try {
      await activate(phantom);
    } catch (e) {
      console.error(e);
    }
  };
  const handleDisconnect = () => {
    try {
      deactivate();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="App">
        <h1>Web3-React Connector Playbox</h1>
        <div className="wallet-connector">
          <button onClick={handleConnect}>Connect to Phantom!</button>
          <button onClick={handleDisconnect}>Disconnect</button>
          <p>{account ? account : "no account connected"}</p>
        </div>
      </div>
    </>
  );
}

export default App;



// // import React from "react";
// import { useState } from "react";
// import { ChainProvider, useChain } from "@cosmos-kit/react";
// import { AccountModal } from "@leapwallet/embedded-wallet-sdk-react";
// import "@leapwallet/embedded-wallet-sdk-react/styles.css";

// const chainId = "osmosis-1";
// const chain = "osmosis";
// const restUrl = "https://rest.cosmos.directory/osmosis";

// const App = () => {
//   const { address } = useChain(chain);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <ChainProvider chainId={chainId} restUrl={restUrl}>
//       <div>
//         {/* other components */}
//         <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
//         <AccountModal
//           theme="dark"
//           chainId={chainId}
//           restUrl={restUrl}
//           address={address}
//           isOpen={isModalOpen}
//           onClose={closeModal}
//         />
//         {/* other components */}
//       </div>
//     </ChainProvider>
//   );
// };

// export default App;



// // import React from "react";
// // import { ChainProvider } from '@cosmos-kit/react';
// // import { useChain } from "@cosmos-kit/react";
// // import { AccountModal } from "@leapwallet/embedded-wallet-sdk-react";
// // import "@leapwallet/embedded-wallet-sdk-react/styles.css";

// // const chainId = "osmosis-1";
// // const chain = "osmosis";
// // const restUrl = "https://rest.cosmos.directory/osmosis";

// // const App = () => {
// //   const { address } = useChain(chain);
// //   const [isModalOpen, setIsModalOpen] = React.useState(false);

// //   return (
// //     <div>
// //       {/* other components */}
// //       <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
// //       <AccountModal
// //         theme="dark"
// //         chainId={chainId}
// //         restUrl={restUrl}
// //         address={address}
// //         isOpen={isModalOpen}
// //         onClose={closeModal}
// //       />
// //       {/* other components */}
// //     </div>
// //   );
// // };


// // export default App





// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vitejs.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

