import React, {FC} from 'react';
import { SectionContainer, UndrawImage, HorizonalSectionItems } from '../../layouts'
import styled  from 'styled-components';
import { serverImage } from '../../../assets'
import { getProjects,getDonateLinks } from '../../../qurries'
import {useQuery} from '@apollo/client'
import { ProjectItem } from '../../core/ProjectItem'
import Carousel from 'react-material-ui-carousel'
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';






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
   const LinksText = styled.h3.attrs(() => ({
      className: `py-4 font-light lg:text-base text-xs`
      }))``
  

export const Projects: FC = () => {
   const {data} = useQuery(getProjects)
   const { data : donateLinks} = useQuery(getDonateLinks)
   console.log({donateLinks})


  const projects = data?.projects?.filter((link: any) => link.onSite)
  return (
     <>
      <SectionContainer>
      <HorizonalSectionItems id='HorizonalSectionItems'>

          
              <UndrawImage src={serverImage} />
         <IntroContainer>

         <Carousel className='h-full' animation={'slide'}>
              {projects?.map((item: any) => <ProjectItem item={item}/>)}
         </Carousel>

         </IntroContainer>
         </HorizonalSectionItems>

         
      </SectionContainer>
                <div className={`
                        flex 
                        
                        flex-col 
                        justify-center
                        items-center 

                `}>
 
                            <LinksText>
               Maybe donate to my cloud bills? 🤷‍♂️
               <Divider style={{margin: 10}}/>
                </LinksText>
                
                <div className={`
                        flex 
                        
                        flex-row 
                        justify-center
                        items-center 

                `}>
                    {donateLinks?.profiles?.map((l : any) => 
                        <Tooltip title={l.name} > 
                            <a href={l.url}> <img alt={l.name} className='icon-link w-8 m-2' src={l?.networkIcon?.url} />   </a> 
                        
                        </Tooltip>)}
                        </div>
            </div>
            </>
      
  );
}