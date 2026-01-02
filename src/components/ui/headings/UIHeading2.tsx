import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UIHeading2Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: string;
}

const UIHeading2 = ({ children, className, ...props }: UIHeading2Props) => {
    return (
        <h2
            className={twMerge(clsx('text-2xl font-bold text-neutral-950', 'dark:text-neutral-50'), className)}
            {...props}
        >
            {children}
        </h2>
    );
};

export default UIHeading2;
