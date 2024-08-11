import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuestion } from '../../features/setPaperSlice';
import { Link } from 'react-router-dom';

export default function Navbar({ links, logo }) {
  const { testId } = useSelector((store) => store.setPaper)
  const dispatch = useDispatch()

  return (
    <nav className='bg-primary_blue '>
      <div className='flex justify-between container '>
        <div className='w-[240px] '>
          <img src={logo} alt="logo" className='object-cover ' />
        </div>
        <div className='flex items-center '>
          {
            links.map((link) => {
              return (
                <Link to={link.url}>
                  <li key={link.label}
                    onClick={() => dispatch(setQuestion())}>{link.label}
                  </li>
                </Link>)
            })
          }
        </div>
      </div>
    </nav>

  )
}
