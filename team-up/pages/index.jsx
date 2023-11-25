// pages/index.js

import Head from 'next/head';
import ProjectForm from '../components/ProjectForm'; // Komponen untuk membuat proyek baru
import TeamMemberForm from '../components/TeamMemberForm'; // Komponen untuk menambah anggota tim
import TaskStatus from '../components/TaskStatus'; // Komponen untuk melihat status tugas

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Projek Kolaboratif</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-8">
        <h1 className="text-3xl font-bold mb-4">Aplikasi Pelacakan Proyek Kolaboratif</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Buat Proyek Baru</h2>
          <ProjectForm /> {/* Komponen untuk form membuat proyek baru */}
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Tambah Anggota Tim</h2>
          <TeamMemberForm /> {/* Komponen untuk form menambah anggota tim */}
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">Status Tugas</h2>
          <TaskStatus /> {/* Komponen untuk melihat status tugas */}
        </section>
      </main>

      <footer>
        {/* Footer */}
      </footer>
    </div>
  );
}
