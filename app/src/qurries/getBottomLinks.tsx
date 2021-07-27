import { gql } from '@apollo/client';
export const getBottomLinks = gql`
{
  profiles {
    name
    url
    glitch
    onSite
  }
}
`;