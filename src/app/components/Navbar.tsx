import { Search } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Settings } from 'lucide-react';
import { UserRoundPen } from 'lucide-react';

const Navbar = () => {
  return (
    <header className='h-16 py-3 border-b-2 bg-white justify-around mx-auto hidden md:hover md:flex'>
<h3 className='text-3xl font-bold text-blue-600'>MORENT</h3>
        <div className='flex border rounded-full w-96 q  justify-around h-10 px-3 items-center'>   
            <div> <Search /> </div>
             <input type='search' placeholder='Search something here' className=' h-8 w-full border border-white text-[12px] ' ></input>
            <div> <SlidersHorizontal /></div>
         </div>
<div className='space-x-4 h-10 flex'>
         <div className=' flex border rounded-full w-10 justify-center items-center '> <Heart/>  </div>
         <div className=' flex border rounded-full w-10 justify-center items-center '> <Bell />  </div>
         <div className=' flex border rounded-full w-10 justify-center items-center '> <Settings />  </div>
         <div className=' flex border rounded-full w-10 justify-center items-center '> <UserRoundPen />  </div>
         </div>       
    </header>
  )
}

export default Navbar