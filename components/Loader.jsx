import Image from 'next/image';
import React from 'react';
import images from '../assets';

const Loader = () => {
  return (
    <div className="flexCenter w-full my-4">
      <Image src={images.loader} width={100} objectFit="contain" />
    </div>
  );
};

export default Loader;
