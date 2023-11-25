// components/TaskStatus.js

const TaskStatus = () => {
    // Logika untuk mendapatkan dan menampilkan status tugas dari Airtable
    const tasks = [
      { id: 1, name: 'Task 1', status: 'In Progress' },
      { id: 2, name: 'Task 2', status: 'To Do' },
      { id: 3, name: 'Task 3', status: 'Done' },
      // Daftar tugas dari Airtable akan ditampilkan di sini
    ];
  
    return (
      <ul className="list-disc pl-6">
        {tasks.map((task) => (
          <li key={task.id} className="mb-2">
            <span className="font-semibold">{task.name}</span>: {task.status}
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskStatus;
  