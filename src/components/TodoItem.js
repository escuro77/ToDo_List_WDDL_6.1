import React from "react";

const TodoItem = ({ task, onDelete }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <span>{task.text} (Due: {task.deadline})</span>
            <button onClick={onDelete} style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
                Delete
            </button>
        </div>
    );
};

export default TodoItem;
