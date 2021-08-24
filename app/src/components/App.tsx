import React, {FC} from 'react';
import styled from 'styled-components';

import { ProjectItem } from './ProjectItem'
import { SkillItem } from './SkillItem'

import {useQuery} from '@apollo/client'
import { Intro } from './Intro'
import { Links } from './Links'
import { getProjects } from '../qurries'
import ScrollAnimation from 'react-animate-on-scroll'

import {terminalButtons, justHacker, skillsImage, serverImage, justHackerCircle, hackerMind }  from '../assets';

import { FadeIn } from './FadeIn'
import './App.scss';



const AppContainer = styled.div.attrs(() => ({
  className: `flex flex-1 flex-col custom-tan`
  }))``

const YScroll = styled.div.attrs(() => ({
  className: `flex flex-1 p-2 flex-col items-center overflow-y-scroll` 
  }))``

const XScroll = styled.div.attrs(() => ({
  className: `flex flex-1 p-2 flex-row items-center overflow-x-scroll` 
  }))``
  

const Top = styled.div.attrs(() => ({
  className: `flex flex-1 custom-tan text-black p-2 text-center`
  }))``


const Footer = styled.div.attrs(() => ({
  className: `flex text-black flex-row w-full font-light items-center justify-center text-xs m-2`
  }))``


const Header = styled.div.attrs(() => ({
  className: `flex flex-row custom-purp items-center text-white justify-left w-full p-4 h-20`
  }))``

const TopLeft = styled.div.attrs(() => ({
  className: `flex flex-1 justify-center items-center`
  }))``

const TopRight = styled.div.attrs(() => ({
  className: `flex flex-1 justify-center items-center`
  }))``
  
const Logo = styled.img.attrs(() => ({
  className: `max-h-96`
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

        <img src={justHackerCircle} style={{height: '100%', margin: 10}}/> <p><b>  Bobby Christopher </b> - Full Stack Software Engineer </p>
        </Header>
        <Top>
          <div className="flex flex-1 flex-row	">
            <TopLeft>
              <Intro/>
            </TopLeft>
            <TopRight >
              <FadeIn delay={500} duration={450}>
                <Logo alt={'serverImage'} src={hackerMind} />
              </FadeIn>
            </TopRight>
          </div>
        </Top>





        <Top>
          <div className="flex flex-1 flex-row	">
            <TopLeft>
                <Logo alt={'skillsImage'} src={skillsImage} />
              </TopLeft>
          <TopRight >
             <YScroll>

              {projects?.map((item: any) => <SkillItem item={item}/>)}
             </YScroll>
            </TopRight>
          </div>

        </Top>

        <Top>


             <TopLeft>
             <XScroll>
              {projects?.map((item: any) => <ProjectItem item={item}/>)}
             </XScroll>
              </TopLeft>
          <TopRight >
                <Logo alt={'serverImage'} src={serverImage} />
            </TopRight>



        </Top>

        <Footer>
         Designed & Built by Bobby Christopher © 2021
        </Footer>


      </AppContainer>
    </>
  );
}

export default App;
