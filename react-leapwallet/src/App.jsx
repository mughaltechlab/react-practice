import React, { useState } from "react";
import { ChainProvider } from "@cosmos-kit/react";
import { AccountModal } from "@leapwallet/embedded-wallet-sdk-react";
import "@leapwallet/embedded-wallet-sdk-react/styles.css";
import './App.css';

const chainId = "osmosis-1";
const chain = "osmosis";
const restUrl = "https://rest.cosmos.directory/osmosis";

const Apps = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const wallets = [
    { name: "Wallet 1", address: "address1" },
    { name: "Wallet 2", address: "address2" },
    { name: "Wallet 3", address: "address3" }
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ChainProvider chainId={chainId} restUrl={restUrl}>
      <div>
        {/* other components */}
        <button onClick={openModal}>Open Modal</button>
        {wallets.map(wallet => (
          <div key={wallet.address}>
            <AccountModal
              theme="dark"
              chainId={chainId}
              address={wallet.address}
              isOpen={isModalOpen}
              onClose={closeModal}
            />
          </div>
        ))}
        {/* other components */}
      </div>
    </ChainProvider>
  );
};

export default Apps;
