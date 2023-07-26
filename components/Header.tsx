'use client';

import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/navigation';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';

import Button from './Button';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {
    //Handle logout in the future
  };
  return (
    <div
      className={twMerge(
        `
        h-fit
        bg-gradient-to-b
        from-emerald-800
        p-6
    `,
        className
      )}
    >
      <div className='flex items-center justify-between w-full mb-4 '>
        <div className='items-center hidden gap-x-2 md:flex'>
          <button
            onClick={() => router.back()}
            className='flex items-center justify-center transition bg-black rounded-full hover:opacity-75'
          >
            <RxCaretLeft className='text-white' size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className='flex items-center justify-center transition bg-black rounded-full hover:opacity-75'
          >
            <RxCaretRight className='text-white' size={35} />
          </button>
        </div>

        <div className='flex items-center gap-x-2 md:hidden'>
          <button className='flex items-center justify-center p-2 transition bg-white rounded-full hover:opacity-75'>
            <HiHome className='text-black' size={20} />
          </button>

          <button className='flex items-center justify-center p-2 transition bg-white rounded-full hover:opacity-75'>
            <BiSearch className='text-black' size={20} />
          </button>
        </div>

        <div className='flex items-center justify-between gap-x-4'>
          <>
            <div>
              <Button className='font-medium bg-transparent text-neutral-300'>
                Sign Up
              </Button>
            </div>
            <div>
              <Button onClick={() => {}} className='px-6 py-2 bg-white'>
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
