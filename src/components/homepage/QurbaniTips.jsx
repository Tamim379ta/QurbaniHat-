import React from 'react';

const QurbaniTips = () => {
  return (
    <div className='bg-base-200 pb-10'>

      <div className='container mx-auto'>
        <h1 className='text-center text-3xl font-bold'>Qurbani Tips</h1>
        <p className='text-center px-5'>A small act of sacrifice that brings big lessons of faith, compassion, and sharing.</p>


        <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-10 p-5'>

          <div className='group p-5 bg-white border border-blue-950 shadow-2xl rounded-2xl hover:scale-105 duration-300'>
            <h1 className='text-2xl font-semibold group-hover:text-blue-900'>🕌 Qurbani Importance (গুরুত্ব)</h1>
            <p className='my-2 text-taupe-400'>Qurbani is an important act of worship during Eid al-Adha. It shows obedience to Allah and reminds us to follow His commands sincerely.</p>
          </div>
          <div className='group p-5 bg-white border border-blue-950 shadow-2xl rounded-2xl hover:scale-105 duration-300'>
            <h1 className='text-2xl font-semibold group-hover:text-blue-900'>🌙 Significance (তাৎপর্য)</h1>
            <p  className='my-2 text-taupe-400'>It comes from the story of Prophet Ibrahim (AS), who was ready to sacrifice what he loved most for Allah. So, Qurbani teaches sacrifice, faith, and trust in Allah.</p>
          </div>
          <div className='group p-5 bg-white border border-blue-950 shadow-2xl rounded-2xl hover:scale-105 duration-300'>
            <h1 className='text-2xl font-semibold group-hover:text-blue-900'>❓ Why we do Qurbani (কেন করি)</h1>
            <p  className='my-2 text-taupe-400'>We do Qurbani to please Allah, share meat with family and the poor, and learn generosity and humility.</p>
          </div>
        </div>
      </div>



    </div>
  );
};

export default QurbaniTips;