import React, { useState, useEffect } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setTasks(data.tasks))
      .catch(error => console.error('Error:', error));
  }, []);

  const addTask = () => {
    setTasks([...tasks, { name: newTask, status: "High" }]);
    setNewTask("");
  };

  return (
    <div className="container mt-2">
      <div className="d-flex justify-content-between mt-2">
        <h2>Task List</h2>
        <button type="button" className="btn btn-primary" onClick={addTask}>
          <i className="fa-solid fa-plus"></i> Add Task
        </button>
      </div>
      <table className="table">
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td className="align-middle">
                <div className="task-name">
                  <p>Task</p>
                  <span>{task.name}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <input value={newTask} onChange={e => setNewTask(e.target.value)} />
    </div>
  );
}

export default App;