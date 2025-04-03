import React from "react";
import TodoList from "./components/TodoList";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";

function App() {
    return (
        <div>
            <DarkModeToggle />
            <TodoList />
        </div>
    );
}

export default App;
