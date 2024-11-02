import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import Email from './Email';
import './App.css'

// const NewComponent = () => {
//   return (
//     <div className="mt-6 text-center text-white">
//       <h2>Welcome!</h2>
//       <p>Your date of birth has been verified.</p>
//     </div>
//   );
// };

function App() {
  const [dob, setDob] = useState('');
  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleContinue = () => {
    if (dob) {
      setShowNewComponent(true); // Show the new component
    }
  };

  const handleDateChange = (e) => {
    setDob(e.target.value);
  };

  return (
    <>
    
        <div className='flex text-center items-center justify-center flex-col x min-h-screen'> 
          {!showNewComponent ? (
          <>
         
          <div className='logo flex justify-center items-center absolute top-32'>
           <span><HiOutlineDesktopComputer color='#32BBB8' className="text-2xl" /></span>
           <h2 className='text-white text-3xl  ml-2'><span className='text-[#32BBB8]'>Webinar</span>
           .gg</h2>
          </div>
          <div className='age space-y-6'>
           
            <h1 className='text-white font-bold text-2xl'>Verify Your Age</h1>
            <p className='text-gray-300'>Please confirm your age.This Data will not be stored</p>
            <div className='input flex flex-col space-y-6 items-center'>
              <input  type='date'
              value={dob} 
              onChange={handleDateChange}
       className='w-64 p-2 px-3 border-none  bg-[#193F6A] border border-transparent text-gray-200 rounded-xl' placeholder='Enter your Birth Year' />
              <button className={`text-white font-semibold ${dob ? 'bg-primary-Default hover:bg-primary-hover'  : 'bg-gray-500'} w-64 p-2 rounded-xl`}  onClick={handleContinue}>Continue</button>
            </div>
          </div>
        
      </>
          ):(
            <Email />
          )}
      
</div>




    </>
  )
}

export default App
