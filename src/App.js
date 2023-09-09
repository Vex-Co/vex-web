import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
      <div className="App">
      <header className="h-18 flex items-center justify-center bg-red-300">
        <p className="text-3xl font-bold">VEX.</p>
      </header>
      
      <Button colorScheme='teal' size='lg'>
        Button
      </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
