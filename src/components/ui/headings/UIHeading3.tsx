import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UIHeading3Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: string;
}

const UIHeading3 = ({ children, className, ...props }: UIHeading3Props) => {
    return (
        <h3 className={twMerge(clsx('text-lg font-bold text-neutral-950 dark:text-neutral-50'), className)} {...props}>
            {children}
        </h3>
    );
};

export default UIHeading3;
