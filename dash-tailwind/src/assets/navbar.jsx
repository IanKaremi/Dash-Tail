import { Link } from 'react-router';
import { useState } from 'react';
function Navbar() {
  const [open, setOpen] = useState(false);

  function handleDropdown(){
    setOpen(!open)

  }
  return (
    <>
      <nav className="border-b border-b-gray-950 p-4 w-full bg-white font-semibold sm:overflow-x-hidden hidden sm:block dark:bg-black">
          <ol className="flex space-x-4 items-start mx-4">
              <li className="w-full text-left text-xl italic  text-green-400">MyCompany</li>
              <li>Dashboard</li>
              <li>Settings</li>
              <li>Profile</li>
              <li className="text-red-500"><Link to="/">Logout</Link></li>
          </ol>
      </nav>
      
      <nav className="shadow-md  w-full bg-white font-semibold sm:overflow-x-hidden sm:hidden block dark:bg-black">
          <div className="flex space-x-4 mx-4  items-center">
              <div className='w-[15px] m-0'><button onClick={handleDropdown}>{open ? "x" : "="}</button></div>
              <div className="w-full text-xl italic  text-green-400">MyCompany
               {open ?<ol className= 'text-gray-950 text-base not-italic transition-all duration-300 ease-in-out'>
                    <li>Dashboard</li>
                    <li>Settings</li>
                    <li>Profile</li>
                    <li className="text-red-500"><Link to="/">Logout</Link></li>
              </ol> :null}
                
              </div>
             
              
          </div>
      </nav>

    </>
  )
}




export default Navbar;