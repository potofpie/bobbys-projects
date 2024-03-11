const { apolloClient } = require('../utils');
const gql = require("graphql-tag");
const moment = require("moment");
const themesQueryString = gql`
  {
    themes {
      id
      themeOptionEnum
    }
}
`;
const dateFormat = "YYYY-MM-DD";
exports.themesQuery = async () => {
  const res = await apolloClient.query({query: themesQueryString})
  console.log({res})
  return res.data.themes[0].themeOptionEnum
} 