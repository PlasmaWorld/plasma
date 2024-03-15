import Link from 'next/link';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className='
      bg-[url("/images/background.png")] bg-cover bg-center bg-no-repeat min-h-screen
      '>
      <div className='flex flex-col items-center justify-center h-[95vh] text-center'>
        <div className='max-w-4xl'>
          <h1 className='text-3xl lg:text-6xl font-bold text-white'>The project that inspired the</h1>
          <h1 className='text-3xl lg:text-6xl font-bold text-white'>modern way of Networking</h1>
          <p className='text-gray-300 mt-5 px-5 lg:text-xl pt-3 lg:pt-5 lg:w-2/3 mx-auto'>
            19.800 collectible characters with proof of ownership stored on the Iotex blockchain.
          </p>
          <div className='lg:mt-12 mt-16 flex flex-col lg:flex-row gap-2 lg:gap-5 justify-center items-center px-5 lg:px-0'>
            <Link href="https://iopay.me/" target="_blank" rel="noopener noreferrer">
              <button className='bg-sky-500 hover:bg-white hover:text-gray-800 transition duration-200 text-white py-4 px-7 rounded-full'>Download IoPay</button>
            </Link>
            <Link href="/Mint" target="_blank" rel="noopener noreferrer">
              <button className='bg-sky-500 hover:bg-white hover:text-gray-800 transition duration-200 text-white py-4 px-7 rounded-full'>Mint Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
