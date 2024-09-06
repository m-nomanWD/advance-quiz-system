import React from 'react'
import { Link } from 'react-router-dom'
export default function TableHeader({ heading, subHeading, action }) {
 return (
  <header className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent font-font_palanquin border-b  ">
   <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
    <span className="mr-3 font-semibold text-dark text-[16px] tracking-wide">{heading}</span>
    <span className="mt-1  text-slate_gray text-[14px]">{subHeading}</span>
   </h3>
   <Link to='all-papers'>
    <div className="relative flex flex-wrap items-center my-2">
     <button className="inline-block text-[12px] font-medium leading-normal text-center  cursor-pointer rounded-2xl  text-black py-2 px-5 bg-pale_blue"> {action} </button>
    </div>
   </Link>
  </header>
 )
}
