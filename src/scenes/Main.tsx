import React, { useState } from 'react'
import styled from 'styled-components'
import { StylesTheme } from "../components/styled";
import arrowDown from '../images/desktop/icon-arrow-down.svg'
import LocationProps from '../components/GlobalInterface'
interface Props {
    showTimeZone: boolean
  }
  interface props {
    setShowThimeZone:React.Dispatch<React.SetStateAction<boolean>>,
    showTimeZone:boolean
    geoLocationData:LocationProps | null
  }

  
export default function Main({setShowThimeZone,showTimeZone,geoLocationData}:props) {

  const handleShow = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
e.preventDefault()
setShowThimeZone(!showTimeZone)
  }
//   if (!geoLocationData) {
//     return <div>Loading...</div>;
//   }

  
    return (
        <>
   <MainCont showTimeZone={showTimeZone}>
    <HeloCont>
    <DynamicChange>
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.78 19.417c.594 0 1.083.449 1.146 1.026l.006.125v1.842a1.152 1.152 0 01-2.296.125l-.007-.125v-1.842c0-.636.516-1.151 1.152-1.151zM6.382 17.18a1.15 1.15 0 01.09 1.527l-.09.1-1.302 1.303a1.152 1.152 0 01-1.718-1.528l.09-.1 1.302-1.302a1.15 1.15 0 011.628 0zm12.427 0l1.303 1.303a1.15 1.15 0 11-1.628 1.627L17.18 18.81a1.15 1.15 0 111.628-1.628zM11.781 5.879a5.908 5.908 0 015.901 5.902 5.908 5.908 0 01-5.901 5.902 5.908 5.908 0 01-5.902-5.902 5.908 5.908 0 015.902-5.902zm10.63 4.75a1.151 1.151 0 110 2.303h-1.843a1.151 1.151 0 110-2.303h1.842zm-19.418 0a1.151 1.151 0 01.126 2.296l-.125.007H1.15a1.151 1.151 0 01-.125-2.296l.125-.007h1.842zm1.985-7.268l.1.09 1.303 1.302a1.151 1.151 0 01-1.528 1.718l-.1-.09L3.45 5.08A1.15 1.15 0 014.978 3.36zm15.133.09c.45.449.45 1.178 0 1.628L18.808 6.38a1.151 1.151 0 11-1.628-1.628l1.303-1.303c.449-.449 1.178-.449 1.628 0zM11.781 0c.636 0 1.151.515 1.151 1.151v1.843a1.152 1.152 0 01-2.303 0V1.15C10.63.515 11.145 0 11.781 0z" fill="#FFF" fill-rule="nonzero"/></svg>
    </DynamicChange>
    <Goods>
    GOOD MORNING
    </Goods>
    </HeloCont>
    {/**time cont */}
    <TimeCont>
<Time>11:37</Time>
<TimeZone>BST</TimeZone>
    </TimeCont>

<Location>IN LONDON, UK</Location>
<MoreCont onClick={handleShow}>
<MoreSpan>{showTimeZone ? 'less' : 'more'}</MoreSpan>
<ArrowCont>
<Arrow src={arrowDown} showTimeZone={showTimeZone}/>
</ArrowCont>
</MoreCont>

   </MainCont>
{showTimeZone && (
    <ShowCont>
    <InsideCont>
        {/**curent timzezone */}
       <Wrapper>
    <CurrentTimezone>
    <CurrentStyles>CURRENT TIMEZONE</CurrentStyles>
    <CurrentBoldStyles>Europe/London</CurrentBoldStyles>
    </CurrentTimezone>


    {/**day of the year*/}
    <CurrentTimezone>
    <CurrentStyles>CURRENT TIMEZONE</CurrentStyles>
    <CurrentBoldStyles>295</CurrentBoldStyles>
    </CurrentTimezone>
    </Wrapper> 
  {/**day of the week*/}
  <Wrapper2> 
  <CurrentTimezone>
    <CurrentStyles>CURRENT TIMEZONE</CurrentStyles>
    <CurrentBoldStyles>5</CurrentBoldStyles>
    </CurrentTimezone>


    {/**week number*/}
    <CurrentTimezone>
    <CurrentStyles>CURRENT TIMEZONE</CurrentStyles>
    <CurrentBoldStyles>42</CurrentBoldStyles>
    </CurrentTimezone>
    </Wrapper2> 
    </InsideCont>
    </ShowCont>
    )}
    </>
  )
}


const MainCont = styled.main<Props>`
    width: 100%;

    margin-left: 26px;
    margin-top: ${(p:Props) => p.showTimeZone ? '99px':'227px'};

    @media only screen and (min-width: 768px) {
    margin-left: 64px;

}

@media only screen and (min-width: 1440px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 56px;
  margin-left:165px;
}
`
const HeloCont = styled.div`
    display: flex;
    column-gap: 16.67px;

`
const DynamicChange = styled.span`
    
`
const Goods = styled.span`
    font-size: 15px;
line-height: 25px;
font-weight: ${StylesTheme.fontWeigths.lowWeigth};
color: ${StylesTheme.colors.white};
@media only screen and (min-width: 1440px) {
    font-size: 18px;
line-height: 28px;
letter-spacing:3.6px;
}

@media only screen and (min-width: 768px) {
    font-size: 20px;
line-height: 28px;
letter-spacing:4px;
}

`

