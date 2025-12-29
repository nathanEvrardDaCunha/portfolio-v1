import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UISmallLightParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: string;
}

const UISmallLightParagraph = ({ children, className, ...props }: UISmallLightParagraphProps) => {
    return (
        <p
            className={twMerge(clsx('text-[12px] font-normal text-neutral-700', 'dark:text-neutral-300'), className)}
            {...props}
        >
            {children}
        </p>
    );
};

export default UISmallLightParagraph;
