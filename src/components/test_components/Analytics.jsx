import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { sessions } from '../../constants/constants';
import { calculateAverages } from '../../lib/formateData';

const primaryBlue = '#0066FF';
const colorShades = [
 primaryBlue,
 'rgba(0, 102, 255, 0.9)', // 80% opacity
 'rgba(0, 102, 255, 0.7)', // 60% opacity
 'rgba(0, 102, 255, 0.5)', // 40% opacity
 'rgba(0, 102, 255, 0.3)'  // 20% opacity
];

const Results = () => {
 const chartData = sessions.map(session => {
  const averages = calculateAverages(session);
  return {
   name: session.name,
   ...averages,
  };
 });

 return (
  <div className='md:min-w-80 min-w-full card py-4 '>
   <header className='card-header px-4'>
    <h3 className='pb-'>Result Analytics</h3>
   </header>
   <div className='px-4'>
    <ResponsiveContainer width="100%" height={150}>
     <LineChart
      data={chartData}
      margin={{ top: 20, right: 5, left: -20, bottom: 5 }}
     >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />


      {Object.keys(chartData[0]).filter(key => key !== 'name').map((paper, index) => (
       <Line
        key={paper}
        type="monotone"
        dataKey={paper}
        stroke={colorShades[index % colorShades.length]}
        dot={1} // Hide dots on the line

        strokeWidth={2} // Adjust line thickness
        strokeDasharray="4 2" // Make the line dotted // Adjust line thickness
       />
      ))}
     </LineChart>
    </ResponsiveContainer>
   </div>
  </div>
 );
};

export default Results;
