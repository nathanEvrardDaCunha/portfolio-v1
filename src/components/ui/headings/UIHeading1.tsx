import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UIHeading1Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: string;
}

const UIHeading1 = ({ children, className, ...props }: UIHeading1Props) => {
    return (
        <h1
            className={twMerge(clsx('text-3xl font-bold text-neutral-950', 'dark:text-neutral-50'), className)}
            {...props}
        >
            {children}
        </h1>
    );
};

export default UIHeading1;
