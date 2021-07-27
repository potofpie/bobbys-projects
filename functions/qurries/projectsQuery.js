const { apolloClient } = require('../utils');
const gql = require("graphql-tag");
const projectsQuery = gql`
{
    projects(orderBy: startDate_DESC) {
      name
      description
      githubLink
      url
      onResume
      startDate
      endDate
      demo {
        id
        url
      }
    }
  }
`;
exports.projectsQuery = async () => {
  const res = await apolloClient.query({query: projectsQuery})
  const projects = res.data.projects.filter((link) => link.onResume)
  return  projects 
} 
