import { gql } from '@apollo/client';
export const getSkills = gql`
{
  skillCategories {
    name
    level
    skills {
      skillName  
    }
  }
}
  
`;