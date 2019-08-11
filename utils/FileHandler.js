const fs = require('fs');

const ReadAndWrite = async(jsonResponse) => {
    let file = {
        ImageOCRData: [],
    };
    try {
        //Read Data from the file
        const bufferData = await fs.readFileSync('EnergyMeterImageData.json');
        const bufferDataToString = await bufferData.toString();
        file = JSON.parse(bufferDataToString);
    }
    catch (err) {
        
    }
    //write data to the file
    file.ImageOCRData.push(jsonResponse);
    await fs.writeFileSync('EnergyMeterImageData.json', await JSON.stringify(file));
};

module.exports = {
    ReadAndWrite
};