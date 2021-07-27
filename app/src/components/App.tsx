import React, {FC} from 'react';
import styled from 'styled-components';

import { Item } from './Item'
// import { Modal } from './Modal'
import {useQuery} from '@apollo/client'
import { Intro } from './Intro'
import { Links } from './Links'
import { getProjects } from '../qurries'

import {terminalButtons, justHacker }  from '../assets';

import { FadeIn } from './FadeIn'
import './App.scss';



const AppContainer = styled.div.attrs(() => ({
  className: `flex flex-1 flex-col custom-tan`
  }))``

const Bottom = styled.div.attrs(() => ({
  className: `flex flex-1 p-2 flex-col items-center overflow-y-scroll` 
  }))``

const Top = styled.div.attrs(() => ({
  className: `flex flex-1 custom-purp text-white p-2 text-center`
  }))``


const Footer = styled.div.attrs(() => ({
  className: `flex text-black flex-row w-full font-light items-center justify-center text-xs m-2`
  }))``


const Header = styled.div.attrs(() => ({
  className: `flex text-center flex-col custom-purp items-end justify-center w-full p-4 h-10`
  }))``

const TopLeft = styled.div.attrs(() => ({
  className: `flex flex-1 justify-center items-center`
  }))``

const TopRight = styled.div.attrs(() => ({
  className: `flex flex-1 justify-center items-center`
  }))``
  
const Logo = styled.img.attrs(() => ({
  className: `max-h-80`
  }))`
  `

const TerminalImage = styled.img.attrs(() => ({
  className: `w-11 z-10`
  }))`
  `

export const App: FC = () => {
  const {data} = useQuery(getProjects)
  const projects = data?.projects?.filter((link: any) => link.onSite)
  return (
    <>
      <AppContainer>
        <Header>
          <TerminalImage src={terminalButtons} alt="logo" />
        </Header>
        <Top>
          <div className="flex flex-1 flex-row	">
            <TopLeft>
              <Intro/>
            </TopLeft>
            <TopRight >
            <FadeIn delay={500} duration={450}>
              <Logo alt={'justHacker'} src={justHacker} />
            </FadeIn>
            </TopRight>
          </div>
        </Top>


        <Bottom>
          <FadeIn delay={500} duration={450}>
            {projects?.map((item: any) => <Item item={item}/>)}
          </FadeIn>
        </Bottom>

        <Footer>
          <Links/>
        </Footer>


      </AppContainer>
    </>
  );
}

export default App;
