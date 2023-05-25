const xlsx = require('xlsx');
const axios = require('axios');
const { config } = require('dotenv');

require('dotenv').config();

const fileLocation = process.env.FILE_LOCATION;
const file = xlsx.readFile(fileLocation);

const sheetName = file.SheetNames[0];
const sheet = file.Sheets[sheetName];

const jsonArray = xlsx.utils.sheet_to_json(sheet, { header: 1 });

jsonArray.forEach((json, count) => {
	console.log('Element #' + count);
	console.log(json);
});

//TODO Send every element to HubSpot
// const endpoint = '/crm/v3/objects/';
const method = 'POST';
const apiUrl = process.env.HUBSPOT_API_URL;
const apiKey = process.env.HUBSPOT_API_KEY;
const url = apiUrl + `${endpoint}?hapikey=` + apiKey;
const headers = { 'Content-Type': 'application/json' };

// const config = { method, url, headers, jsonArray };
axios(config)
	.then((res) => {
		console.log('Data sent to HubSpot!', res.data);
	})
	.catch((err) => {
		console.log('ERROR: Sending data to HubSpot failed!', err);
	});
    
//TODO Use @hubspot/api-client
