import React from 'react';

function PaperHeader({ paperHeadInfo = {} }) {
 const totalQuestions = paperHeadInfo.totalQuestions || 0;
 const testTitle = paperHeadInfo.testTitle || 'The Title of the Paper is Goes here';
 const paperType = paperHeadInfo.paperType || 'Type of the paper is here';
 const duration = paperHeadInfo.duration || 'setDuration';
 const note = paperHeadInfo.note || 'During the Paper Closing, Toggling and minimizing will be disabled and not allowed. If you try to do this the paper once close would be considered as cancel.';

 return (
  <section className='w-full max-md:border-t-2 p-6 bg-pale_blue font-font_palanquin '>
   <h1 className='font-bold flex items-center flex-col text-3xl  '>{testTitle}</h1>
   <div className='flex items-center justify-between my-10 max-sm:flex-col max-sm:items-start'>
    <p>Total Question : <span className='font-bold text-coral_red'>{totalQuestions}</span></p>
    <h3 className='font-bold'>{paperType}</h3>
    <p>Total Time : <span className='font-bold text-coral_red'>{duration}</span></p>
   </div>
   <div className='border-y border-light_gray py-2'>
    <p className='font-semibold text-coral_red'>Note : {note}</p>
   </div>
  </section>
 );
}

export default PaperHeader;
