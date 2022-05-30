import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

import images from '../assets';

const style = {
  wrapper:
    'flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1',
  container: 'flex flex-1 flex-row justify-start',
  logoText: 'dark:text-white text-nft-black-1 font-semibold text-lg ml-1',
  logoContainerDesktop: 'flexCenter md:hidden cursor-pointer',
  logoContainerMobile: ' md:flex hidden cursor-pointer',
  toggleContainer: 'flex flex-initial flex-row justify-end',
  toggle: 'flex items-center mr-2',
  toggleIcons: 'flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label',
  toggleSwitch: 'w-3 h-3 absolute bg-white rounded-full ball cursor-pointer',
  menuContainerDesktop: 'md:hidden flex',
  menuItems: 'list-none flexCenter flex-grow',
  mobileToggleContainer: 'hidden md:flex ml-2',
};

const MenuItems = ({ isMobile, active, setActive }) => {
  const generateLink = (index) => {
    switch (index) {
      case 0:
        return '/';
      case 1:
        return '/created-nfts';
      case 2:
        return '/my-nfts';

      default:
        return '/';
    }
  };
  return (
    <ul
      className={`list-none flexCenter flex-row ${
        isMobile && 'flex-col h-full'
      }`}
    >
      {['Explore NFTs', 'Listed NFTs', 'My NFTs'].map((item, index) => (
        <li
          key={index}
          onClick={() => {
            setActive(item);
          }}
          className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3 ${
            active === item
              ? 'dark:text-white text-nft-black-1'
              : 'dark:text-nft-gray-3 text-nft-gray-2'
          }`}
        >
          <Link href={generateLink(index)}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

const ButtonGroup = ({ setActive, router }) => {
  const hasConnected = true;
  return hasConnected ? (
    <Button
      btnName="Create"
      classStyles="mx-2 rounded-xl"
      handleClick={() => {
        setActive('');
        router.push('/create-nft');
      }}
    />
  ) : (
    <Button
      btnName="Connect"
      classStyles="mx-2 rounded-xl"
      handleClick={() => {}}
    />
  );
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState('Explore NFTs');
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={style.wrapper}>
      <div className={style.container}>
        <Link href="/">
          <div className={style.logoContainerDesktop}>
            <Image
              src={images.logo02}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
            <p className={style.logoText}>PeterStore</p>
          </div>
        </Link>
        <Link href="/">
          <div className={style.logoContainerMobile}>
            <Image
              src={images.logo02}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
          </div>
        </Link>
      </div>
      <div className={style.toggleContainer}>
        <div className={style.toggle}>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <label htmlFor="checkbox" className={style.toggleIcons}>
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className={style.toggleSwitch} />
          </label>
        </div>
        <div className={style.menuContainerDesktop}>
          <MenuItems active={active} setActive={setActive} />
          <div className="ml-4">
            <ButtonGroup setActive={setActive} router={router} />
          </div>
        </div>
      </div>
      <div className={style.mobileToggleContainer}>
        {isOpen ? (
          <Image
            src={images.cross}
            objectFit="contain"
            width={20}
            height={20}
            alt="close"
            onClick={() => setIsOpen(false)}
            className={theme === 'light' && 'filter invert'}
          />
        ) : (
          <Image
            src={images.menu}
            objectFit="contain"
            width={25}
            height={25}
            alt="menu"
            onClick={() => setIsOpen(true)}
            className={theme === 'light' && 'filter invert'}
          />
        )}

        {isOpen && (
          <div className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col">
            <div className="flex-1 p-4">
              <MenuItems active={active} setActive={setActive} isMobile />
            </div>
            <div className="p-4 border-t dark:border-nft-black-1 border-nft-gray-1" />
            <ButtonGroup setActive={setActive} router={router} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
