import React from 'react'
import { MdOutlineSortByAlpha } from "react-icons/md";

export default function TableHeadingCell({ styles, value }) {
 const { width, textAlign } = styles
 return (

  <th className={`relative pb-3 pr-4 truncate text-${textAlign} `}>{value} <span className='absolute top-1 icon text-[12px] '><MdOutlineSortByAlpha /></span>  </th>


 )
}
