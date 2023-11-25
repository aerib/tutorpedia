// pages/index.jsx

import { useEffect, useState } from 'react';
import { fetchRecords, createRecord, updateRecord, deleteRecord } from '../lib/airtable';

const Home = () => {
    const [selectedRecord, setSelectedRecord] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    nama_acara: '',
    waktu: '',
    lokasi: '',
    penyelenggara: '',
    deskripsi: '',
    kontak: '',
  });

  useEffect(() => {
    fetchAirtableRecords();
  }, []);

  const fetchAirtableRecords = async () => {
    const fetchedRecords = await fetchRecords();
    setRecords(fetchedRecords);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateRecord = async () => {
    await createRecord(formData);
    setFormData({
      nama_acara: '',
      waktu: '',
      lokasi: '',
      penyelenggara: '',
      deskripsi: '',
      kontak: '',
    });
  
    // Fetch records after adding a new record
    const updatedRecords = await fetchRecords();
    setRecords(updatedRecords);
  };
  
  const handleSelectRecord = (record) => {
    setSelectedRecord(record);
    setFormData({
      nama_acara: record.fields.nama_acara,
      waktu: record.fields.waktu,
      lokasi: record.fields.lokasi,
      penyelenggara: record.fields.penyelenggara,
      deskripsi: record.fields.deskripsi,
      kontak: record.fields.kontak,
    });
    setIsUpdate(true);
  };

  const handleCancelUpdate = () => {
    setSelectedRecord(null);
    setIsUpdate(false);
    setFormData({
      nama_acara: '',
      waktu: '',
      lokasi: '',
      penyelenggara: '',
      deskripsi: '',
      kontak: '',
    });
  };

  const handleUpdateRecord = async (recordId) => {
    await updateRecord(recordId, formData);

    // Fetch records after updating
    const updatedRecords = await fetchRecords();
    setRecords(updatedRecords);

    setSelectedRecord(null);
    setIsUpdate(false);
    setFormData({
      nama_acara: '',
      waktu: '',
      lokasi: '',
      penyelenggara: '',
      deskripsi: '',
      kontak: '',
    });
  };

  
  const handleDeleteRecord = async (recordId) => {
    await deleteRecord(recordId);
    fetchAirtableRecords();
  };

  return (
    <div>
      <h1>Event Management</h1>

      <form>
        <input type="text" name="nama_acara" value={formData.nama_acara} onChange={handleInputChange} placeholder="Nama Acara" />
        <input type="text" name="waktu" value={formData.waktu} onChange={handleInputChange} placeholder="Waktu" />
        <input type="text" name="lokasi" value={formData.lokasi} onChange={handleInputChange} placeholder="Lokasi" />
        <input type="text" name="penyelenggara" value={formData.penyelenggara} onChange={handleInputChange} placeholder="Penyelenggara" />
        <input type="text" name="deskripsi" value={formData.deskripsi} onChange={handleInputChange} placeholder="Deskripsi" />
        <input type="text" name="kontak" value={formData.kontak} onChange={handleInputChange} placeholder="Kontak" />
        
        {isUpdate ? (
          <>
            <button type="button" onClick={() => handleUpdateRecord(selectedRecord.id)}>Update</button>
            <button type="button" onClick={handleCancelUpdate}>Cancel</button>
          </>
        ) : (
          <button type="button" onClick={handleCreateRecord}>Add Record</button>
        )}
      </form>

      <ul>
        {records &&
          records.map((record) => (
            <li key={record.id}>
              <h3>{record.fields.nama_acara}</h3>
              <p>Waktu: {record.fields.waktu}</p>
              <p>Lokasi: {record.fields.lokasi}</p>
              <p>Penyelenggara: {record.fields.penyelenggara}</p>
              <p>Deskripsi: {record.fields.deskripsi}</p>
              <p>Kontak: {record.fields.kontak}</p>

              <button type="button" onClick={() => handleSelectRecord(record)}>Select</button>
              <button type="button" onClick={() => handleDeleteRecord(record.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
