import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTaskForm from "./components/AddTaskForm";
import { useState, useEffect } from "react";

function App() {
	const [showAddTaskForm, setShowAddTaskForm] = useState(true);
	const [tasks, setTasks] = useState([]);

	useEffect(() => loadFromServer(), []);
	const loadFromServer = () => {
		fetch("http://localhost:8000/tasks")
			.then((response) => response.json())
			.then((data) => setTasks(data));
	};
	const canToggleReminder = async(id) => {
    const response = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...tasks.find((task) => task.id === id),
        reminder: !tasks.find((task) => task.id === id).reminder,
      }),
    });

		setTasks(
			tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task))
		);
	};

	const canDeleteTask = async (id) => {
		console.log(id);
		await fetch(`http://localhost:8000/tasks/${id}`, { method: "DELETE" });
    loadFromServer();
	};

	const canAddTask = async (task) => {
		await fetch("http://localhost:8000/tasks/", {
			method: "POST",
			body: JSON.stringify(task),
			headers: { "Content-Type": "application/json" },
		});

    loadFromServer();
	};
	return (
		<div className="container">
			<Header
				showAddTaskForm={showAddTaskForm}
				toggleAddTaskForm={() => {
					setShowAddTaskForm(!showAddTaskForm);
				}}
			/>
			{showAddTaskForm && <AddTaskForm canAddTask={canAddTask} />}
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
