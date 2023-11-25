// components/ProjectForm.js

import { useState } from 'react';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');

  const handleCreateProject = () => {
    // Logika untuk membuat proyek baru dan mengirim ke Airtable
    console.log('Proyek Baru:', projectName);
    // Implementasikan fungsi untuk mengirim data ke Airtable di sini
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Nama Proyek"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        className="border border-gray-300 p-2 rounded-md mb-2"
      />
      <button onClick={handleCreateProject} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Buat Proyek
      </button>
    </div>
  );
};

export default ProjectForm;
