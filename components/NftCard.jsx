import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { LazyResult } from 'postcss';
import images from '../assets';

const NftCard = ({ nft }) => (
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
        <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">
          {nft.name}
        </p>
        <div className="flexBetween flex-row xs:flex-col xs:items-start">
          <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg">
            {nft.price} <span className="normal"> ETH</span>
          </p>
          <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg">
            {nft.seller}
          </p>
        </div>
      </div>
    </div>
  </Link>
);

export default NftCard;
