import React, { ChangeEvent, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useContract, useContractMetadata } from '@thirdweb-dev/react';
import Container from '../components/Container/Container';
import NFTGrid from '../components/NFT/NFTGrid';
import Footer from '../components/NftMinting/Footer';
import useDebounce from '../hooks/useDebounce';
import { SearchIcon } from '../icons/SearchIcon';
import MarketWrapper from '../components/ListingWrapper/MarketWrapper'; // Ensure this path matches your project structure
import { contractAddress } from '../const/parameters';

export default function Buy(): JSX.Element {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const debouncedSearchTerm = useDebounce(search, 500);
  const [displayMode, setDisplayMode] = useState<string>('all'); // 'all', 'direct', 'auction'
  const { contract } = useContract(contractAddress);
  const { data: contractMetadata, isLoading: contractLoading } = useContractMetadata(contract);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleModeChange = (mode: string) => {
    setDisplayMode(mode);
    setPage(1); // Reset to first page when mode changes
  };

  return (
    <div>
      <Helmet>
        <title>{contractMetadata?.name || 'Buy NFTs'}</title>
      </Helmet>
      <div className="m-0 bg-[#0A0A0A] p-0 font-inter text-neutral-200">
        <div className="z-20 mx-auto flex min-h-screen w-full flex-col px-4">
          {contractMetadata ? (
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-white">{contractMetadata.name}</h1>
              <h2 className="text-xl font-bold text-white">{contractMetadata.description}</h2>
            </div>
          ) : contractLoading ? (
            <div>Loading...</div>
          ) : null}
          <div className="mx-auto mb-8 flex h-12 w-96 max-w-full items-center rounded-lg border border-white/10 bg-white/5 px-4 text-xl text-white">
            <SearchIcon />
            <input
              type="text"
              onChange={handleSearchChange}
              placeholder="Search by ID"
              className="w-full bg-transparent px-4 text-white focus:outline-none"
            />
          </div>
          <div className="flex justify-center gap-4 mb-4">
            <button className={`btn ${displayMode === 'all' ? 'btn-active' : ''}`} onClick={() => handleModeChange('all')}>All NFTs</button>
            <button className={`btn ${displayMode === 'direct' ? 'btn-active' : ''}`} onClick={() => handleModeChange('direct')}>Direct Listings</button>
            <button className={`btn ${displayMode === 'auction' ? 'btn-active' : ''}`} onClick={() => handleModeChange('auction')}>Auctions</button>
          </div>
          {debouncedSearchTerm ? (
            // If there's a search term, potentially integrate search functionality here
            <NFTGrid data={[]} isLoading={false} />
          ) : (
            <MarketWrapper mode={displayMode}  />
          )}
        </div>
      </div>
    </div>
  );
}
