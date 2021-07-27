const { apolloClient } = require('../utils');
const gql = require("graphql-tag");
const educationQuery = gql`
{
  educations {
    institution
    area
    studyType
    startDate
    endDate
    
  }
}
`;
exports.educationQuery = async () => {
  const res = await apolloClient.query({query: educationQuery})  
  return res.data.educations
} 