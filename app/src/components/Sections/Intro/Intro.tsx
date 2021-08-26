import { FC } from 'react';
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { SectionContainer, HorizonalSectionItems, UndrawImage } from '../../layouts'
import { getSummaries, getFreelancerLinks } from '../../../qurries';
import { hackerMind } from '../../../assets'
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';



const IntroContainer = styled.h3.attrs(() => ({
    className: 
    `
        flex 
        flex-1 
        flex-col 
        justify-center
        items-center
        m-5
    `
    }))``

const IntroText = styled.h3.attrs(() => ({
    className: `
        py-4 
        font-light 
        lg:text-base 
        max-w-md	
        text-xs
        m
        `
    }))``

const LinksText = styled.h3.attrs(() => ({
    className: `py-4 font-light lg:text-base text-xs`
    }))``



export const Intro: FC = () => {
    const { data: summary } = useQuery(getSummaries)
    const { data: links } = useQuery(getFreelancerLinks)

  return (
      <SectionContainer>
            <HorizonalSectionItems id='HorizonalSectionItems'>
            <IntroContainer>

                <IntroText >
                    <ReactMarkdown>
                        {summary?.summaries[0]?.welcometext}
                    </ReactMarkdown>
                {/* <Divider style={{marginTop: 15}}/> */}
                </IntroText>
                <LinksText>
                    Looking for a contractor? 👷‍♂️
                    <Divider style={{marginTop: 15}}/>
                </LinksText>
                
                <div className={`
                        flex 
                        flex-1 
                        flex-row 
                        justify-center
                        items-center 

                `}>
                <Divider style={{marginTop: 15}}/>

                    {links?.profiles?.map((l : any) => 
                        <Tooltip title={l.name} > 
                            <a href={l.url}> <img alt={l.name} className='icon-link w-8 m-2' src={l?.networkIcon?.url} />   </a> 
                        
                        </Tooltip>)}
                </div>
                    

            </IntroContainer>

                <UndrawImage src={hackerMind} />
            </HorizonalSectionItems>

      </SectionContainer>
      
  );
}