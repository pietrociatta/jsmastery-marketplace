import React, { useState, useEffect, useContext } from 'react';
import Loader from '../components/Loader';
import NftCard from '../components/NftCard';
import { NFTContext } from '../context/NFTContext';

const ListedNFTs = () => {
  const [nfts, setnfts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const { fetchMyNftsOrListedNfts } = useContext(NFTContext);

  useEffect(() => {
    fetchMyNftsOrListedNfts('fetchItemsListed').then((items) => {
      setnfts(items);
      setisLoading(false);
      console.log(nfts);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );
  }

  if (!isLoading && nfts.length === 0) {
    return (
      <div className="flexCenter sm:p-4 p-16 min-h-screen">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-extrabold">
          No NFTs listed for sale.
        </h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center sm:px-4 p-12 min-h-screen">
      <div className="w-full minmd:w-4/5">
        <div className="mt-4">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mt-2 ml-4 sm:ml-2">
            NFTs Listed for Sale
          </h2>
          <div className="mt-3 w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 minmd:grid-cols-5 minlg:grid-cols-5">
            {nfts.map((nft) => (
              <NftCard key={nft.tokenId} nft={nft} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedNFTs;
