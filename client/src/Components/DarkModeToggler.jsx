import { useEffect, useState } from 'react';

const DarkModeToggler = ({ className }) => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div className={className}>
            <span
                onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark');
                    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
                }}
                className="material-icons-outlined cursor-pointer hover:text-gray-700 dark:text-white dark:hover:text-gray-300 transition-all ease-in-out"
            >
                {localStorage.theme === 'dark' ||
                (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches)
                    ? 'light_mode'
                    : 'nightlight_round'}
            </span>
        </div>
    );
};

export default DarkModeToggler;
