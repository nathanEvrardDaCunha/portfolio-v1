import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UIParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

const UIParagraph = ({ children, className, ...props }: UIParagraphProps) => {
    return (
        <p
            className={twMerge(clsx('text-base font-medium text-neutral-950', 'dark:text-neutral-50'), className)}
            {...props}
        >
            {children}
        </p>
    );
};

export default UIParagraph;
