import { SessionResultCard } from '../index'
const Results = () => {
 return (
  <div className='card min-w-[360px] sm:w-full '>
   <header className='card-header px-4 flex items-center justify-between py-4 rounded-md  '>
    <h3 className=''>
     Results
    </h3>
   </header>
   <div className='grid sm:grid-cols-2  grid-cols-1 p-4 gap-3 max-h-[292px] overflow-y-scroll scrollbar-custom'>
    <SessionResultCard colr='coral_red' />
    <SessionResultCard colr='pale_blue' />
    <SessionResultCard colr='light_gray' />
    <SessionResultCard colr='green' />
    <SessionResultCard colr='coral_red' />
    <SessionResultCard colr='pale_blue' />
    <SessionResultCard colr='light_gray' />
    <SessionResultCard colr='green' />
   </div>
  </div>
 );
};

export default Results;
