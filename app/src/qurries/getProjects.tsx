import { gql } from '@apollo/client';
export const getProjects = gql`
{
    projects {
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