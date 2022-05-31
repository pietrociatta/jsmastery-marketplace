import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import Button from './Button';

const style = {
  footer:
    'flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16',
  footerInset:
    'flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16',
  footerSubscribe: 'w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16',
  footerInside: 'flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7',
  copyrightText:
    'font-poppins dark:text-white text-nft-black-1 font-semibold text-xs',
  logoText: 'dark:text-white text-nft-black-1 font-semibold text-lg ml-1',
  subscribeText: 'dark:text-white text-nft-black-1 font-semibold text-xs mt-6',
  inputField:
    'h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none',
};

const FooterLinks = ({ heading, items }) => (
  <div className="flex-1 justify-start items-start">
    <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mb-5">
      {heading}
    </h3>
    {items.map((item, index) => (
      <p
        key={index}
        className="font-poppins dark:text-white text-nft-black-1 font-normal text-xs cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3"
      >
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={style.footer}>
      <div className={style.footerSubscribe}>
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Image
              src={images.logo02}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
            <p className={style.logoText}>PeterStore</p>
          </div>
          <p className={style.subscribeText}>Get the latest updates</p>
          <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded-md">
            <input
              type="email"
              placeholder="Your Email"
              className={style.inputField}
            />
            <div className="flex-initial">
              <Button btnName="Email me" classStyles="rounded-md" />
            </div>
          </div>
        </div>

        <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
          <FooterLinks
            heading="PietroMarket"
            items={['Explore', 'How it Works', 'Contact Us']}
          />
          <FooterLinks
            heading="Support"
            items={[
              'Help Center',
              'Terms of Service',
              'Legal',
              'Privacy Policy',
            ]}
          />
        </div>
      </div>
      <div className={style.footerInset}>
        <div className={style.footerInside}>
          <p className={style.copyrightText}>
            PietroMarket, Inc. All right reserved
          </p>
          <div className="flex flex-row sm:mt-4">
            {[
              images.instagram,
              images.twitter,
              images.telegram,
              images.discord,
            ].map((image, index) => (
              <div className="mx-2 cursor-pointer" key={index}>
                <Image
                  src={image}
                  objectFit="contain"
                  width={24}
                  height={24}
                  alt="social"
                  className={theme === 'light' && 'filter invert'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
