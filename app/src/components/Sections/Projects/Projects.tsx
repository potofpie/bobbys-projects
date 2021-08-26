import React, {FC} from 'react';
import { SectionContainer, UndrawImage } from '../../layouts'
import styled  from 'styled-components';
import { serverImage } from '../../../assets'
import { getProjects } from '../../../qurries'
import {useQuery} from '@apollo/client'
import { ProjectItem } from '../../core/ProjectItem'



const XScroll = styled.div.attrs(() => ({
   className: `flex flex-1 p-2 flex-row items-center overflow-x-scroll  max-h-96 max-w-lg	` 
   }))``
 

const IntroContainer = styled.h3.attrs(() => ({
   className: 
   `
       flex 
       flex-1 
       flex-col 
       justify-center
       items-center 
   `
   }))``


export const Projects: FC = () => {
   const {data} = useQuery(getProjects)

  const projects = data?.projects?.filter((link: any) => link.onSite)
  return (
      <SectionContainer>
         <IntroContainer>

         <XScroll>
              {projects?.map((item: any) => <ProjectItem item={item}/>)}
              {/* {<ProjectItem item={projects[0]}/> }
              {<ProjectItem item={projects[0]}/> }

              {<ProjectItem item={projects[0]}/> } */}


         </XScroll>

         </IntroContainer>
         <UndrawImage src={serverImage} />
      </SectionContainer>
      
  );
}