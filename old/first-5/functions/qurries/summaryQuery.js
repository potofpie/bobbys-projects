const { apolloClient } = require('../utils');
const gql = require("graphql-tag");
const summaryQuery = gql(`
{
    summaries {
      id
      welcometext
    }
  }
`);
exports.summaryQuery = async () => await apolloClient.query({query: summaryQuery}) 
