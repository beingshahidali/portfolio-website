import React, { useState } from 'react';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`dark-mode-container ${darkMode ? 'dark-mode' : ''}`}>
            <label className="switch">
                <input type="checkbox" onChange={handleToggle} checked={darkMode} />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default DarkModeToggle;
