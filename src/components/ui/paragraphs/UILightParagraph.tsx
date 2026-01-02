import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UILightParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: string;
}

const UILightParagraph = ({ children, className, ...props }: UILightParagraphProps) => {
    return (
        <p
            className={twMerge(clsx('text-base font-normal text-neutral-700', 'dark:text-neutral-300'), className)}
            {...props}
        >
            {children}
        </p>
    );
};

export default UILightParagraph;
