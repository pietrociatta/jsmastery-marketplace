// RAFCE
import { useState, useMemo, useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import images from '../assets';
import Button from '../components/Button';
import Input from '../components/Input';

function CreateNFT() {
  const [fileUrl, setFileUrl] = useState(null);
  const { theme } = useTheme();

  const [formInput, setformInput] = useState({
    price: '',
    name: '',
    description: '',
  });

  const onDrop = useCallback(() => {
    // upload to ipfs
  }, []);

  console.log(formInput);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: 'image/*', maxSize: 5000000 });

  const fileStyle = useMemo(
    () => `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed
      ${isDragActive && 'border-file-active'}
      ${isDragAccept && 'border-file-accept'}
      ${isDragReject && 'border-file-reject'}`,
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins flex-1 dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold  sm:mb-4">
          Create new Item
        </h1>
        <div className="mt-16">
          <p className="font-poppins flex-1 dark:text-white text-nft-black-1 text-base minlg:text-xl font-normal  sm:mb-4">
            Upload File
          </p>
          <div className="mt-4">
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} type="text" />
              <div className="flexCenter flex-col text-center">
                {' '}
                <p className="font-poppins flex-1 dark:text-white text-nft-black-1 text-base minlg:text-xl font-normal  sm:mb-4">
                  JPG, PNG, GIF, SVG, WEBM. Max 5mb.
                </p>
                <div className="my-12 w-full flex justify-center">
                  <Image
                    src={images.upload}
                    height={100}
                    width={100}
                    objectFit="fit"
                    className={theme === 'light' && 'filter invert'}
                  />
                </div>
                <p className="font-poppins flex-1 dark:text-white text-nft-black-1 text-base minlg:text-xl font-normal  sm:mb-4">
                  Drag and Drop File
                </p>
                <p className="font-poppins flex-1 dark:text-white text-nft-black-1 text-base minlg:text-xl font-normal  sm:mb-4">
                  or Browse media on your device.
                </p>
              </div>
            </div>
            {fileUrl && (
              <aside>
                <div>
                  <img src={fileUrl} alt="asset_file" />
                </div>
              </aside>
            )}
          </div>
        </div>

        <Input
          inputType="input"
          title="Name"
          placeholder="NFT Name"
          handleClick={(e) =>
            setformInput({ ...formInput, name: e.target.value })
          }
        />
        <Input
          inputType="textarea"
          title="Description"
          placeholder="Description of your item..."
          handleClick={(e) =>
            setformInput({ ...formInput, description: e.target.value })
          }
        />
        <Input
          inputType="number"
          title="Price"
          placeholder="Enter Price:"
          handleClick={(e) =>
            setformInput({ ...formInput, price: e.target.value })
          }
        />
        <div className="mt-7 w-full flex justify-end">
          <Button
            btnName="Create NFT"
            classStyles="rounded-xl"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
export default CreateNFT;
