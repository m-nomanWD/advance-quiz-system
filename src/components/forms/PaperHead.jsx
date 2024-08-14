import { useSelector } from "react-redux";
import { getTodayDate } from '../../lib/formateDate'
import { testTypes } from "../../constants/constants";
import { InputDate, InputSelect, InputText } from '../../components/index'
import {
  setTitle,
  setDuration,
  setTotalQuestions,
  setDueDate,
  setPaperType
} from "../../features/setPaperSlice";
export default function PaperHead() {

  const handleTitelChange = (value) => setTitle(value)
  const handleDurationChange = (value) => setDuration(value)
  const handleTotalQuestionsChange = (value) => setTotalQuestions(value)
  const handleTestType = (value) => setPaperType(value)
  const handleDueDate = (value) => setDueDate(value)

  const {
    testTitle,
    paperType,
    totalQuestions,
    duration,
    dueDate
  } = useSelector((store) => store.setPaper)

  return (
    <form className="form rounded-md  my-6 flex flex-col gap-1 ">

      <InputText
        placeholder='test title'
        value={testTitle}
        handleChange={handleTitelChange}
        numFlag={false} />

      <div className="flex gap-2 w-full ">
        <InputText
          placeholder='Duration'
          value={duration}
          handleChange={handleDurationChange}
          numFlag={true} />
        <InputText
          placeholder='total questions'
          value={totalQuestions}
          handleChange={handleTotalQuestionsChange} numFlag={true} />
      </div>

      <InputSelect
        options={testTypes}
        handleClick={handleTestType}
        value={paperType}
      />

      <InputDate
        handleClick={handleDueDate}
        getTodayDate={getTodayDate}
        value={dueDate}
      />

    </form>
  )
}
