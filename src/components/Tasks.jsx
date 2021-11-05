
import  { useState } from "react";
import Task from "./Task";
const Tasks = ({ tasks,canDeleteTask ,canToggleReminder}) => {
	return (
		<>
			{tasks.map(task => (
				<Task key={task.id} task={task} canDeleteTask={canDeleteTask} canToggleReminder={canToggleReminder} />
			))}
		</>
	);
};

export default Tasks;
