import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { TableCellSimple, TableHeadingCell, TableBoolenCell, TableHeader } from '../index'
export default function Table({ row, heading }) {

   return (
      <div>
         <div className="flex flex-wrap mb-5 ">
            <div className="max-w-full  mb-6  mx-auto">
               <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-md bg-white  ">
                  <div className="relative flex flex-col min-w-0 break-words border shadow-sm bg-clip-border rounded-md overflow-hidden">
                     <TableHeader heading={'Detailed Result'} subHeading='Report of paper MDCAT-2024-week01' action='See All Papers' />
                     <div className="flex-auto block py-8 pt-6 px-9">
                        <div className="overflow-x-scroll">
                           <table className="w-full my-0 align-middle text-black border-neutral-200">
                              <thead className="align-bottom text-[12px]">
                                 <tr className="font-semibold text-[12px text-slate_gray font-font_palanquin">
                                    {
                                       heading.map((heading) => <TableHeadingCell value={heading.toUpperCase()} styles={{ width: '100px', textAlign: 'start' }} />)
                                    }
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
                                             <BiChevronRight className='icon border-primary_blue border rounded-full size-6' />
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
