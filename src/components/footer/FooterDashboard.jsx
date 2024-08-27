import { FaRegCopyright } from "react-icons/fa";

export default function FooterDashboard() {
 return (
  <footer className=" flex items-center  ml-16  md:ml-56 justify-center py-4">
   <div className="flex items-center justify-center  ">
    <p className="text-slate_gray font-semibold font-font_montserrat text-md tracking-widest">  All Right Reserved</p> <span><FaRegCopyright className="text-slate_gray text-[12px]" /></span>
   </div>
  </footer>
 )
}
