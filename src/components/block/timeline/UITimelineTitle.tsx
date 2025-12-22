import clsx from 'clsx';
import { twJoin } from 'tailwind-merge';

interface UITimelineTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: string;
}

const UITimelineTitle = ({ children, className, ...props }: UITimelineTitleProps) => {
    return (
        <h3 className={twJoin(clsx('text-lg font-bold text-neutral-950 dark:text-neutral-50'), className)} {...props}>
            {children}
        </h3>
    );
};

export default UITimelineTitle;
