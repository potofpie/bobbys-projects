const { apolloClient } = require('../utils');
const gql = require("graphql-tag");
const moment = require("moment");
const jobsQuery = gql`
{
  jobs(orderBy: startDate_DESC) {
  company
  position
  website
  summary
  highlights
  startDate
  endDate
  }
}
`;
const dateFormat = "YYYY-MM-DD";
exports.jobsQuery = async () => {
  const res = await apolloClient.query({query: jobsQuery})
  return res.data.jobs
} 