import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'
import { TiSortAlphabetically, TiArrowUnsorted, TiSortNumerically } from "react-icons/ti";
import { TableCellSimple, TableHeadingCell, TableBoolenCell, TableHeader } from '../index'
import { sortActiveResult } from '../../features/resultSlice';
export default function Table({ row, heading }) {
   const [isAcc, setIsAcc] = React.useState(true)
   const dispatch = useDispatch()
   const handleSorting = (type) => {
      setIsAcc(!isAcc)
      dispatch(sortActiveResult({ type: type, isAcc: isAcc }))

   }
   return (
      <div>
         <div className="flex flex-wrap mb-5 ">
            <div className="max-w-full  mb-6  mx-auto">
               <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-md bg-white  ">
                  <div className="relative flex flex-col min-w-0 break-words border shadow-sm bg-clip-border rounded-md overflow-hidden">
                     <TableHeader heading={'Detailed Result'} subHeading='Report of paper MDCAT-2024-week01' action='See All Results' />
                     <div className="flex-auto block py-8 pt-6 px-9">
                        <div className="overflow-x-scroll">
                           <table className="w-full my-0 align-middle text-black border-neutral-200">
                              <thead className="text-[12px] ">
                                 <tr className="font-semibold text-[12px text-slate_gray font-font_palanquin  ">
                                    <th className={`relative pb-3 pr-4 truncate text-start min-w-[60px]`}>  SR# </th>
                                    <th className={`relative pb-3 pr-4 truncate text-start min-w-[120px]`}>  STUDENT NAME <span className='icon text-[16px] absolute mt-[2px] ml-1 ' onClick={() => handleSorting('SORT_BY_NAME')}><TiSortAlphabetically /></span> </th>
                                    <th className={`relative pb-3 pr-4 truncate text-start min-w-[100px]`}>  	STATUS <span className='icon text-[14px] absolute mt-[3px] ml-1' onClick={() => dispatch(handleSorting('SORT_BY_STATUS'))}><TiArrowUnsorted /></span> </th>
                                    <th className={`relative pb-3 pr-4 truncate text-start min-w-[120px]`} onClick={() => dispatch(handleSorting('SORT_BY_CORRECT'))}>  CORRECT ANS <span className='icon cursor-pointer text-[16px] absolute mt-[1px] ml-1'><TiSortNumerically /></span></th>
                                    <th className={`relative pb-3 pr-4 truncate text-start min-w-[120px]`} > OBT MARKS</th>
                                    <th className={`relative pb-3 pr-4 truncate text-start min-w-[100px]`}> TOTAL MARKS</th>
                                    <th className={`relative pb-3 pr-4 truncate text-start min-w-[100px]`}> DETAIL</th>
                                 </tr>

                              </thead>
                              <tbody>
                                 {
                                    row.map((row) => {
                                       const {
                                          studentName,
                                          status,
                                          totalMarks,
                                          obtainedMarks,
                                          testNo,
                                          correctAnswers
                                       } = row
                                       return <tr className="border-b  last:border-b-0 text-[13px]">
                                          <TableCellSimple value={testNo} />
                                          <TableCellSimple value={studentName} />
                                          <TableBoolenCell value={status} />
                                          <TableCellSimple value={correctAnswers} />
                                          <TableCellSimple value={obtainedMarks} />
                                          <TableCellSimple value={totalMarks} />

                                          <td className="py-3 pr-0 text-start ">
                                             <Link to='noman-khan/125'>
                                                <BiChevronRight className='icon border-primary_blue border rounded-full size-6' />
                                             </Link>
                                          </td>

                                       </tr>
                                    })
                                 }

                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
