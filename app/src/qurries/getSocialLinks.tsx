import { gql } from '@apollo/client';
export const getSocialLinks = gql`
{
  profiles(where: {linkType : social, onSite : true }) {
    name
    url
    glitch
    onSite
  }
}
`;