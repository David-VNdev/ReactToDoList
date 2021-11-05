
import  { useState } from "react";
import Task from "./Task";
const Tasks = ({ tasks,canDeleteTask }) => {
	return (
		<>
			{tasks.map(task => (
				<Task key={task.id} task={task} canDeleteTask={canDeleteTask} />
			))}
		</>
	);
};

export default Tasks;
