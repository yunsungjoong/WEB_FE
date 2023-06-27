import { createContext, useContext, useState} from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
        updateDarkMode(!darkMode)
    }
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

function updateDarkMode(darkMode) {
    if(darkMode) {
        document.documentElement.classList.add('dark') // 추가
    } else {
        document.documentElement.classList.remove('dark') // 제거 
    }
}
export const useDarkMode = () => useContext(DarkModeContext);