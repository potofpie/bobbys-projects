import {FC} from 'react';
import styled from 'styled-components';
import { Projects,Skills,Intro } from './Sections'
import {justHackerCircle }  from '../assets';


const AppContainer = styled.div.attrs(() => ({
  className: `flex flex-1 flex-col custom-tan justify-center items-center `
  }))``



const Footer = styled.div.attrs(() => ({
  className: `flex text-black flex-row w-full font-light items-center justify-center text-xs m-2`
  }))``


const Header = styled.div.attrs(() => ({
  className: `flex flex-row custom-purp items-center text-white justify-left w-full p-4 h-20`
  }))``


export const App: FC = () => {
  return (
    <>
      <AppContainer>
        <Header>
          <img src={justHackerCircle} alt={'hackerProfile'} style={{height: '100%', margin: 10}}/> <p><b>  Bobby Christopher </b> - Full Stack Software Engineer </p>
        </Header>

        <Intro/>
        <Skills/>
        <Projects/>

        <Footer>
          Designed & Built by Bobby Christopher © 2021
        </Footer>


      </AppContainer>
    </>
  );
}

export default App;
