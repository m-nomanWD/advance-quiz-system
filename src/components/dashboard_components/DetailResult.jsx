import React from 'react'
import { Table } from '../index'
import { resultTableHeadings } from '../../constants/constants'
import { useSelector } from 'react-redux'

export default function DetailResult() {
  const { paperResult } = useSelector((store) => store.resultSlice)
  return (
    <div className='p-6 max-w-full 
  max-sm:w-[85vw]
  sm:w-[85vw]
  max-md:w-[65vw]
  md:w-[68vw]
  '>
      <Table
        heading={resultTableHeadings}
        row={paperResult.activeSingleResultData} />

    </div>
  )
}
