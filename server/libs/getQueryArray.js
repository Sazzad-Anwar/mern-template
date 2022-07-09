const queryArray = (reqQuery) => {
  let query = [];
  for (const [key, value] of Object.entries(reqQuery)) {
    query.push({ [key]: value });
  }

  return query;
};

module.exports = queryArray;
