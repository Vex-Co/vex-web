import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider, Image } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        
        <nav class="fixed top-0 h-20 w-full flex justify-between items-center text-white">
          <div>
            <img src='../public/images/whiteLogo.png'/>
          </div>  
          <div>
            <ul className='flex text-md font-semibold px-10 space-x-5'> 
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>  
        </nav>
        <main className='w-full overflow-hidden'>
          <div className='bg-gradient-to-r from-black to-[#160b35] w-[200%] ml-[-50%] h-[50vw] rounded-b-[100%] text-white pl-[50%]'>
            <div className='pt-20 px-10 text-white text-xl'>
              VEX
            </div>
          </div>
        </main>
      </div>
    </ChakraProvider>
  );
}

export default App;
