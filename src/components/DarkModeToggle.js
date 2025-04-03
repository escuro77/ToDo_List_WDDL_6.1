import React, { useState } from "react";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.style.backgroundColor = darkMode ? "#fff" : "#222";
        document.body.style.color = darkMode ? "#000" : "#fff";
    };

    return (
        <button onClick={toggleTheme} style={{ position: "absolute", top: "10px", right: "10px", padding: "10px", cursor: "pointer" }}>
            {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
    );
};

export default DarkModeToggle;
