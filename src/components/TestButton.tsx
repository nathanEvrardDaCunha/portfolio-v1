import clsx from 'clsx';
import { twJoin } from 'tailwind-merge';

interface TestButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: string;
}

const TestButton = ({ children, className, ...props }: TestButtonProps) => {
    return (
        <button
            className={twJoin(
                clsx('bg-red-700 px-4 py-2 text-white', 'hover:bg-red-800', 'sm:px-8 sm:py-3'),
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default TestButton;
