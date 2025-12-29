import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UIOutsideListProps extends React.HTMLAttributes<HTMLUListElement> {
    children: React.ReactNode;
}

const UIOutsideList = ({ children, className, ...props }: UIOutsideListProps) => {
    return (
        <ul
            className={twMerge(
                clsx('ml-4 flex list-outside list-disc flex-col text-neutral-950', 'dark:text-neutral-50'),
                className
            )}
            {...props}
        >
            {children}
        </ul>
    );
};

export default UIOutsideList;
