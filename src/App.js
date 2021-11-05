import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
		{ id: 1, text: "Study HTML", day: "5/10/2021", reminder: true },
		{ id: 2, text: "Study CSS", day: "6/11/2021", reminder: true },
		{ id: 3, text: "Study JS", day: "7/13/2021", reminder: true },
	]);


  const canDeleteTask=(id)=> {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className = 'container'>
      <Header />
      <Tasks tasks={tasks} canDeleteTask={canDeleteTask}/>
    </div>
  );
}

export default App;
