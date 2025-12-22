import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UITimelineDateProps extends React.HTMLAttributes<HTMLTimeElement> {
    children: string;
    dateTime: string;
}

const UITimelineDate = ({ children, className, dateTime, ...props }: UITimelineDateProps) => {
    return (
        <time
            dateTime={dateTime}
            className={twMerge(clsx('text-[12px] text-neutral-700 dark:text-neutral-300'), className)}
            {...props}
        >
            {children}
        </time>
    );
};

export default UITimelineDate;
