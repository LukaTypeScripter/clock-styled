import { useState } from 'react'
import styled from 'styled-components';
import Header from './scenes/Header'
import dayTime from './images/mobile/bg-image-daytime.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
     <Header/>





    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
   height: 100vh;
   background-image: url(${dayTime});
   background-repeat: no-repeat;
   background-size:100%;
`


export default App
