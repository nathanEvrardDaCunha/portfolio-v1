import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

const ThemeToggle = ({ className }: { className?: string }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (theme === 'dark' || (!theme && systemPrefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={twMerge(
                clsx(
                    'flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 bg-neutral-50 transition-all duration-300 ease-in-out',
                    'hover:scale-110 hover:bg-neutral-300',
                    'focus:scale-110 focus:bg-neutral-300',
                    'dark:border-neutral-700 dark:bg-neutral-950',
                    'dark:hover:bg-neutral-700',
                    'dark:focus:bg-neutral-700'
                ),
                className
            )}
        >
            {isDark ? <Sun className="h-4 w-4 text-neutral-50" /> : <Moon className="h-4 w-4 text-neutral-950" />}
        </button>
    );
};

export default ThemeToggle;
