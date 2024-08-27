import React from 'react'
import { MdOutlineSortByAlpha } from "react-icons/md";

export default function TableHeadingCell({ styles, value }) {
 const { width, textAlign } = styles
 return (
  <th className={`pb-3 pr-4 truncate text-${textAlign} min-w-[${width}]`}>{value}</th>
 )
}
