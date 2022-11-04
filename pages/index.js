import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/Navbar'
import { Search, ChevronDown } from 'react-iconly'
export default function Home() {
  return (
    <div className="bg-[#16182b] h-[100vh] text-[#ddd]">
      <div className='flex flex-col items-center mt-20'>
        <h1 className='text-6xl my-10 text-[#ebebeb] font-black'>Hello Gamer </h1>
        <div className='flex items-center w-[37rem] shadow-lg shadow-[#0a0c1bc2]'>
            <div className='rounded-l-lg bg-[#0a0c1b] h-[42px] flex items-center px-4'>
              <Search set="light" primaryColor="white" size={23} />
            </div>
            <div className='w-[37rem]'>
              <input type="search" name="search" id="search" placeholder='What are you looking for today?' className='py-3 px-2 w-full rounded-r-lg bg-[#0a0c1b]' />
          </div>
        </div>
      </div>
    </div>
  )
}
