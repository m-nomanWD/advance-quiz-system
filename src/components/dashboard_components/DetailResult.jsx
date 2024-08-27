import React from 'react'
import { Table } from '../index'
import { studentResults, resultTableHeadings } from '../../constants/constants'

export default function DetailResult() {

 return (
  <div className='p-6 max-w-full 
  max-sm:w-[85vw]
  sm:w-[85vw]
  max-md:w-[65vw]
  md:w-[68vw]
  '>
   <Table
    heading={resultTableHeadings}
    row={studentResults} />

  </div>
 )
}
