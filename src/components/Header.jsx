import { ReactPropTypes } from "react";
import { useState } from "react";
import Button from "./Button";

const Header = ({ title, showAddTaskForm, toggleAddTaskForm }) => {
	return (
		<header className="header">
			<h1>{title}</h1>

			<Button
				color={showAddTaskForm ? "red" : "#006400"}
				text={showAddTaskForm ? "Hide Add Task" : "Show Add Task"}
				onClick={toggleAddTaskForm}
			/>
		</header>
	);
};

Header.defaultProps = {
	title: "Default Title",
};

export default Header;
