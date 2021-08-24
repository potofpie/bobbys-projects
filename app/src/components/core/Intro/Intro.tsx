import React, {FC} from 'react';
import {FadeIn} from '../FadeIn'
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown'
import { useQuery } from '@apollo/client';
import { getSummaries } from '../../qurries';
import 'react-typist/dist/Typist.css';



const IntroContainer = styled.div.attrs(() => ({
    className: ` lg:w-1/2 grid grid-cols-1 divide-y divide-black `
    }))``

// const NameText = styled.h1.attrs(() => ({
//     className: `lg:text-2xl text-xs`
//     }))``

// const TitleText = styled.h2.attrs(() => ({
//     className: `lg:text-base font-light text-xs`
//     }))``
    

const IntroText = styled.h3.attrs(() => ({
    className: `py-4 font-light lg:text-base text-xs`
    }))``

const LinksText = styled.h3.attrs(() => ({
    className: `py-4 font-light lg:text-xs text-xs`
    }))``

export const Intro: FC = () => {
  const {data} = useQuery(getSummaries)

  return (
    <IntroContainer>
            <IntroText>
                <ReactMarkdown>
                    {data?.summaries[0]?.welcometext}
                </ReactMarkdown>
            </IntroText>
            <LinksText>
                Looking for a contractor? 👷‍♂️
            </LinksText>
    </IntroContainer>
  )
}