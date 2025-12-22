import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UISmallParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

const UISmallParagraph = ({ children, className, ...props }: UISmallParagraphProps) => {
    return (
        <p
            className={twMerge(clsx('text-[12px] font-medium text-neutral-950 dark:text-neutral-50'), className)}
            {...props}
        >
            {children}
        </p>
    );
};

export default UISmallParagraph;
