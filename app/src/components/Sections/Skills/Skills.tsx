import { FC } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { SectionContainer, HorizonalSectionItems, UndrawImage } from '../../layouts'
import { getSkills, getSocialLinks } from '../../../qurries';
import { skillsImage } from '../../../assets'
import { SkillItem } from '../../core/SkillItem'
import Tooltip from '@material-ui/core/Tooltip';

import Carousel from 'react-material-ui-carousel'
import { Divider } from '@material-ui/core';

const LinksText = styled.h3.attrs(() => ({
    className: `py-4 font-light lg:text-base text-xs`
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
    
    export const Skills: FC = () => {
       const { data } = useQuery(getSkills)
       const { data : socailLinks} = useQuery(getSocialLinks)

       
       return (
           <>
          <SectionContainer>
            <HorizonalSectionItems id='HorizonalSectionItems'>
            <IntroContainer>

            <Carousel className='h-full'  animation={'slide'}>

                {data?.skillCategories?.map((item: any) => <SkillItem skillCategory={item}/>)}
            </Carousel>

            </IntroContainer>

            </HorizonalSectionItems>
         <UndrawImage src={skillsImage} />
         

      </SectionContainer>
                <LinksText>
                Want to chat or check out my profiles? 💬
                <Divider style={{margin: 10}}/>

                </LinksText>
                <Divider />
                
                <div className={`
                        flex 
                        
                        flex-row 
                        justify-center
                        items-center 

                `}>
                    {socailLinks?.profiles?.map((l : any) => 
                        <Tooltip title={l.name} > 
                            <a href={l.url}> <img alt={l.name} className='icon-link w-8 m-2' src={l?.networkIcon?.url} />   </a> 
                        
                        </Tooltip>)}
                        </div>
      </>
      
  );
}