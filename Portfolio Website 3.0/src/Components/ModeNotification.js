import React, { useState, useEffect } from 'react';

const ModeNotification = ({ darkMode }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to show the notification
    const showNotification = () => {
        setIsVisible(true);

        // Automatically hide the notification after 2 seconds
        setTimeout(() => {
            setIsVisible(false);
        }, 2000);
    };

    // Listen for changes in darkMode and show the notification when it changes
    useEffect(() => {
        if (darkMode !== undefined) {
            showNotification();
        }
    }, [darkMode]);

    return (
        <div
            className={`mode-notification ${isVisible ? 'visible' : ''} ${darkMode ? 'dark-mode' : ''}`}
        >
            {darkMode ? 'Dark Mode Enabled' : 'Light Mode Enabled'}
        </div>
    );
};

export default ModeNotification;
