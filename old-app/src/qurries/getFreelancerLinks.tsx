import { gql } from '@apollo/client';
export const getFreelancerLinks = gql`
{
  profiles(where: {linkType : freelancer, onSite : true }) {
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