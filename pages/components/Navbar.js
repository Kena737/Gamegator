import { Search, ChevronDown } from 'react-iconly'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 bg-[#05060f] text-white">
      <div>
        <Link href='/'>
          <button>
            <h1 className="text-3xl font-bold">GAMEGATOR</h1>
          </button>
        </Link>
      </div>
      <div className='flex space-x-5'>
        <Link href='/'><button className='p-2 px-4 text-white bg-[#0f1022] hover:bg-[#141731] transition-colors rounded-lg text-lg'>Home</button></Link>
        <Link href='/Game'><button className='p-2 px-4 text-white bg-[#0f1022] hover:bg-[#141731] transition-colors rounded-lg text-lg flex'>Game <span className='relative top-[5px] left-1'><ChevronDown set="light" primaryColor="white" size={17}/></span></button></Link>
        <Link href='/News'><button className='p-2 px-4 text-white bg-[#0f1022] hover:bg-[#141731] transition-colors rounded-lg text-lg'>News</button></Link>
        <Link href='/Giveaway'><button className='p-2 px-4 text-white bg-[#0f1022] hover:bg-[#141731] transition-colors rounded-lg text-lg'>Giveaway</button></Link>
      </div>
      <div className='flex space-x-5'>
        <div className="flex space-x-3 text-white p-2 rounded-lg bg-[#0a0c1b]">
           <Search set="light" primaryColor="white" size={24}/>
        </div>
        <div className='flex space-x-3'>
          <Link href='/login'><button className='font-extrabold px-4 py-2 rounded-lg ' >Login</button></Link>
          <Link href='/signup'><button className='bg-blue-700 hover:bg-blue-800 shadow-lg font-extrabold px-4 py-2 rounded-lg '>Create Account</button></Link>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
