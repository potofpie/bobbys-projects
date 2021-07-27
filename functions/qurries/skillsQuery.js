const { apolloClient } = require('../utils');
const gql = require("graphql-tag");


const skillLevel = {
  beginner: 0,
  intermediate: 1,
  advanced: 2, 
  master: 3
}

const skillsQuery = gql`
{
  skillCategories {
    name
    level
    skills {
      skillName
    }
  }
}
`;


exports.skillsQuery = async () => {
  const res = await apolloClient.query({query: skillsQuery})  
  return res.data.skillCategories.map((cat) => {  
    cat.keywords = cat.skills.map( s => s.skillName)
    return cat
  })
  .sort((a, b) => skillLevel[b.level] - skillLevel[a.level]  )
} 