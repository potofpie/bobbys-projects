import React, {FC} from 'react';
import { SectionContainer, UndrawImage } from '../../layouts'
import styled  from 'styled-components';
import { serverImage } from '../../../assets'
import { getProjects } from '../../../qurries'
import {useQuery} from '@apollo/client'
import { ProjectItem } from '../../core/ProjectItem'
import Carousel from 'react-material-ui-carousel'




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

         <Carousel>
              {projects?.map((item: any) => <ProjectItem item={item}/>)}
              {/* {<ProjectItem item={projects[0]}/> }
              {<ProjectItem item={projects[0]}/> }

              {<ProjectItem item={projects[0]}/> } */}


         </Carousel>

         </IntroContainer>
         <UndrawImage src={serverImage} />
      </SectionContainer>
      
  );
}