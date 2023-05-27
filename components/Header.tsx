'use client';
import Image from 'next/image';
import {MagnifyingGlassIcon,UserCircleIcon} from '@heroicons/react/24/solid'
import Avatar from 'react-avatar';

function Header()  {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center bg-gray-500/10 rounded-b-2xl justify-between p-5'>
        <div className='absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-violet-200 to-pink-200 rounded-md  filter blur-3xl opacity-50 -z-50'/>
        <Image
         //src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
         src="https://i.postimg.cc/ncC0Yy59/rk.png"
         //src="/../public/rk.png"
        width={350}
        height={100}
        alt="RK Logo"
        style={{cursor:'pointer',borderRadius:'10px',}}
        className='w-46 md:w-43 pb-10 md:pb-0 object-contain rounded'
        />
        <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
        <form className='flex items-center space-x-5 rounded-md bg-white p-2 shadow-md flex-1 md:flex-initial' >
            <MagnifyingGlassIcon className='h-6 w-6 text-gray-400'/>
            <input type="text" placeholder="Search" className='flex-1 outline-none p-2 '/>
            <button type="submit" hidden>Search</button>   
        </form>
        <Avatar name='Rishu kumar' round color='#0055D1' size='50'/>
        </div>
        </div>
        <div className="flex items-center justify-center py-2 md:py-5 px-5">
          <p className='flex items-center font-light pr-5 shadow-xl rounded-xl w-fit p-5  bg-white italic max-w-3xl text-[#0055D1] text-sm'>
          <UserCircleIcon className='inline h-10 w-10 text-[#0055D1] mr-1'/>
          GPT is sumamrizing your tasks for the day...
          </p>
        </div>
        </>
  );
}

export default Header