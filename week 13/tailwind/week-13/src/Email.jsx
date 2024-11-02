import React ,{useState}from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import Otp from './Otp';


function Email() {
    const [email, setEmail] = useState('');
    const [showNewComponent, setShowNewComponent] = useState(false);

    const handleDateChange = (e) => {
        setEmail(e.target.value);
      };

      const handleContinue = () => {
        if (email) {
          setShowNewComponent(true); // Show the new component
        }
      };
  return (
    
    <>
           {!showNewComponent ? (
            <>
    <div className='logo flex justify-center items-center absolute top-32'>
 
    <span><HiOutlineDesktopComputer color='#32BBB8' className="text-2xl" /></span>
           <h2 className='text-white text-3xl  ml-2'><span className='text-[#32BBB8]'>Webinar</span>
           .gg</h2>
          </div>
          <div className='age space-y-6'>
           
            <h1 className='text-white font-semibold text-2xl'>Let's gets Started </h1>
            
            <div className='input flex flex-col space-y-6 items-center'>
              <input  type='text'
            //   value={dob} 
              onChange={handleDateChange}
       className='w-64 p-2 px-3 border-none  bg-[#193F6A] border border-transparent text-gray-200 rounded-xl' placeholder='Enter your Email' />
            <button className={`text-white font-semibold ${email ? 'bg-primary-Default hover:bg-primary-hover'  : 'bg-gray-500'} w-64 p-2 rounded-xl`} onClick={handleContinue}>Continue</button>

            </div>
          </div>
          </>
           ):(
                <Otp/>
           )}
    </>

  )
}

export default Email