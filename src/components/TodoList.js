import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const [deadline, setDeadline] = useState("");

    const addTask = () => {
        if (input.trim() && deadline) {
            setTasks([...tasks, { id: tasks.length, text: input, deadline }]);
            setInput("");
            setDeadline("");
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const items = [...tasks];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setTasks(items);
    };

    return (
        <div style={{ width: "350px", margin: "20px auto", textAlign: "center" }}>
            <h2>To-Do List</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a task..."
                style={{ padding: "8px", width: "60%", marginRight: "5px" }}
            />
            <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                style={{ padding: "8px", marginRight: "5px" }}
            />
            <button onClick={addTask} style={{ padding: "8px", background: "blue", color: "white", border: "none" }}>
                Add
            </button>

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="tasks">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} style={{ marginTop: "20px" }}>
                            {tasks.map((task, index) => (
                                <Draggable key={task.id} draggableId={String(task.id)} index={index}>
                                    {(provided) => (
                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <TodoItem task={task} onDelete={() => deleteTask(task.id)} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default TodoList;
