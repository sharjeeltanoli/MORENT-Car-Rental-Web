import { Search } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';
import { UserRoundPen } from 'lucide-react';

const MoblileNavbar = () => {
  return (
<header className= 'py-3 border-b-2 bg-white mx-auto h-36 md:hidden'>
    <div className='flex justify-around my-4'>
        <h3 className='text-2 xl font-bold text-blue-600'>MORENT</h3>
        <div className=' flex border rounded-full w-10 justify-center items-center '> <UserRoundPen />  </div>
    </div>
    <div className='flex justify-around my-4'>
    <div className='flex border rounded-full w-60 justify-between h-10 px-3 items-center'>   
            <div> <Search /> </div>
            <input type='search' placeholder='Search something here' className=' h-8 w-full border border-white text-[12px] ' ></input>
    </div>   
    <div className='flex border rounded-xl w-10 justify-center items-center '> <SlidersHorizontal /></div>   
    </div> 

</header>
  )
}

export default MoblileNavbar