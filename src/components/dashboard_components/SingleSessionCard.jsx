import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
 { paper: 'Paper 1', averageScore: 75 },
 { paper: 'Paper 2', averageScore: 82 },
 { paper: 'Paper 3', averageScore: 48 },
 { paper: 'Paper 4', averageScore: 80 },

];
export default function SingleSessionCard() {
 return (
  <div className='px-4 py-4 relative bg-white rounded-md w-full border-pale_blue border'>
   <div className=' flex items-center gap-4'>
    <h1 className='size-20 rounded-md bg-rose-300 flex items-center justify-center text-4xl text-white'>
     MN
    </h1>
    <div className=''>
     <h5 className='font-font_palanquin font-semibold tracking-wider text-lg'>
      A1-ECAT-2023
     </h5>
     <p className='flex items-center gap-2 text-slate_gray font-semibold'><span className='font-normal'>Students:</span> 48</p>
     <span className='absolute bottom-0 right-0 bg-pale_blue px-2 '>20-Jul-2023</span>
    </div>
   </div>
   <div className='w-full  my-6'>
    <ResponsiveContainer
     width='100%'
     height={180} >
     <LineChart
      data={data}
      margin={{ top: 10, right: 30, left: -30, bottom: 5 }}>
      <XAxis
       axisLine={false}
       dataKey="paper"
       tick={{ fontSize: 12 }} />
      <YAxis
       axisLine={false}
       tick={{ fontSize: 12 }} />
      <Tooltip />
      <CartesianGrid
       stroke="#ddd"
       strokeDasharray="0 0"
       vertical={false} />
      <Line
       type="monotone"
       dataKey="averageScore"
       stroke="#0066FF"
       strokeDasharray="5 2"
       strokeWidth={2} />
     </LineChart>
    </ResponsiveContainer>
   </div>
  </div>
 )
}
