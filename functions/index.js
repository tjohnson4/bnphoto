const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.menu = functions.https.onRequest((request, response) => {
  response.json(
      {
        "results": [
            {
                "name": "Central Valley",
                "id": "central-valley"
            },
            {
                "name": "Rio de Janerio",
                "id": "rio-de-janeiro"
            }
        ]
      }
  );
});
