import * as React from 'react'
// 1. import `ChakraProvider` component
import { ChakraProvider, Heading, Input, Button, Box, Text } from
'@chakra-ui/react'
import Message from "./message"

function App() {
 // 2. Use at the root of your app
 return (
 <ChakraProvider>
 <Heading>ChakraUI Heading</Heading>
 <Input placeholder='Basic usage' />
 <Button colorScheme='blue'>Button</Button>
 <Message></Message>
 </ChakraProvider>
 )
}
export default App;