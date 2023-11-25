// lib/airtable.js

import Airtable from 'airtable';

const base = new Airtable({
  apiKey: 'patYVtJTAMfpIhno6.30022b97b74e0c60b70a42110bca732cbf31a84c00380a48248dad1186232276',
  endpointUrl: 'https://api.airtable.com',
}).base('appjC0zdeebAkRLuM');

const fetchRecords = async () => {
  const records = await base('informasi_acara').select().all();
  return records;
};

const createRecord = async (fields) => {
  await base('informasi_acara').create(fields);
};

const updateRecord = async (recordId, fields) => {
  await base('informasi_acara').update(recordId, fields);
};

const deleteRecord = async (recordId) => {
  await base('informasi_acara').destroy(recordId);
};

export { fetchRecords, createRecord, updateRecord, deleteRecord };
