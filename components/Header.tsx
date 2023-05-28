'use client';
import Image from 'next/image';
import {MagnifyingGlassIcon,UserCircleIcon} from '@heroicons/react/24/solid'
import Avatar from 'react-avatar';
import { useBoardStore } from '@/store/BoardStore';
import { useEffect, useState } from 'react';
import fetchSuggestion from '@/lib/fetchSuggestion';

function Header()  {
   const [board,searchString, setSearchString] = useBoardStore((state)=>[
    state.board,
    state.searchString,
    state.setSearchString,
   ]);

   const [loading,setLoading]=useState<boolean>(false);
   const [suggestion,setSuggestion]=useState<string>("");

  //  useEffect(()=>{  
  //   if(board.columns.size===0) return;
  //     setLoading(true);
  //     const fetchSuggestionFunc=async()=>{
  //       const suggestion = await fetchSuggestion(board);
  //       setSuggestion(suggestion);
  //       setLoading(false);
  //     }
  //     fetchSuggestionFunc();
  //  },[board])

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
                <input type="text" placeholder="Search" className='flex-1 outline-none p-2 '
                value={searchString}
                onChange={(e)=>setSearchString(e.target.value)}
                />
                <button type="submit" hidden>Search</button>   
            </form>
            <Avatar name='Rishu kumar' round color='#0055D1' size='50'/>
            </div>
            </div>


            {/* break */}
            <div className='flex items-center justify-center py-2 md:py-5 px-5'>
            <div
  className="flex flex-col rounded-lg bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg md:max-w-xl md:flex-row ">
  <img
    className="h-30 w-auto rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    src="https://i.postimg.cc/NF37r2yt/lets.webp"
    alt="" />
  <div className="flex flex-col justify-start p-6">
    <h5
      className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-500">
    ― Steve Maraboli
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-900">
    “Rename your “To-Do” list to your “Opportunities” list. Each day is a treasure chest filled with limitless opportunities; take joy in checking many off your list.”
    </p>

  </div>
</div>
</div>
            {/* break */}
            {/* <div className="flex items-center justify-center py-2 md:py-5 px-5">
              <p className='flex items-center font-light pr-5 shadow-xl rounded-xl w-fit p-5  bg-white italic max-w-3xl text-[#0055D1] text-sm'>
              <UserCircleIcon className={`inline h-10 w-10 text-[#0055D1] mr-1 ${loading && "animate-spin"}`}/>
              {suggestion && !loading? suggestion:"GPT is sumamrizing your tasks for the day..."}
              
              </p>
        </div> */}
        </>
  );
}

export default Header