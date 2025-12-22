import clsx from 'clsx';
import { twJoin } from 'tailwind-merge';

interface UITechsProps extends React.HTMLAttributes<HTMLUListElement> {
    children: React.ReactNode;
}

const UITechs = ({ children, className, ...props }: UITechsProps) => {
    return (
        <ul className={twJoin(clsx('flex flex-row flex-wrap gap-6'), className)} {...props}>
            {children}
        </ul>
    );
};

export default UITechs;
