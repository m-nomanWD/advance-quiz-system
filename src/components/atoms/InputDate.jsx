
import { useDispatch } from 'react-redux'


export default function InputDate({ handleClick, getTodayDate }) {
  const dispatch = useDispatch()
  const handleOnClick = (e) => {
    const todayDate = getTodayDate()
    if (todayDate > e.currentTarget.value) {
      alert('you cannot add past date')
    }
    dispatch(handleClick(e.currentTarget.value))
  }
  return (
    <div className='input-container'>
      <input type="date" className='input date-no-icon' placeholder='due date'
        onChange={(e) => handleOnClick(e)} />
    </div>
  )
}
