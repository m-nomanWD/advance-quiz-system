import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

export default function SidebarDashboard({ links }) {
 const [toggle, setToggle] = useState(true);
 const [width, setWidth] = useState(window.innerWidth);

 useEffect(() => {
  const handleResize = () => {
   setWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);
  setToggle(width >= 760);
  return () => {
   window.removeEventListener('resize', handleResize);
  };
 }, [width]);

 console.log(`Width: ${width}px`);

 return (
  <aside className={`flex min-h-full relative w-fit py-2 transition-all duration-300 z-40  ${toggle ? 'min-w-56 ' : ''}`}>
   <div className={`md:hidden ${toggle ? 'fixed top-[72px] container mx-auto left-56  w-full min-h-svh bg-gray-700 opacity-55 -z-30 ' : ""}`}>

   </div>
   <div className="py-2 w-16 z-10 flex flex-col items-center gap-7">
    <header className="text-white font-bold scale-125 mr-2 cursor-pointer" onClick={() => setToggle(!toggle)}>
     <RxHamburgerMenu />
    </header>

    {/* Sidebar icons */}
    {
     links.map((link, index) => (
      <li key={index} className="relative text-white font-bold text-xl group">
       <Link to={link.link}>
        <link.icon />
       </Link>
       {!toggle && (
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-max bg-pale_blue text-primary_blue text-sm font-light py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
         {link.label}
         <span className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full h-0 w-0 border-y-8 border-y-transparent border-r-8 border-r-pale_blue "></span>
        </div>
       )}
      </li>
     ))
    }
   </div>

   <div className={`py-[16px] h-full flex flex-col gap-6 absolute bg-primary_blue transition-all duration-300 overflow-hidden top-0 ${toggle ? 'translate-x-full -left-20 w-36' : '-translate-x-full left-1 -z-10 opacity-0'}`}>
    <header className="opacity-0 mt-[2px]">
     <RxHamburgerMenu />
    </header>

    {/* Sidebar links */}
    {
     links.map((link, index) => (
      <li key={index} className="font-bold font-font_palanquin">
       <Link to={link.link}>
        {link.label}
       </Link>
      </li>
     ))
    }
   </div>
  </aside>
 );
}
