import React, { ChangeEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { NFT, useContract, useContractMetadata, useNFTs, useTotalCount } from '@thirdweb-dev/react';
import Container from '../components/Container/Container';
import NFTGrid from '../components/NFT/NFTGrid';
import Footer from '../components/NftMinting/Footer';
import useDebounce from '../hooks/useDebounce';
import { SearchIcon } from '../icons/SearchIcon';
import { contractAddress } from '../const/parameters';

export default function Buy(): JSX.Element {
  const nftsPerPage = 12;
  const { contract } = useContract(contractAddress);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  // Removed the generic type argument from useDebounce
  const debouncedSearchTerm = useDebounce(search, 500);
  const { data: nfts, isLoading } = useNFTs(contract, {
    count: nftsPerPage,
    start: (page - 1) * nftsPerPage,
  });
  const { data: totalCount } = useTotalCount(contract);
  const { data: contractMetadata, isLoading: contractLoading } = useContractMetadata(contract);
  const [nft, setNft] = useState<NFT | null>(null);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const fetchNFT = async () => {
    if (!contract) return;
    const nftData = await contract.erc721.get(debouncedSearchTerm);
    setNft(nftData);
    setIsSearching(false);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      fetchNFT().catch(console.error);
    } else {
      setNft(null);
    }
  }, [debouncedSearchTerm, contract]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.match(/^[0-9]*$/) && Number(inputValue) > 0) {
      setSearch(inputValue);
    } else {
      setSearch('');
    }
  };

  return (
    <div>
      <Helmet>
        <title>{contractMetadata?.name}</title>
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
            <input type="text" onChange={handleSearchChange} placeholder="Search by ID" className="w-full bg-transparent px-4 text-white focus:outline-none" />
          </div>
          {isSearching && <div>Searching...</div>}
          {search && nft && !isSearching ? <NFTGrid isLoading={false} data={[nft]} /> : null}
          {isLoading && <div>Loading NFTs...</div>}
          <Container maxWidth="lg">
            <h1>Buy NFTs</h1>
            <p>Browse which NFTs are available from the collection.</p>
            {nfts && !search && <NFTGrid isLoading={false} data={nfts} />}
          </Container>
          {!search && <Footer page={page} setPage={setPage} nftsPerPage={nftsPerPage} totalCount={totalCount} loading={isLoading} />}
        </div>
      </div>
    </div>
  );
}
