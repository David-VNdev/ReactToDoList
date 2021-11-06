import Header from "./components/Header";
import Tasks from "./components/Tasks";
import  AddTaskForm  from "./components/AddTaskForm";
import React, { useState } from "react";

function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(true);
	const [tasks, setTasks] = useState([
		{ id: 1, text: "Study HTML", day: "5/10/2021", reminder: true },
		{ id: 2, text: "Study CSS", day: "6/11/2021", reminder: true },
		{ id: 3, text: "Study JS", day: "7/13/2021", reminder: true },
	]);
  
	const canToggleReminder = id => {
		setTasks(
      tasks.map(task =>  task.id === id ? { ...task, reminder: !task.reminder } : task )
    )
	};

	const canDeleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id));
    console.log(id)
	};
  
  const canAddTask = task => setTasks([...tasks, task]);
	return (
		<div className="container">
			<Header showAddTaskForm={showAddTaskForm} toggleAddTaskForm = {()=>{setShowAddTaskForm(!showAddTaskForm)}}/>
      {showAddTaskForm && <AddTaskForm canAddTask={canAddTask}/>}
			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					canDeleteTask={canDeleteTask}
					canToggleReminder={canToggleReminder}
				/>
			) : (
				<p>You have nothing left to be done</p>
			)}
		</div>
	);
}

export default App;
