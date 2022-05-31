import React from 'react';

const Input = ({ inputType, title, placeholder, handleClick }) => (
  <div className="mt-10 w-full">
    <p className="font-poppins flex-1 dark:text-white text-nft-black-1 text-base minlg:text-xl font-normal  sm:mb-4">
      {title}
    </p>

    {inputType === 'number' ? (
      <div className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 rounded-lg w-full outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3 flexBetween flex-row">
        <input
          className="flex w-full dark:bg-nft-black-1 bg-white font-poppins dark:text-white text-nft-gray-2 text-base outline-none"
          type="number"
          placeholder={placeholder}
          onChange={handleClick}
        />
        <p className="font-poppins flex-1 dark:text-white text-nft-black-1 text-base minlg:text-xl font-normal  sm:mb-4">
          ETH
        </p>
      </div>
    ) : inputType === 'textarea' ? (
      <textarea
        className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 rounded-lg w-full outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3"
        rows="10"
        placeholder={placeholder}
        onChange={handleClick}
      />
    ) : (
      <input
        className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 rounded-lg w-full outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3"
        type={inputType}
        placeholder={placeholder}
        onChange={handleClick}
      />
    )}
  </div>
);

export default Input;
