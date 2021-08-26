import { FC } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { SectionContainer, HorizonalSectionItems, UndrawImage } from '../../layouts'
import { getSkills } from '../../../qurries';
import { skillsImage } from '../../../assets'
import { SkillItem } from '../../core/SkillItem'


const YScroll = styled.div.attrs(() => ({
   className: `flex flex-1 p-2 flex-col items-center overflow-y-scroll max-h-72	` 
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
       
       return (
          <SectionContainer>
            <HorizonalSectionItems id='HorizonalSectionItems'>
         <UndrawImage src={skillsImage} />
            <IntroContainer>

            <YScroll>

                {data?.skillCategories?.map((item: any) => <SkillItem skillCategory={item}/>)}
            </YScroll>

            </IntroContainer>

            </HorizonalSectionItems>

      </SectionContainer>
      
  );
}