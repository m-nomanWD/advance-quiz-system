import React from 'react'
import { SingleStudentStrip } from '../index'

export default function StudentsStrip() {
 return (
  <div className='card min-w-full'>
   <header className='card-header'>
    <h3 className='px-4 py-2'>Students Need Help</h3>
   </header>
   <div className='max-h-[292px] overflow-y-scroll scrollbar-custom'>
    <SingleStudentStrip />
    <SingleStudentStrip />
    <SingleStudentStrip />
    <SingleStudentStrip />
    <SingleStudentStrip />
    <SingleStudentStrip />
    <SingleStudentStrip />
    <SingleStudentStrip />
    <SingleStudentStrip />
   </div>
  </div>
 )
}
