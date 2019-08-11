'use strict';

//Internal Packages
const fs = require('fs');

//External Packages
const request = require('request');

//Internal Modules

//URLs for the images
const { EnergyMeterURLs } = require('./EnergyMeterURLS');

//configuration to request from API
const { uriBase, params, subscriptionKey} = require('./config.js');

//File for handeling reading and writing to a file
const { ReadAndWrite } = require('./utils/FileHandler');

//Pipe to format the data
const { pipe } = require('./utils/DataManipulationHelpers');


//Main Request to the Microsoft Computer Vision API with OCR configurations
const computerVisionAPIRequestOCR = (imageUrl) =>{
    //Options for the request specifying what visual data you would like to recieve
    const options = {
        uri: uriBase,
        qs: params,
        body: '{"url": ' + '"' + imageUrl + '"}',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        }
    };

    request.post(options, (error, response, body) => {
        if (error) {
            console.log('Error: ', error);
            return;
        }

        let jsonResponse = JSON.parse(body);

        //Format the response with words found for each Image 
        jsonResponse = jsonResponse.regions;
        jsonResponse =  pipe(jsonResponse, 'lines', 'words');

        //ReadAndWrite the desired data to a file
        ReadAndWrite(jsonResponse);
    });
};

//Clear the data in the file at the beginning
fs.writeFileSync('EnergyMeterImageData.json', '');

//Make the request for each URL in the EnergyMeterURLS file
EnergyMeterURLs.forEach(imageUrl => {
    computerVisionAPIRequestOCR(imageUrl);
});




