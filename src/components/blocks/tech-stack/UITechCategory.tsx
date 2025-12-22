import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UITechCategoryProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: string;
}

const UITechCategory = ({ children, className, ...props }: UITechCategoryProps) => {
    return (
        <h3
            className={twMerge(clsx('text-xl font-medium text-neutral-950 dark:text-neutral-50'), className)}
            {...props}
        >
            {children}
        </h3>
    );
};

export default UITechCategory;
