import {FC} from 'react';
import styled from 'styled-components';
import { Projects,Skills,Intro } from './Sections'
import {justHackerCircle }  from '../assets';
import RubberBand from 'react-reveal/RubberBand';



const AppContainer = styled.div.attrs(() => ({
  className: `flex flex-1 flex-col custom-tan justify-center items-center `
  }))``



const Footer = styled.div.attrs(() => ({
  className: `flex text-black flex-row w-full font-light items-center justify-center text-xs m-2`
  }))``


const Header = styled.div.attrs(() => ({
  className: `flex flex-row custom-purp items-center text-white justify-left w-full p-4 h-20 z-50`
  }))`
  `
  const ResumeButton = styled.a.attrs(() => ({
    className: `m-50 p-1 float-left shadow-lg rounded-sm	`
    }))`
      background-color: #8985a8;
      &:hover {
        background-color: #575374;
      }

    `


export const App: FC = () => {
  return (
    <>
      <AppContainer>
        <Header style={{position: 'fixed',top: 0, left: 0}}>
          <div style={{display: 'flex', flex: 1, textAlign: 'center',height: '100%', alignItems: 'center'}}>
            <img src={justHackerCircle} alt={'hackerProfile'} style={{height: '100%', margin: 10}}/> 
            <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center', }} >
              <b>  Bobby Christopher </b>  
               <div className='invisible md:visible' > - Full Stack Software Engineer</div>
            </div>
          </div>
          <div >
            <RubberBand forever={true}>
              <ResumeButton target="_blank"  href={'https://bobby-christopher.com/resume'}>Resumé</ResumeButton>
            </RubberBand>
          </div>
        </Header>
        <div style={{height: 80, width: '100%'}} />



        <Intro/>
        <Projects/>
        <Skills/>

        <Footer>
          Designed & Built by Bobby Christopher © 2021
        </Footer>


      </AppContainer>
    </>
  );
}

export default App;
