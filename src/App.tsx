import { useEffect, useState } from 'react'
import styled from 'styled-components';
import Header from './scenes/Header'
import dayTime from './images/mobile/bg-image-daytime.jpg'
import Main from './scenes/Main';

import DekstopDay from './images/desktop/bg-image-daytime.jpg'
import TablertDay from './images/desktop/bg-image-daytime.jpg'
import LocationProps from './components/GlobalInterface'
import axios from 'axios';
function App() {
  const [showTimeZone,setShowThimeZone] = useState(false)

  const [geoLocationData,setGeoLocatioData] =useState<LocationProps | null>(null);

  const APi = 'https://api.ipbase.com/v2/info?apikey=IZ4u80FeLgunnmMHZFlztdKicYJnTRUx0nO5Axos&ip=1.1.1.1'


useEffect(() => {
  axios
  .get(APi)
  .then((response) => {
    setGeoLocatioData(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log(geoLocationData);
},[])

  return (
    <Container>
      {showTimeZone ? '':(
        <Header/>
      )}
     
      <Main showTimeZone={showTimeZone} setShowThimeZone={setShowThimeZone} geoLocationData={geoLocationData}/>




    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
   height: 100vh;
   background-image: url(${dayTime});
   overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (min-width: 768px) {
    background-image: url(${TablertDay});
}
@media only screen and (min-width: 1440px) {
    background-image: url(${DekstopDay});
}
`


export default App
