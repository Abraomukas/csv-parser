const xlsx = require('xlsx');

const fileLocation = './HubpotDB.xlsx';
const file = xlsx.readFile(fileLocation);

const sheetName = file.SheetNames[0];
const sheet = file.Sheets[sheetName];

const json = xlsx.utils.sheet_to_json(sheet, { header: 1 });

console.log(json);
