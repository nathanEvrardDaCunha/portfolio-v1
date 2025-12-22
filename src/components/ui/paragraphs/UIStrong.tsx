import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UIStrongProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

const UIStrong = ({ children, className, ...props }: UIStrongProps) => {
    return (
        <strong className={twMerge(clsx('font-black text-blue-700 dark:text-blue-300'), className)} {...props}>
            {children}
        </strong>
    );
};

export default UIStrong;
