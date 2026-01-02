import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface UITechsProps extends React.HTMLAttributes<HTMLUListElement> {
    children: React.ReactNode;
}

const UITechs = ({ children, className, ...props }: UITechsProps) => {
    return (
        <ul className={twMerge(clsx('flex flex-row flex-wrap gap-6'), className)} {...props}>
            {children}
        </ul>
    );
};

export default UITechs;
