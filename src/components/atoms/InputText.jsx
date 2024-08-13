import { useDispatch } from 'react-redux'
import { useState } from 'react'

export default function InputText({ placeholder, value, handleChange, numFlag }) {
 const [isError, setIsError] = useState(false)
 const dispatch = useDispatch()
 const handleOnChange = (e) => {
  if (!numFlag) {
   dispatch(handleChange(e.currentTarget.value))
  }
  else {
   dispatch(handleChange(e.currentTarget.value.replace(/[^0-9]/g, '')))
  }
 }

 return (
  <div className='input-container  '>
   <input type="text" placeholder={placeholder} className={`outline-none w-full px-4 h-10 rounded-md border  focus:border-primary_blue text-sm focbg-pale_blue ${isError ? 'border-rose-600' : ''} `} value={value} onChange={(e) => handleOnChange(e)
   } />
  </div>
 )
}
