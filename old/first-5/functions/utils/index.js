const { ApolloClient } = require("apollo-client")
const { createHttpLink } = require("apollo-link-http")
const { InMemoryCache } = require("apollo-cache-inmemory")


const  fetch =  require("cross-fetch");
const URL = "https://api-ca-central-1.graphcms.com/v2/ckoblbf13q0sd01yz5ci89etl/master";
exports.apolloClient = new ApolloClient({
link:  createHttpLink({
    uri: `${URL}`, fetch,
    credentials: "same-origin", 
}),

cache: new InMemoryCache()
});
