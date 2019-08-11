// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '<Subscription Key>';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://uksouth.api.cognitive.microsoft.com/vision/v2.0/ocr';


// Request parameters.
const params = {
    'language': 'unk',
    'detectOrientation': 'true',
};

module.exports = {
    subscriptionKey, uriBase, params
};