import { gql } from '@apollo/client';
export const getDonateLinks = gql`
{
  profiles(where: {linkType : donate, onSite : true }) {
    name
    url
    glitch
    onSite
    networkIcon {
      url
    }
  }
}
`;