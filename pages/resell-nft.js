import React, { useState, useEffect, useContext } from 'react';
import Loader from '../components/Loader';
import NftCard from '../components/NftCard';
import Input from '../components/Input';
import Button from '../components/Button';
import { NFTContext } from '../context/NFTContext';
import images from '../assets';
import { shortenAddress } from '../utils/shortenAddress';
import { useRouter } from 'next/router';
import axios from 'axios';
import { marketAddressAbi, marketAddress } from '../context/constants';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

const ResellNFT = () => {
  const { createSale, isLoadingNFT } = useContext(NFTContext);
  const router = useRouter();
  const { tokenURI, tokenId } = router.query;
  const [price, setPrice] = useState('');
  const [image, setimage] = useState('');

  const fetchNFT = async () => {
    if (!tokenURI) return;

    const { data } = await axios.get(tokenURI);

    setimage(data.image);
  };

  useEffect(() => {
    fetchNFT();
  }, [tokenId]);

  const resell = async () => {
    await createSale(tokenURI, price, true, tokenId);

    router.push('/');
  };

  if (isLoadingNFT) {
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-2xl">
          Resell NFT
        </h1>

        <Input
          inputType="number"
          title="Price"
          placeholder="Asset Price"
          handleClick={(e) => setPrice(e.target.value)}
        />

        {image && <img className="rounded mt-4" width="350" src={image} />}

        <div className="mt-7 w-full flex justify-end">
          <Button
            btnName="List NFT"
            btnType="primary"
            classStyles="rounded-xl"
            handleClick={resell}
          />
        </div>
      </div>
    </div>
  );
};

export default ResellNFT;
