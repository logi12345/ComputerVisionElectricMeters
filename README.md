# ComputerVisionElectricMeters
Simple app that uses Microsofts Computer Vision API to retrieve OCR data from Electric Meters and write the data to a file.

### Prerequisites
Microsoft Azure Account with access to the computer vision API.
Node.js, NPM need to installed.

### Installing
```npm install```

## Getting Started
Add your key for getting requests from the API to the config file.

Find and image url that you would like find OCR data for.
The EnergyMeterURLS.js contains an array holding the image urls add the url there.

Finally in the terminal run.
```node ComputerVision.js```

The EnergyMeterImageData.json should know have an objects containing the words found on each image in an array.



