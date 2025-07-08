import algoliasearch from 'algoliasearch';

/**
 * Returns an application from Algolia
 * @param {string} applicationID The ID for the application
 * @returns {object} The application
 */
export default function getApplication(applicationID) {
  const client = algoliasearch('BCXURW325T', 'c8de156030678c41928d24b889dcefec');
  const index = client.initIndex('general_application_dev_amer');

  index.getObject(applicationID)
       .then(object => {
         console.log(object);
         return object;
       })
       .catch(err => {
         console.error(err);
       });

  return client;
}
