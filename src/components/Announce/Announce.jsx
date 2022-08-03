import  { React, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function Announce() {
  const [announceStyle, setAnnounceStyle] = useState('bg-[#FEBD69] font-bold text-white flex items-center justify-center')

  const handleClose = (e) => {
    setAnnounceStyle(announceStyle + " hidden") /*display none use space*/
  }
  return (

    <div className={announceStyle}>
      <h2 className='text-[#232F3E]'>Hurry up 50% off Sale!</h2>
      <CloseIcon className='cursor-pointer text-red-900' onClick={handleClose} />
    </div>
  );
}

export default Announce;