import { FiLogOut, FiBell } from "react-icons/fi";
import { logoBlue, avatar } from '../../assets'

export default function NavDashboard() {
 return (
  <nav className='shadow-md  shadow-pale_blue' >
   <div className='flex justify-between items-center container w-full'>
    <div className=''>
     <img src={logoBlue} alt="logo" width={240} className='object-cover' />
    </div>
    <div className="flex justify-center items-center gap-6">
     <div className="flex items-center justify-center gap-4 ">
      <span className="icon">
       <FiLogOut />
      </span>
      <span className="icon"><FiBell /></span>
     </div>
     <div className='w-12 h-12 border border-light_gray rounded-full'>
      <img src={avatar} alt="avatar" className='object-cover w-full h-full rounded-full' />
     </div>
    </div>
   </div>
  </nav>
 )
}
