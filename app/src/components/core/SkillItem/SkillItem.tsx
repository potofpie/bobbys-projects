import { FC } from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';




const ItemContainer = styled.div.attrs(() => ({
  className: `text-left transition duration-500 ease-in-out bg-white h-52 max-w-md py-4 px-8 bg-white shadow-lg hover:shadow-2xl  rounded-lg my-5 lg:mx-5 w-96 		`
  }))``



interface SkillItemProps {
  skillCategory: any;
}

const getSkillColor = (level: string)  => {
  switch(level){
    case 'beginner':
      return 'text-red-500'
    case 'intermediate':
      return 'text-yellow-500'
    case 'advanced':
      return 'text-green-500'
    case 'master':
      return 'text-blue-500'

  }

}


export const SkillItem: FC<SkillItemProps> = ({skillCategory}) => {
  return (
    <ItemContainer>
      <p>{skillCategory?.name}</p>
      <p className={`${getSkillColor(skillCategory?.level)}	font-light text-xs	`} >{skillCategory?.level}</p>
      <Divider style={{margin: 10}}/>
        {skillCategory?.skills.map((skill: any) => <li className={`text-gray-500 font-light text-xs`}>  {skill?.skillName} </li>)}


    </ItemContainer>
  )
}