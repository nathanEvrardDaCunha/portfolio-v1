import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UISmallLightTimeProps extends React.HTMLAttributes<HTMLTimeElement> {
    children: string;
    dateTime: string;
}

const UISmallLightTime = ({ children, className, dateTime, ...props }: UISmallLightTimeProps) => {
    return (
        <time
            dateTime={dateTime}
            className={twMerge(clsx('text-[12px] font-normal text-neutral-700 dark:text-neutral-300'), className)}
            {...props}
        >
            {children}
        </time>
    );
};

export default UISmallLightTime;
