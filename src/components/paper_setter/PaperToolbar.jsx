import { GoDot } from "react-icons/go";
import { InputText, Button } from '../index'
export default function PaperToolbar() {
 return (
  <aside className='w-80 py-4 max-md:w-full   '>
   <div className="">
    <header className="flex justify-center gap-3">
     <span><GoDot className="icon" /></span>
     <span><GoDot className="icon" /></span>
    </header>
    <form className="form rounded-md p-2 my-4 ">
     <div>
      <InputText placeholder='test title' />
     </div>
     <div className="flex gap-2 w-full ">
      <InputText placeholder='total marks' />
      <InputText placeholder='total questions' />
     </div>
     <div>
      <Button label='Next' />
     </div>
    </form>

   </div>
  </aside>
 )
}
