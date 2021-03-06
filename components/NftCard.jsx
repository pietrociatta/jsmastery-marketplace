import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NFTContext } from '../context/NFTContext';
import { useContext } from 'react';
import images from '../assets';
import { shortenAddress } from '../utils/shortenAddress';

function NftCard({ nft, onProfilePage }) {
  const { nftCurrency } = useContext(NFTContext);
  console.log(nft.name.length);
  return (
    <Link href={{ pathname: '/nft-details', query: nft }}>
      <div className="flex-1  dark:bg-nft-black-3 bg-white rounded-2xl p-4 m-4 minlg:m-8 sm:my-2 sm:mx-2 cursor-pointer shadow-md">
        <div className="relative w-full h-40 sm:h-30 xs:h-60 minmd:h-60 minlg:h-300 rounded-2xl overflow-hidden">
          <Image
            src={nft.image || images[`nft${nft.index}`]}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="mt-3 flex flex-col space-y-[7px]">
          <p className="font-poppins sm:text-center dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">
            {nft.name.length > 13
              ? `${nft.name.substring(0, 13)}...`
              : nft.name}
          </p>
          <div className="sm:flexBetween flex-row sm:flex-col sm:items-start sm:mx-auto">
            <p className="font-poppins sm:text-center dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg">
              {nft.price}
              <span className="font-semibold font-poppins"> {nftCurrency}</span>
            </p>
            <p className="font-poppins mt-[1px] dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg">
              {shortenAddress(onProfilePage ? nft.owner : nft.seller)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NftCard;
