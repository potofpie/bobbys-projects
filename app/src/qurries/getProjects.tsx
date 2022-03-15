import { gql } from '@apollo/client';
export const getProjects = gql`
{
    projects(orderBy: position_ASC){
      name
      description
      githubLink
      url
      onResume
      onSite
      startDate
      endDate
      demo {
        id
        url
      }
    }
  }
  
`;