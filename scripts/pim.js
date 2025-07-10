import { algoliasearch } from '../node_modules/algoliasearch/dist/browser.min.js';

/**
 * Returns an application from Algolia
 * @param {string} applicationID The ID for the application
 * @returns {object} The application
 */
async function getApplication(applicationID) {
  const client = algoliasearch('BCXURW325T', 'c8de156030678c41928d24b889dcefec');
  const indexName = 'general_applications_dev_amer';
  const response = await client.search({
    requests: [
      {
        indexName,
        query: applicationID,
      },
    ],
  });

  if (response.results && response.results.length) {
    const results = Array.from(response.results);
    if (results[0].hits && results[0].hits.length) {
      const hits = Array.from(results[0].hits);
      return hits[0];
    }
  }
  return null;
}

export { getApplication };
