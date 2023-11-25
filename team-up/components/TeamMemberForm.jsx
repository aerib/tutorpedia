// components/TeamMemberForm.js

import { useState } from 'react';

const TeamMemberForm = () => {
  const [memberName, setMemberName] = useState('');

  const handleAddMember = () => {
    // Logika untuk menambah anggota tim dan mengirim ke Airtable
    console.log('Anggota Baru:', memberName);
    // Implementasikan fungsi untuk mengirim data ke Airtable di sini
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Nama Anggota Tim"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
        className="border border-gray-300 p-2 rounded-md mb-2"
      />
      <button onClick={handleAddMember} className="bg-green-500 text-white px-4 py-2 rounded-md">
        Tambah Anggota
      </button>
    </div>
  );
};

export default TeamMemberForm;
