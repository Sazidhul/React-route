import React, { useState } from 'react';
import Url from './Url';
import { Menu, X } from 'lucide-react';




const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/home"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const NavBar = () => {

   const [open, setOpen] = useState(false);

      const links = navigationData.map(route => <Url key={route.id} route={route}></Url>)

   return (
      <nav className='flex justify-between mx-10'>
         <span className='flex' onClick={() => setOpen(!open)}>
            {
            open ? <X className='md:hidden'></X> :  
            <Menu className='md:hidden '/>
            
            }
            <ul className='md:hidden'>
               {links}
            </ul>
             
         <h3 className='ml-4'>My NavBar</h3>
         </span>
     
            <ul className='md:flex hidden'>
               {
                  links
               }
            </ul>
         <button>Sign In</button>
      </nav>
   );
};

export default NavBar;