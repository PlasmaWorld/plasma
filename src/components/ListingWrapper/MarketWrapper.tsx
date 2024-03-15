import React, { useState, useEffect } from 'react';
import { useContract, useContractRead } from "@thirdweb-dev/react";
import NFTGrid from '../NFT/NFTGrid';

const contractAddress = "0x5E850F5D6cec550EDD4E2403703cfDaB5Ec2F06F";

export default function MarketWrapper({ mode }) {
  const { contract } = useContract(contractAddress);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch data based on mode
  const fetchData = async () => {
    if (!contract) return;

    setIsLoading(true);
    let result = null;

    switch (mode) {
      case 'direct':
        // Fetch direct listings
        result = await useContractRead(contract, "getAllValidListings", [(currentPage - 1) * itemsPerPage, currentPage * itemsPerPage]);
        break;
      case 'auction':
        // Fetch auctions
        result = await useContractRead(contract, "getAllValidAuctions", [(currentPage - 1) * itemsPerPage, currentPage * itemsPerPage]);
        break;
      default:
        // Default to fetching all listings
        result = await useContractRead(contract, "getAllListings", [(currentPage - 1) * itemsPerPage, currentPage * itemsPerPage]);
        break;
    }

    if (result && result.data) {
      setData(result.data);
    } else {
      setData([]);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [mode, currentPage, contract]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <NFTGrid data={data} isLoading={isLoading} />
      )}
    </div>
  );
}
