import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UITimelineStatusProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: string;
}

const UITimelineStatus = ({ children, className, ...props }: UITimelineStatusProps) => {
    return (
        <p
            className={twMerge(clsx('mb-4 text-base font-normal text-neutral-700 dark:text-neutral-300'), className)}
            {...props}
        >
            {children}
        </p>
    );
};

export default UITimelineStatus;
