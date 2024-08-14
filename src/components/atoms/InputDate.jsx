
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux'


export default function InputDate({ handleClick, getTodayDate, value }) {
  const todayDate = getTodayDate()
  const dispatch = useDispatch()
  const handleOnClick = (e) => {

    if (todayDate > e.currentTarget.value) {
      toast.error('You cannot add Past Date')
      return
    }
    dispatch(handleClick(e.currentTarget.value))
  }
  return (
    <div className='input-container'>
      <input type="date" className='input date-no-icon' placeholder='due date' value={value === '' ? todayDate : value}
        onChange={(e) => handleOnClick(e)} />
    </div>
  )
}