const TimeCont = styled.div`
    display:flex;
    margin-top: 16px;

`
const Time = styled.h2 `
    font-size: 100px;
line-height: 100px;
font-weight: ${StylesTheme.fontWeigths.mediumWeigth};
letter-spacing: -2.5px;
color: ${StylesTheme.colors.white};


@media only screen and (min-width: 1440px) {
    font-size: 200px;
line-height: 200px;
letter-spacing: -5px;
}

@media only screen and (min-width: 768px) {
    font-size: 175px;
line-height: 175px;
letter-spacing: -4.375px;
}
`
const TimeZone = styled.span`
    font-size: 15px;
line-height: 28px;
text-transform: uppercase;
margin-top:4rem;
color: ${StylesTheme.colors.white};


@media only screen and (min-width: 1440px) {
    font-size: 40px;
line-height: 28px;
}

@media only screen and (min-width: 768px) {
    font-size: 32px;
line-height: 28px;
}

`

const Location = styled.p `
    font-size: 15px;
line-height: 28px;
font-weight: ${StylesTheme.fontWeigths.mediumWeigth};
letter-spacing: 3px;
text-transform: uppercase;
color: ${StylesTheme.colors.white};
margin-top: 16px;
@media only screen and (min-width: 1440px) {
    font-size: 24px;
line-height: 28px;
letter-spacing: 4.8px;
}

@media only screen and (min-width: 768px) {
    font-size: 18px;
line-height: 28px;
letter-spacing: 3.6px;
}
`
const MoreCont = styled.div`
  width: 115px;
  background-color: ${StylesTheme.colors.white};
  display: flex;
  justify-content: center;
  column-gap: 15px;
  padding-top: 3px;
  padding-bottom: 4px;
  border-radius: 28px;

  @media only screen and (min-width: 1440px) {
    width: 146px;
    column-gap: 25px;
}

@media only screen and (min-width: 768px) {
    width: 146px;
    column-gap: 25px;

}
`
const MoreSpan = styled.span`
    font-size: 12px;
line-height: 14px;
letter-spacing: 3.75px;
text-transform: uppercase;
mix-blend-mode: normal;
opacity: 0.5;
margin-top: 10px;
margin-left: 15px;
`
const Arrow = styled.img<Props>`
    transform: ${props => props.showTimeZone ? 'rotate(180deg)' : 'rotate(0deg)'};
    margin-left: 9px;
    margin-top: 12px;
`
const ArrowCont = styled.div`
    height: 32px;
width: 32px;
border-radius: 50%;
background-color: ${StylesTheme.colors.graishBlack};
`
const ShowCont = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.75);
backdrop-filter: blur(20.3871px);

`

const CurrentTimezone = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    @media only screen and (min-width: 1440px) {
   flex-direction:column;
}

@media only screen and (min-width: 768px) {
    flex-direction:column;

}



`


const InsideCont = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    margin-left: 26px;
    margin-right: 26px;
    @media only screen and (min-width: 1440px) {
        flex-direction: unset;
        flex-wrap:wrap;
       
        gap: 40px;
        margin-top: 119px;
        margin-left: 64px;
}

@media only screen and (min-width: 768px) {
    flex-direction: unset;
        flex-wrap:wrap;
        
        gap: 60px;
        margin-top: 119px;
        margin-left: 64px;
        justify-content: center;
}
    
`
const CurrentStyles = styled.p`
    font-size: 10px;
line-height: 28px;
letter-spacing: 2px;
text-transform: uppercase;
color: ${StylesTheme.colors.graishBlack};
font-weight: ${StylesTheme.fontWeigths.mediumWeigth};

@media only screen and (min-width: 1440px) {
    font-size: 15px;
line-height: 28px;
}

@media only screen and (min-width: 768px) {
    font-size: 13px;
line-height: 28px;
}

`
const CurrentBoldStyles = styled.b`
    font-size: 20px;
line-height: 24px;
font-weight: ${StylesTheme.fontWeigths.mediumWeigth};
color: ${StylesTheme.colors.graishBlack};

@media only screen and (min-width: 1440px) {
    font-size: 56px;
line-height: 68px;
}

@media only screen and (min-width: 768px) {
    font-size: 40px;
line-height: 48px;
}
`
const Wrapper = styled.div`
    @media only screen and (min-width: 1440px) {
  max-width: 250px;
  position: relative;
  right: 200px;
}
`
const Wrapper2 = styled.div`
    @media only screen and (min-width: 1440px) {
  max-width: 250px;
  position: relative;
  right: 30px;
}
`