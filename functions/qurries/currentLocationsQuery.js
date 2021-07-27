const { apolloClient } = require('../utils');
const gql = require("graphql-tag");
const currentLocationsQuery = gql`
{
  currentlocations {
    city
    countryCode
    region
  }
}
`;
exports.currentLocationsQuery = async () => {
  const res = await apolloClient.query({query: currentLocationsQuery})  
  return res.data.currentlocations[0]
} 