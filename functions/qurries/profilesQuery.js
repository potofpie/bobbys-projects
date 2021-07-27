const { apolloClient } = require('../utils');
const gql = require("graphql-tag");
const profilesQuery = gql`
{
    profiles {
      name
      url
      username
      glitch
      network
      onResume
    }
  }
`;
exports.profilesQuery = async () => {
  const res = await apolloClient.query({query: profilesQuery})  
  return res.data.profiles.filter((link) => link.onResume)
} 