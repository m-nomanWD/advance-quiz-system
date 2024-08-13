import { useSelector } from "react-redux";
import { GoDot, GoDotFill } from "react-icons/go";
import toast from "react-hot-toast";
import { Button, PaperHead } from '../index'
import { useState } from "react";


export default function PaperToolbar() {

  const [fillDot, setFillDot] = useState(false)
  const handleClickNext = (value) => {
    value.preventDefault()
    if (testTitle === '' || paperType === '' || totalQuestions === '' || duration === '' || dueDate === '') {
      toast.error('please provide values')
    }
    else {
      setFillDot(true)
    }
  }
  const {
    testTitle,
    paperType,
    totalQuestions,
    duration,
    dueDate,
  } = useSelector((store) => store.setPaper)
  return (
    <aside className='w-80 py-4 max-md:w-full   '>
      <div className="">
        <header className={`flex justify-center gap-3 ${fillDot ? 'flex-row-reverse' : 'flex-row'}`}>
          <span className="relative ">

            <GoDotFill className="icon " />

          </span>
          <span>
            <GoDot className="icon" />
          </span>
        </header>
        <PaperHead />
        <div className="px-2 flex justify-between items-center">
          <Button label='Preview' />
          <Button label='Next' handleOnClick={handleClickNext} />
        </div>
      </div>
    </aside>
  )
}
