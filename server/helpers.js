const {lcQueries} = require('./constants');

const lcOptions = (query_type, username, limit) => {
    const options = {
      username
    };
    if (limit) options.limit = limit;
    
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
