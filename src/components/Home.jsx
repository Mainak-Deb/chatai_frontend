import React, { useState } from 'react'


const Home = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('Google');
  const [workfunction, setworkfunction] = useState('Google');

  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
  };

  return (
    <div>
      <h1  className='text-4xl m-4 border-4 text-white bg-black border-blue-400 rounded-lg'>INTERRA AI</h1>
      <div className='w-[80vw] m-[10vw] bg-gray-300 rounded-lg p-2 mt-4 mb-0 flex flex-row  justify-around'>
      <label htmlFor="platformSelect">Choose platform:</label>
        
          <select
            id="platformSelect"
            value={selectedPlatform}
            onChange={handlePlatformChange}
          >
            <option value="OpenAI">OpenAI</option>
            <option value="Google">Google</option>
          </select>
      </div>
      <div className='w-[80vw] m-[10vw] border bordder-black rounded-lg p-2 mb-4 mt-0 flex flex-row font-bold justify-center'>
      {selectedPlatform}
      </div>
      <div className='w-[80vw] m-[10vw] bg-blue-200 rounded-lg p-2 mt-4 mb-0 flex flex-col  justify-around'>
      <label className='p-2'  htmlFor="platformSelect">Choose Function</label>
        
          <select
            id="platformSelect"
            className='p-2 bg-black text-white'
            value={selectedPlatform}
            onChange={handlePlatformChange}
          >
            <option className='text-center p-2' value="Code_Generation">Code Generation</option>
            <option className='text-center p-2' value="Code_Completion">Code Completion</option>
            <option className='text-center p-2' value="Code_Chat">Code Chat</option>
            <option className='text-center p-2' value="Testcase_Generation">Testcase_Generation</option>
          </select>
      </div>
    </div>
  )
}

export default Home;