const { apolloClient } = require('../utils');
const gql = require("graphql-tag");
const interestsQuery = gql`
{
  interestCategories {
    name
    interests {
      name
    } 
  }
}
`;
exports.interestsQuery = async () => {
  const res = await apolloClient.query({query: interestsQuery})  
  return res.data.interestCategories.map((cat) => {  
    cat.keywords = cat.interests.map( s => s.name)
    return cat
  })
} 