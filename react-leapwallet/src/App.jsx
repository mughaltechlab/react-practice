import React, { useState } from "react";
// import { useChain } from "@cosmos-kit/react";
// import { ChainProvider } from "@cosmos-kit/react";
// import { AccountModal } from "@leapwallet/embedded-wallet-sdk-react";
// import "@leapwallet/embedded-wallet-sdk-react/styles.css";
import './App.css';

const chainId = "osmosis-1";
const chain = "osmosis";
const restUrl = "https://rest.cosmos.directory/osmosis";

const Apps = () => {
  // const { address } = useChain(chain);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const wallets = [
  //   { name: "Wallet 1", address: "address1" },
  //   { name: "Wallet 2", address: "address2" },
  //   { name: "Wallet 3", address: "address3" }
  // ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <button onClick={()=>console.log(window)} >Hello</button>
  );
};

export default Apps;
