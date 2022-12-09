const {lcQueries} = require('./constants');

const lcOptions = (query_type, username, altOptions={}) => {
    const options = {
      username,
      ...altOptions
    };
    
    return {
        'method': 'GET',
        'url': 'https://leetcode.com/graphql/',
        'headers': {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "query": lcQueries[query_type],
          "variables": options
        })
      }
}

module.exports = {
    lcOptions,
}
