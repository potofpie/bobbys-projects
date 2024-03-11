const { apolloClient } = require('../utils');
const gql = require("graphql-tag");
const resumeBasicsQuery = gql(`
{
  resumeBasics {
    name
    label
    email
    phone
    website
    picture
  }
}
`);
exports.resumeBasicsQuery = async () => {
  const res = await apolloClient.query({query: resumeBasicsQuery})  
  return res.data.resumeBasics[0]
} 
