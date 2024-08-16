import { useSelector } from "react-redux";
import { GoDot, GoDotFill, GoArrowLeft, GoArrowRight } from "react-icons/go";
import toast from "react-hot-toast";
import { Button, PaperHead, AddQuestionForm } from '../index'
import { useState } from "react";


export default function PaperToolbar() {

  const [fillDot, setFillDot] = useState(true)
  const handleClickNext = () => {
    if (testTitle === '' || paperType === '' || totalQuestions === '' || duration === '' || dueDate === '') {
      toast.error('please provide values')
    }
    else {
      setFillDot(true)
    }
  }
  const handleClickPrev = (value) => {
    setFillDot(false)
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
        <header className="flex justify-between items-center">
          <span className="w-9 " >
            {
              fillDot && <GoArrowLeft className="icon"
                onClick={handleClickPrev} />
            }
          </span>
          <div className={`flex justify-center gap-3 ${fillDot ? 'flex-row-reverse' : 'flex-row'}`}>
            <span className="relative ">
              <GoDotFill className="icon " />
            </span>
            <span>
              <GoDot className="icon"
              />
            </span>
          </div>
          <span className="w-9 ">
            {!fillDot && <GoArrowRight className="icon"
              onClick={handleClickNext} />}

          </span>
        </header>
        <div>
          {
            !fillDot && <PaperHead />
          }
          {
            fillDot && <div>
              <p className="font-font_palanquin text-slate_gray mt-4 -mb-5">Remaining questions to add: <span className="text-coral_red font-bold">{totalQuestions}</span></p>
              <AddQuestionForm />
            </div>
          }
        </div>


      </div>
    </aside>
  )
}
