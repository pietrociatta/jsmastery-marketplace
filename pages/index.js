import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Banner from '../components/Banner';
import CreatorCard from '../components/CreatorCard';
import images from '../assets';
import { makeId } from '../utils/makeId';
import NftCard from '../components/NftCard';

const style = {
  container: 'flex justify-center sm:px-4 p-12',
  innerContainer: 'w-full minmd:w-4/5',
};

const Home = () => {
  const [hideButtons, setHideButtons] = useState(false);
  const { theme } = useTheme();
  const parentRef = useRef(null);
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    if (current?.scrollWidth >= parent?.offsetWidth) {
      setHideButtons(false);
    } else setHideButtons(true);
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener('resize', isScrollable);

    return () => {
      window.removeEventListener('resize', isScrollable);
    };
  });

  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <Banner
          bannerText="Discorver, collect, and sell extraordinary NFTs"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
          parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
        />
        <div>
          <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
            Top Sellers
          </h1>
          <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
            <div
              className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none"
              ref={scrollRef}
            >
              {[6, 7, 8, 9, 10].map((index) => (
                <CreatorCard
                  key={`creator-${index}`}
                  rank={index}
                  creatorImage={images[`creator${index}`]}
                  creatorName={`0x${makeId(3)}...${makeId(4)}`}
                  creatorEths={10 - index * 0.5}
                />
              ))}
              {!hideButtons && (
                <>
                  <div
                    onClick={() => handleScroll('left')}
                    className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0"
                  >
                    <Image
                      src={images.left}
                      layout="fill"
                      objectFit="contain"
                      className={theme === 'light' && 'filter invert'}
                    />
                  </div>
                  <div
                    onClick={() => handleScroll('right')}
                    className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0"
                  >
                    <Image
                      src={images.right}
                      layout="fill"
                      objectFit="contain"
                      className={theme === 'light' && 'filter invert'}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
            <h1 className="before:first:font-poppins flex-1 dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold  sm:mb-4">
              Hot Bids
            </h1>
            <div>SearchBar</div>
          </div>
          <div className="mt-3 w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 minmd:grid-cols-5 minlg:grid-cols-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
              <NftCard
                key={`nft-${index}`}
                nft={{
                  index,
                  name: `Nifty Nft ${index}`,
                  price: (10 - index * 0.34).toFixed(2),
                  seller: `0x${makeId(3)}...${makeId(4)}`,
                  owner: `0x${makeId(3)}...${makeId(4)}`,
                  description: 'Cool NFT on Sale',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
